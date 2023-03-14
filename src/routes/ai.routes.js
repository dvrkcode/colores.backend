import { Router } from 'express';
import AIController from '../controllers/ai.controller.js';

const router = Router();

router.get('/ai', AIController)

export default router;