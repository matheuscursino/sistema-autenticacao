import {db} from '../main.js'
var usuarioDoc;
var usuarioDocValores;
var usuarioDocSenha;
var reqBodyValores;
var reqUsuario;
var reqSenha;

export function RetornarEjs() {
    res.renderFile('../view/index.ejs')
}

export function ChecarUsuarioESenha(req, res) {
    reqBodyValores = Object.values(req.body)
    reqUsuario = reqBodyValores[0]
    reqSenha = reqBodyValores[1]
    consultar().then( () => {
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
        }
    })
}

async function consultar() {
    usuarioDoc =  await db.collection('users').find({usuario: reqUsuario}).toArray()
}


  