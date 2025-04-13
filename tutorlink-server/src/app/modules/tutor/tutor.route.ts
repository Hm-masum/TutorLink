import express from 'express';
import { TutorController } from './tutor.controller';

const router = express.Router();

router.get('/', TutorController.getAllTutors);
router.get('/:id', TutorController.getSingleTutor);
router.delete('/:id', TutorController.deleteTutor);
router.patch('/:id', TutorController.updateTutor);

export const TutorRoutes = router;
