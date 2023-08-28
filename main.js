import loginRouter from "./routes/login.route.js"
import registrarRouter from "./routes/registrar.route.js"
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv  from 'dotenv'
const app = express()
const port = 3000

dotenv.config();

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main().then(()=>{
  console.log("Conectado com o banco de dados")
}).catch((err)=>{
  console.log(err)
})

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());
app.use(cookieParser())
app.set('view engine', 'ejs');
app.set('views', './view');

app.get('/', (req, res) =>  {
    res.render('index')
})

app.use('/login', loginRouter)
app.use('/registrar', registrarRouter)

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})

// export default db;