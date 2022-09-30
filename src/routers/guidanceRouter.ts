import { Router } from 'express';
import guidanceController from '../controllers/guidanceController.js';
import { validateJWT } from '../middlewares/validateJWT.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import guidanceSchema from '../schemas/guidanceSchema.js';

const guidanceRouter = Router();

guidanceRouter.post('/projects/:projectId/guidance',validateJWT, validateSchema(guidanceSchema),
  guidanceController.create );
guidanceRouter.get('/projects/:projectId/guidance',validateJWT, guidanceController.findMany);

export default guidanceRouter;