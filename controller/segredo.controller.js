import usuarioModel from "../model/usuario.model.js"
import jwt from "jsonwebtoken";
var id;
var nome;
var usuarioDoc;
var usuarioDocValores;

export default function RetornarEjs(req, res){
  if (req.cookies = {}){
    res
        .status(401)
        .redirect('/login')
} else {
  console.log(req.cookies)
    var token = Object.values(req.cookies)
    jwt.verify(token[0], process.env.SEGREDO, function(err, decoded) {
        id = decoded.usuarioDocId;
        consultar().then(() => {
          console.log(usuarioDoc)
          usuarioDocValores = Object.values(usuarioDoc)
          nome = usuarioDocValores[1]
        })
        res
            .status(200)
            .render('../view/segredo.ejs', {
                nome: nome
        })
      }); // to-do: adicionar resposta caso de erro
    }
}

async function consultar() {
    usuarioDoc = await usuarioModel.findOne({_id: id}).lean()
}


