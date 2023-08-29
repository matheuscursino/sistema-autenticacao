var usuarioDoc;
var usuarioDocValores;
var usuarioDocId;
var usuarioDocSenha;
var reqBodyValores;
var reqUsuario;
var reqSenha;

import usuarioModel from "../model/usuario.model.js"
import jwt from "jsonwebtoken";

export function RetornarEjs(req, res) {
    if (req.cookies == null){
        res
            .render('../view/login.ejs')
            .status(200)
    } else {
        res
            .status()
            .render('../view/segredo.ejs')
    }
}

export function ChecarUsuarioESenha(req, res) {
    reqBodyValores = Object.values(req.body)
    reqUsuario = reqBodyValores[0]
    reqSenha = reqBodyValores[1]

    consultar().then( () => {
        usuarioDocValores = Object.values(usuarioDoc)
        usuarioDocId = usuarioDocValores[0].toHexString()
        usuarioDocSenha = usuarioDocValores[2]
        if (usuarioDoc == null) {
            res
                .status(404)
                .send("Usuário não encontrado")
        } else if (reqSenha != usuarioDocSenha) {
            res
                .status(401)
                .send("Senha incorreta")
        } else if (reqSenha == usuarioDocSenha){
            const token = jwt.sign({usuarioDocId}, process.env.SEGREDO)
            res
                .status(200)
                .cookie("access_token", token, {httpOnly: true})
                .send("Logado")
        }
    }) 
}

async function consultar() {
    usuarioDoc = await usuarioModel.findOne({usuario: reqUsuario}).lean()
}


  