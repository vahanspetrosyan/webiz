import { Router } from 'express';
import UserController from '../controllers/user.controller';
const userController = new UserController();

const user = Router();

user.get('/', userController.getAllUsers);
user.get('/import', userController.importUsers);

export default user;
