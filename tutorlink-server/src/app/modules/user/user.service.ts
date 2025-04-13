/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';
import { TStudent } from '../student/student.interface';
import { TTutor } from '../tutor/tutor.interface';
import { Student } from '../student/student.model';
import { Tutor } from '../tutor/tutor.model';
import mongoose from 'mongoose';

const createStudentIntoDB = async (payload: TStudent) => {
  const existingUser = await User.isUserExistsEmail(payload.email);
  if (existingUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User is already exist');
  }

  const userData: Partial<TUser> = {};
  userData.password = payload.password;
  userData.role = 'student';
  userData.email = payload.email;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    const newStudent = await Student.create(payload);

    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createTutorIntoDB = async (payload: TTutor) => {
  const existingUser = await User.isUserExistsEmail(payload.email);
  if (existingUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User is already exist');
  }

  const userData: Partial<TUser> = {};
  userData.password = payload.password;
  userData.role = 'tutor';
  userData.email = payload.email;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    const newStudent = await Student.create(payload);
    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create tutor');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const getMe = async (userId: string, role: string) => {
  let result = null;

  if (role === 'student') {
    result = await Student.findOne({ _id: userId }).populate('user');
  }

  if (role === 'tutor') {
    result = await Tutor.findOne({ _id: userId }).populate('user');
  }

  return result;
};

export const UserServices = {
  createStudentIntoDB,
  createTutorIntoDB,
  getMe,
};
