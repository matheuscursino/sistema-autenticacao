import {db} from '../main.js'
var usuarioDoc;
var usuarioDocParsed;
var usuarioDocSenha;
var reqBodyParsed;
var reqUsuario;
var reqSenha;

export function RetornarEjs() {
    res.renderFile('../view/index.ejs')
}

export function ChecarUsuarioESenha(req, res) {
    reqBodyParsed = Object.values(req.body)
    reqUsuario = reqBodyParsed[0]
    reqSenha = reqBodyParsed[1]
    consultar().then( () => {
        usuarioDocParsed = Object.values(usuarioDoc[0])
        usuarioDocSenha = usuarioDocParsed[2]
        if (usuarioDoc.length = 0) {
            res
                .status(404)
                .send("Usuário não encontrado")
        } else if (reqSenha != usuarioDocSenha) {
            res
                .status(403)
                .send("Senha incorreta")
        }
    })
}

async function consultar() {
    usuarioDoc =  await db.collection('users').find({usuario: reqUsuario}).toArray()
}


  