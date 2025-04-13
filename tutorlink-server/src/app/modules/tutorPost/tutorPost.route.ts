import express from 'express';
import { TutorPostController } from './tutorPost.controller';

const router = express.Router();

router.post('/', TutorPostController.createTutorPost);
router.get('/', TutorPostController.getAllTutorPosts);
router.get('/:id', TutorPostController.getSingleTutorPost);
router.delete('/:id', TutorPostController.deleteTutorPost);
router.patch('/:id', TutorPostController.updateTutorPost);

export const TutorPostRoutes = router;
