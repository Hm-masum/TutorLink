import express from 'express';
import { StudentPostController } from './studentPost.controller';
const router = express.Router();

router.post('/', StudentPostController.createStudentPost);
router.get('/', StudentPostController.getAllStudentPosts);
router.get('/:id', StudentPostController.getSingleStudentPost);
router.delete('/:id', StudentPostController.deleteStudentPost);
router.patch('/:id', StudentPostController.updateStudentPost);

export const StudentPostRoutes = router;
