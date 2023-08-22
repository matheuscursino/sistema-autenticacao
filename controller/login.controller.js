import {db} from '../main.js'
var usuarioDoc;
var reqUsuario;
var reqSenha;

export function RetornarEjs() {
    res.renderFile('../view/index.ejs')
}

export function ChecarUsuarioESenha(req, res) {
    const reqBodyParsed = Object.values(req.body)
    reqUsuario = reqBodyParsed[0]
    reqSenha = reqBodyParsed[1]
    consultar().then( () => {
        console.log(usuarioDoc)
    })
}

async function consultar() {
    usuarioDoc =  await db.collection('users').find({usuario: reqUsuario}).toArray()
}


  