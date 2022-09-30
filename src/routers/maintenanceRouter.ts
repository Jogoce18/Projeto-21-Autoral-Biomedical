import { Router } from 'express';
import projectController from '../controllers/maintenanceController.js';
import {validateJWT } from '../middlewares/validateJWT.js';
import { validateSchema} from '../middlewares/validateSchema.js';
import projectSchema from '../schemas/maintenanceSchema.js';

const maintenanceRouter = Router();

maintenanceRouter.post('/users/:userId/project', validateJWT, validateSchema(projectSchema), projectController.create);
maintenanceRouter.get('/users/:userId/projects', validateJWT, projectController.findMany);
maintenanceRouter.get('/users/:userId/projects/:projectId', validateJWT, projectController.find);
maintenanceRouter.patch('/users/:userId/projects/:projectId/done', validateJWT, projectController.updateDone);

export default  maintenanceRouter;