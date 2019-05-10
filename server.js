const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi_rocketseat', {
    useNewUrlParser: true
});
// Iniciando todas as Models que estão dentro de requireDir
requireDir('./src/models')

// Atribuindo para usar as rotas em  um arquivo isolado
app.use("/", require('./src/routes'))

// Criando uma porta e inicializando
app.listen(3001);