import usuarioModel from "../model/usuario.model.js"
var reqBodyValores
var reqUsuario
var usuarioDoc;

export function RetornarEjs(req, res){
    res.renderFile('../view/registrar.ejs')
}

export function RegistrarUsuario(req, res){
    reqBodyValores = Object.values(req.body)
    reqUsuario = reqBodyValores[1]

    checarUsuario().then(() => {
         if (usuarioDoc.length = 0){
            const usuario = new usuarioModel(req.body)
            usuario.save().then(() => {
                res
                    .status(201)
                    .send("Usuario criado")
            })
        } else {
            res
                .status(400)
                .send("Usuario ja existe")
        } 
    })
}


async function checarUsuario(){
    usuarioDoc = await usuarioModel.findOne({usuario: reqUsuario}).lean()
}