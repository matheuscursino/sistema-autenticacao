import express from 'express'
var router = express.Router();
import { ChecarUsuarioESenha, RetornarEjs } from '../controller/login.controller.js';


router.get('/', RetornarEjs);
router.post('/', ChecarUsuarioESenha);

export default router;