const mongoose = require('mongoose');

// Criando um Schema (Campos da base de dados)
const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now
    }
})
// Atribuindoo Schema a uma Model 
mongoose.model('Product', ProductSchema);