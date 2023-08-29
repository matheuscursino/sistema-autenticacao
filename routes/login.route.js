import express from 'express'
var loginRouter = express.Router()
import { ChecarUsuarioESenha, RetornarEjs } from '../controller/login.controller.js'


loginRouter.get('/', RetornarEjs)
loginRouter.post('/', ChecarUsuarioESenha)

export default loginRouter;