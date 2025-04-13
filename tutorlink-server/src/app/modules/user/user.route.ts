import { UserController } from './user.controller';
import express from 'express';

const router = express.Router();

router.post('/create-student', UserController.createStudent);
router.post('/create-tutor', UserController.createTutor);
router.post('/me', UserController.getMe);

export const UserRoutes = router;
