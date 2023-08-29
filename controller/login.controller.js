var usuarioDoc
var usuarioDocValores
var usuarioDocId
var usuarioDocSenha
var reqBodyValores
var reqUsuario
var reqSenha

import usuarioModel from '../model/usuario.model.js'
import jwt from 'jsonwebtoken'

export function RetornarEjs(req, res) {
    if (req.cookies = {}){
        res
            .status(200)
            .render("../view/login.ejs")
    } else {
        res
            .status(403)
            .redirect('/segredo')
    }
}

export function ChecarUsuarioESenha(req, res) {
    reqBodyValores = Object.values(req.body)
    reqUsuario = reqBodyValores[0]
    reqSenha = reqBodyValores[1]

    consultar().then( () => {
        usuarioDocValores = Object.values(usuarioDoc)
        usuarioDocId = usuarioDocValores[0].toHexString()
        usuarioDocSenha = usuarioDocValores[3]
        if (usuarioDoc == null) {
            res
                .status(404)
                .send('Usuário não encontrado')
        } else if (reqSenha != usuarioDocSenha) {
            res
                .status(401)
                .send('Senha incorreta')
        } else if (reqSenha == usuarioDocSenha){
            const token = jwt.sign({usuarioDocId}, process.env.SEGREDO)
            res
                .status(200)
                .cookie('access_token', token, {httpOnly: true})
                .redirect('/segredo')
        }
    }) 
}

async function consultar() {
    usuarioDoc = await usuarioModel.findOne({usuario: reqUsuario}).lean()
}


  