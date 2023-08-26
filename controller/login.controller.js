var usuarioDoc;
var usuarioDocValores;
var usuarioDocSenha;
var reqBodyValores;
var reqUsuario;
var reqSenha;
var a;

import usuarioModel from "../model/usuario.model.js"

export function RetornarEjs() {
    res.renderFile('../view/index.ejs')
}

export function ChecarUsuarioESenha(req, res) {
    reqBodyValores = Object.values(req.body)
    reqUsuario = reqBodyValores[0]
    reqSenha = reqBodyValores[1]

    consultar().then( () => {
        console.log(usuarioDoc)
        usuarioDocValores = Object.values(usuarioDoc[0])
        usuarioDocSenha = usuarioDocValores[2]
        if (usuarioDoc.length = 0) {
            res
                .status(404)
                .send("Usuário não encontrado")
        } else if (reqSenha != usuarioDocSenha) {
            res
                .status(401)
                .send("Senha incorreta")
        } else if (reqSenha == usuarioDocSenha){
            //
        }
    }) 
}

async function consultar() {
    usuarioDoc = await usuarioModel.findOne().lean()
}


  