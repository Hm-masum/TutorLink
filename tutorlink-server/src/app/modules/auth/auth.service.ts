import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import config from '../../config';
import { TLoginUser } from './auth.interface';
import { User } from '../user/user.model';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not Found! ');
  }

  const matchedPassword = await User.isPasswordMatched(
    payload?.password,
    user?.password,
  );
  if (!matchedPassword) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched! ');
  }

  const jwtPayload = {
    id: user?._id,
    email: user?.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { email } = decoded;

  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not Found! ');
  }

  const jwtPayload = {
    id: user?.id,
    email: user?.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return { accessToken };
};

export const AuthServices = {
  loginUser,
  refreshToken,
};
