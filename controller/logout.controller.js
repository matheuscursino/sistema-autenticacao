export function logout(req, res) {
    if (req.cookies.access_token == undefined){
        res.status(401)
    } else {
        res
            .clearCookie('access_token', {path:'/'})
            .status(200)
            .send('{ "erro": "logout feito  com sucesso" }')
    }
}