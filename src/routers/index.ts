import { Router } from 'express';
import userRouter from './authRouter.js';
import maintenanceRouter from './maintenanceRouter.js';
import clientRouter from './clientRouter.js';
import guidanceRouter from './guidanceRouter.js';

const router = Router();

router.use(userRouter);
router.use(maintenanceRouter);
router.use(clientRouter);
router.use(guidanceRouter);

export default router;