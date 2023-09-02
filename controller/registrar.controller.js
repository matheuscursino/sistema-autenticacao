import usuarioModel from '../model/usuario.model.js'
var reqBodyValores
var reqUsuario
var usuarioDoc

export function RetornarEjs(req, res){
    if (!req.cookies){
        res
            .status(200)
            .render("../view/registrar.ejs")
    } else {
        res
            .status(403)
            .redirect('/segredo')
    }
}

export function RegistrarUsuario(req, res){
    reqBodyValores = Object.values(req.body)
    reqUsuario = reqBodyValores[1]

    checarUsuario()
                    .then(() => {
                         if (usuarioDoc == null){
                            const usuario = new usuarioModel(req.body)
                            usuario.save()
                                        .then(() => {
                                            res
                                                .status(201)
                                                .body('Usuario criado')
                                                .redirect('/login')
                                        })
                                        .catch((err) => {
                                            res
                                                .status(500)
                                                .body(err)
                                        })
                        } else {
                            res
                                .status(400)
                                .body('Usuario ja existe')
                        } 
                    })
                    .catch((err) => {
                        res
                            .status(500)
                            .body(err)
                    })
}


async function checarUsuario(){
    usuarioDoc = await usuarioModel.findOne({usuario: reqUsuario}).lean()
}