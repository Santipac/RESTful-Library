import { Router } from 'express';
import {
  createBooks,
  deleteBooks,
  getBookById,
  getBooks,
  updateBooks,
} from '../controllers';
const router = Router();

router.post('/', createBooks);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.patch('/:id', updateBooks);
router.delete('/:id', deleteBooks);

export default router;
