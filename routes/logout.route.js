import express from 'express'
const logoutRouter = express.Router();
import { logout } from '../controller/logout.controller.js';

logoutRouter.get('/', logout)

export default logoutRouter