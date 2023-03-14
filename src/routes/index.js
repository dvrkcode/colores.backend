import { Router } from 'express';

// routes
import aiRouter from './ai.routes.js';

const router = Router()

router.use(aiRouter)

export default router;
