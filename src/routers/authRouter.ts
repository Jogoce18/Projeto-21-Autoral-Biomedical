import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.js';
import userController from '../controllers/authController.js';
import userSchema from '../schemas/authSchema.js';
import signInSchema from '../schemas/signInSchema.js';

const userRouter = Router();

userRouter.post('/sign-up', validateSchema(userSchema), userController.signUp);
userRouter.post('/sign-in', validateSchema(signInSchema), userController.signIn);

export default userRouter;