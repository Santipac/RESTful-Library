import { Router } from 'express';
import { createBooks } from '../controllers';
const router = Router();

router.post('/', createBooks);
router.get('/');
router.get('/id');
router.patch('/id');
router.delete('/id');

export default router;
