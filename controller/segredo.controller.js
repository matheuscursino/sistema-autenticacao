import usuarioModel from '../model/usuario.model.js'
import jwt from 'jsonwebtoken'
var id
var nome
var usuario
var senha
var usuarioDoc
var usuarioDocValores

export default function RetornarEjs(req, res){
  if (!req.cookies){
    res
        .status(401)
        .redirect('/login')
} else {
    var token = Object.values(req.cookies)
    jwt.verify(token[0], process.env.SEGREDO, function(err, decoded) {
      if (err) {
        res.status(500)
           .body('erro ao autenticar token')
      }
      id = decoded.usuarioDocId;
      consultar().then(() => {
        usuarioDocValores = Object.values(usuarioDoc)
        nome = usuarioDocValores[1]
        usuario = usuarioDocValores[2]
        senha = usuarioDocValores[3]
        res
        .status(200)
        .render('../view/segredo.ejs', {
            id: id,
            nome: nome,
            usuario: usuario,
            senha: senha
    })
      })
    }); 
  }
}

async function consultar() {
    usuarioDoc = await usuarioModel.findOne({_id: id}).lean()
}


