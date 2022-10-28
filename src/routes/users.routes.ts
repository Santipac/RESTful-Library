import { Router } from 'express';
import {
  createUsers,
  deleteUser,
  getOneUser,
  getUsers,
  updateUser,
} from '../controllers';

const router = Router();

router.post('/', createUsers);
router.get('/', getUsers);
router.get('/:id', getOneUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
