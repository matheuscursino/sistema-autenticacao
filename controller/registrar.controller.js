import usuarioModel from "../model/usuario.model.js"


export function RetornarEjs(req, res){
    res.renderFile('../view/registrar.ejs')
}

export function RegistrarUsuario(req, res){
    reqBodyValores = Object.values(req.body)
    reqNome = reqBodyValores[0]
    reqUsuario = reqBodyValores[1]
    reqSenha = reqBodyValores[2]

    const checarUsuario = usuarioModel({usuario: reqUsuario}).findOne().lean()

    if (checarUsuario.length = 0){
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
}