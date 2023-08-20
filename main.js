const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var usuarioDoc;



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://matheuscursino115:matheus123@auth-database.ngnx8lc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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

const db = client.db('auth-database');

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('views', './view');


app.get('/', (req, res) =>  {
    res.render('index')
})

app.route('/login')
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

  })


app.route('/registrar')
.get(function(req, res) {
  res.render('registrar');
})
.post(function(req, res) {
  res.send('');
})


async function consultar() {
    usuarioDoc =  await db.collection('users').find({usuario: reqUsuario}).toArray()
  }
  

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})