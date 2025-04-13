import { Types } from 'mongoose';

export type TApplyStudentPost = {
  studentId: Types.ObjectId;
  tutorId: Types.ObjectId;
  tuitionId: Types.ObjectId;
  paymentStatus?: boolean;
  selectStatus?: boolean;
};
