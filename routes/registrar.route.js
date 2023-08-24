import express from 'express'
var registrarRouter = express.Router()
import { RetornarEjs } from '../controller/registrar.controller.js'

registrarRouter.get('/', RetornarEjs)

export default registrarRouter