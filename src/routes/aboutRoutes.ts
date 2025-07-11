import { Router } from 'express';
import { getAboutInfo } from '../controllers/AboutController';

const router = Router();

router.get('/', getAboutInfo);

export default router;
