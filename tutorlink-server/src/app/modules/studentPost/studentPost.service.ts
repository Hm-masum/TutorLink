import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { StudentPost } from './studentPost.model';
import { TStudentPost } from './studentPost.interface';

const createStudentPostIntoDB = async (payload: TStudentPost) => {
  const result = await StudentPost.create(payload);
  return result;
};

const getAllStudentPostsFromDB = async () => {
  const result = await StudentPost.find();
  return result;
};

const getSingleStudentPostFromDB = async (id: string) => {
  const result = await StudentPost.findById(id);
  return result;
};

const updateStudentPostFromDB = async (
  id: string,
  payload: Partial<TStudentPost>,
) => {
  const isPostExist = await StudentPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await StudentPost.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteStudentPostIntoDB = async (id: string) => {
  const isPostExist = await StudentPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await StudentPost.findByIdAndDelete(id, { new: true });
  return result;
};

export const StudentPostService = {
  createStudentPostIntoDB,
  getAllStudentPostsFromDB,
  getSingleStudentPostFromDB,
  updateStudentPostFromDB,
  deleteStudentPostIntoDB,
};
