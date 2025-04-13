import { Types } from 'mongoose';

export type TStudentPost = {
  studentId: Types.ObjectId;
  title: string;
  institute: string;
  tutoringTime: string;
  numberOfStudent: string;
  studentGender: string;
  thana: string;
  district: string;
  curriculum: string;
  class: string;
  subject: string;
  teacherGender: string;
  daysPerWeek: string;
  salary: string;
};
