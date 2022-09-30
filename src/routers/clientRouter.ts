import { Router } from 'express';
import clientController from '../controllers/clientController.js';
import { validateJWT } from '../middlewares/validateJWT.js';
import { validateSchema} from '../middlewares/validateSchema.js';
import clientSchema from '../schemas/clientSchema.js';

const clientRouter = Router();

clientRouter.post('/users/:userId/client',validateJWT, validateSchema(clientSchema), clientController.create);
clientRouter.get('/users/:userId/clients', validateJWT, clientController.findByUserId);

export default clientRouter;