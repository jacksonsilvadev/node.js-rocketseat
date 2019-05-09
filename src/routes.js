const express = require('express');
const routes = express.Router();

// Retornando o controller do product com seus métodos
const ProductController = require('./controllers/ProductController');

// Criando a primeira rota.
routes.get('/', ProductController.index)

module.exports = routes;