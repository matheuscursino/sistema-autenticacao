import mongoose from 'mongoose'
const { Schema } = mongoose

const usuarioSchema = new Schema({
    usuario: String,
    senha: String
})


const usuarioModel = mongoose.model("users", usuarioSchema)

export default usuarioModel;

