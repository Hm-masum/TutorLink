import { Types } from 'mongoose';

export type TTutorPost = {
  tutorId: Types.ObjectId;
  title: string;
  tutoringTime: string;
  numberOfStudent: string;
  class: string;
  daysPerWeek: string;
  thana: string;
  district: string;
  curriculum: string;
  studentGender: string;
  subject: string;
  salary: string;
};
