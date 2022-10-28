import { Router } from 'express';
import { createEditorials, getEditorials } from '../controllers';

const router = Router();

router.post('/', createEditorials);
router.get('/', getEditorials);

export default router;
