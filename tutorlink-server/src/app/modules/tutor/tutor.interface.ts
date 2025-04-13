import { Types } from 'mongoose';

export type TTutor = {
  name: string;
  fatherName: string;
  motherName: string;
  user: Types.ObjectId;
  password: string;
  gender: 'male' | 'female';
  email: string;
  phone: string;
  image: string;
  thana: string;
  district: string;
  tuition?: {
    duration?: string;
    fees?: string;
    level?: string;
    subject?: string[];
    curriculum?: string;
    status?: 'available' | 'unavailable';
  };
  education?: {
    graduationCurriculum?: string;
    graduationInstitute?: string;
    graduationSubject?: string;
    graduationPassingYear?: string;
    graduationResult?: string;

    higherSecondaryCurriculum?: string;
    higherSecondaryGroup?: string;
    higherSecondaryInstitute?: string;
    higherSecondaryPassingYear?: string;
    higherSecondaryResult?: string;

    secondaryCurriculum?: string;
    secondaryGroup?: string;
    secondaryInstitute?: string;
    secondaryPassingYear?: string;
    secondaryResult?: string;
  };
  isActive?: boolean;
};
