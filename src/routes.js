const express = require('express');
const routes = express.Router();

// Retornando o controller do product com seus métodos
const ProductController = require('./controllers/ProductController');

// Criando a primeira rota.
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);

module.exports = routes;