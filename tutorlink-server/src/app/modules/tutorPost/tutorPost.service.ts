import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TutorPost } from './tutorPost.model';
import { TTutorPost } from './tutorPost.interface';

const createTutorPostIntoDB = async (payload: TTutorPost) => {
  const result = await TutorPost.create(payload);
  return result;
};

const getAllTutorPostsFromDB = async () => {
  const result = await TutorPost.find();
  return result;
};

const getSingleTutorPostFromDB = async (id: string) => {
  const result = await TutorPost.findById(id);
  return result;
};

const updateTutorPostFromDB = async (
  id: string,
  payload: Partial<TTutorPost>,
) => {
  const isPostExist = await TutorPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await TutorPost.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTutorPostIntoDB = async (id: string) => {
  const isPostExist = await TutorPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await TutorPost.findByIdAndDelete(id, { new: true });
  return result;
};

export const TutorPostService = {
  createTutorPostIntoDB,
  getAllTutorPostsFromDB,
  getSingleTutorPostFromDB,
  updateTutorPostFromDB,
  deleteTutorPostIntoDB,
};
