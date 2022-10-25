import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getOneUser,
  getAllUsers,
} from '../controllers';

const router = Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.patch('/:id');
router.delete('/:id', deleteUser);

export default router;
