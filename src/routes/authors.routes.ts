import { Router } from 'express';
import {
  createAuthors,
  getAuthorById,
  getAuthors,
  updateAuthorById,
  deleteAuthorById,
} from '../controllers';

const router = Router();

router.post('/', createAuthors);
router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.patch('/:id', updateAuthorById);
router.delete('/:id', deleteAuthorById);
export default router;
