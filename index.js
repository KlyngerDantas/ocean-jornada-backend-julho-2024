const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


// Lista de personagem
const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

// Read Al - [gGET]
app.get('/item', function (req, res) {
  res.send(lista)
})
app.use(express.json())
// Create - [POST] /Item
app.post('/item',function(req, res) {
  // Obtemos o nome enviado no request Body
  console.log(req.body)
  const item = req.body.nome

  // Inserimos o item no final da ista
  lista.push(item)
  console.log(item)
  res.send('Create')

  res.send('Item cirado com sucesso!')
})
app.get('/item/:id', function(req, res){
  res.send('Read By ID')
})
app.listen(3000)