import express from 'express';
import { ApplyStudentPostController } from './applyStudentPost.controller';

const router = express.Router();

router.post('/', ApplyStudentPostController.createApplyStudentPost);
router.get('/', ApplyStudentPostController.getAllApplyStudentPosts);
router.get('/:id', ApplyStudentPostController.getSingleApplyStudentPost);
router.get(
  '/student',
  ApplyStudentPostController.getApplyStudentPostForStudent,
);
router.get('/tutor', ApplyStudentPostController.getApplyStudentPostForTutor);
router.delete('/:id', ApplyStudentPostController.deleteApplyStudentPost);
router.patch('/:id', ApplyStudentPostController.updateApplyStudentPost);

export const ApplyStudentPostRoutes = router;
