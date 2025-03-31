import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/tickets', ticketRouter);
router.use('/users', userRouter);
router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);

export default router;
