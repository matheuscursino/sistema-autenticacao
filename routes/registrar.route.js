import express from 'express'
var registrarRouter = express.Router()
import { RetornarEjs, RegistrarUsuario } from '../controller/registrar.controller.js'

registrarRouter.get('/', RetornarEjs)
registrarRouter.post('/', RegistrarUsuario)

export default registrarRouter