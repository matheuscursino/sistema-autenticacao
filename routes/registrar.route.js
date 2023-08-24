import express from 'express'
var router2 = express.Router()
import { RetornarEjs } from '../controller/registrar.controller'

router2.get('/', RetornarEjs)

export default router2