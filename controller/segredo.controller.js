import usuarioModel from "../model/usuario.model.js"
import jwt from "jsonwebtoken";
var id;
var nome;
var usuarioDoc;
var usuarioDocValores;

export default function RetornarEjs(req, res){
    var token = Object.values(req.cookies)
    jwt.verify(token[0], process.env.SEGREDO, function(err, decoded) {
        id = decoded.usuarioDocId;
      }); // to-do: adicionar resposta caso de erro
      consultar().then(() => {
        console.log(usuarioDoc)
        usuarioDocValores = Object.values(usuarioDoc)
        nome = usuarioDocValores[1]
      })
      res.render('../view/segredo.ejs', {
        nome: nome
      })

}

async function consultar() {
    usuarioDoc = await usuarioModel.findOne({_id: id}).lean()
}


