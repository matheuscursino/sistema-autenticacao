import mongoose from 'mongoose'
const { Schema } = mongoose

const usuarioSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario: String,
    senha: String
})


export default mongoose.model("users", usuarioSchema, "user")
