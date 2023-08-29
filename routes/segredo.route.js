import express from 'express'
var segredoRouter = express.Router()
import RetornarEjs from '../controller/segredo.controller.js'

segredoRouter.get('/', RetornarEjs)

export default segredoRouter