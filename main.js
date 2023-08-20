const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

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
    res.send('');
  })

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