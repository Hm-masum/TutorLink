import { Schema, model } from 'mongoose';
import { TStudentPost } from './studentPost.interface';

const studentPostSchema = new Schema<TStudentPost>(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    tutoringTime: {
      type: String,
      required: true,
    },
    numberOfStudent: {
      type: String,
      required: true,
    },
    studentGender: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    thana: {
      type: String,
      required: true,
    },
    curriculum: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    teacherGender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    daysPerWeek: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const StudentPost = model<TStudentPost>(
  'StudentPost',
  studentPostSchema,
);
