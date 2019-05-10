const mongoose = require('mongoose');
// Recebendo a model que foi criada no arquivo de models
const Product = mongoose.model('Product');

module.exports = {
    // Criando uma function async para ter o retorno de cada linha para a outra ser executada
    async index(req, res) {
        // Tente executar isso
        try {
            // await define que esta execução deve ser finalizada para iniciar outra.
            const products = await Product.find();
            // Retorna um json do que foi recebido de products
            return res.json(products);
            // senao me retorne o erro ou mensagem de erro
        } catch (err) {
            console.log(err);
        }
    },
    async store(req, res) {
        try {
        // Criação de product
        const product = await Product.create(req.body);

        return res.json(product)
        } catch (err) {
            console.log(err);
        }
    },
   
}