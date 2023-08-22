import express from 'express'
const app = express()
const port = 3000
import bodyParser from 'body-parser'

import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://matheuscursino115:matheus123@auth-database.ngnx8lc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export const db = client.db('auth-database');

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Ping feito com sucesso. Conectado com o banco de dados.");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './view');

import router from "./routes/login.route.js"

app.get('/', (req, res) =>  {
    res.render('index')
})

app.use('/login', router)

/* app.route('/login')
  .get(function(req, res) {
    res.render('login');
  })
  .post(function(req, res) {
    const reqBodyParsed = Object.values(req.body)
    reqUsuario = reqBodyParsed[0]
    reqSenha = reqBodyParsed[1]
    consultar().then( () => {
        console.log(usuarioDoc)
    })

  }) */


app.route('/registrar')
.get(function(req, res) {
  res.render('registrar');
})
.post(function(req, res) {
  res.send('');
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})

export default db;