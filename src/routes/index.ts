import { Router } from 'express';

import projectRoutes from './projectRoutes';
import aboutRoutes from './aboutRoutes';
import contactRoutes from './contactRoutes';

// Teste da API
// import { getUsers } from '../controllers/UserController';

const router = Router();

router.use('/projects', projectRoutes);
router.use('/about', aboutRoutes);
router.use('/contact', contactRoutes);

// API de usuários
// router.get('/users', getUsers);

export default router;
