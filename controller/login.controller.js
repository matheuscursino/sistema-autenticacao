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
    if (req.cookies.access_token == undefined){
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

    consultar()
                .then( () => {
                    usuarioDocValores = Object.values(usuarioDoc)
                    usuarioDocId = usuarioDocValores[0].toHexString()
                    usuarioDocSenha = usuarioDocValores[3]
                    if (usuarioDoc == null) {
                        res
                            .status(404)
                            .send('{ "erro": "usuario nao encontrado" }')
                    } else if (reqSenha != usuarioDocSenha) {
                        res
                            .status(401)
                            .send('{ "erro": "senha incorreta" }')
                    } else if (reqSenha == usuarioDocSenha){
                        const token = jwt.sign({usuarioDocId}, process.env.SEGREDO)
                        res
                            .cookie('access_token', token, {httpOnly: true, sameSite: true})
                            .status(200)
                            .send('{ "erro": "login feito com sucesso" }')
                    }
                })
                .catch( (err) => {
                    res
                        .status(500)
                        .send('{ "erro": "erro no banco de dados" }')
                })

}

async function consultar() {
    usuarioDoc = await usuarioModel.findOne({usuario: reqUsuario}).lean()
}


  