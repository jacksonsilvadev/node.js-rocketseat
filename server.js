const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi_rocketseat', {
    useNewUrlParser: true
});
requireDir('./src/models')

const Product = mongoose.model('Product');

// Criando a primeira rota.
app.get('/', (req, res) => {
    Product.create({
        title: 'Rocket Native',
        description: 'Build native apps with React',
        url: 'https://github.com/facebook/react-native'
    })

    res.send('Hello World!');
})

// Criando uma porta e inicializando
app.listen(3001);