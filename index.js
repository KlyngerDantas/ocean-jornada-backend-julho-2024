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
app.listen(3000)