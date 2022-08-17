const express = require('express');
const path = require('path');
const db = require('../db/index.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static(path.resolve(__dirname, '/../client/dist')));

app.get('/', (req, res) => {
  db.getProducts()
  .then(result =>  res.send('hello'))
})

app.get('/features', (req, res) => {

})

app.get('/styles', (req, res) => {

})

app.get('/photos', (req, res) => {

})

app.get('/sku', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})