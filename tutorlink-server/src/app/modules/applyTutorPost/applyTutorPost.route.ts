import express from 'express';
import { ApplyTutorPostController } from './applyTutorPost.controller';
const router = express.Router();

router.post('/', ApplyTutorPostController.createApplyTutorPost);
router.get('/', ApplyTutorPostController.getAllApplyTutorPosts);
router.get('/:id', ApplyTutorPostController.getSingleApplyTutorPost);
router.get('/student', ApplyTutorPostController.getApplyTutorPostForStudent);
router.get('/tutor', ApplyTutorPostController.getApplyTutorPostForTutor);
router.delete('/:id', ApplyTutorPostController.deleteApplyTutorPost);
router.patch('/:id', ApplyTutorPostController.updateApplyTutorPost);

export const ApplyTutorPostRoutes = router;
