import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getOneUser,
  getAllUsers,
  updateUser,
} from '../controllers';

const router = Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
