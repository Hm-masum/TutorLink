import { Types } from 'mongoose';

export type TApplyTutorPost = {
  studentId: Types.ObjectId;
  tutorId: Types.ObjectId;
  tuitionId: Types.ObjectId;
  paymentStatus?: boolean;
  selectStatus?: boolean;
};
