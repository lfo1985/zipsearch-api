const mongoose = require('mongoose');
const ZipcodeUsersSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    cep: {
        type: String,
        required: true,
    },
    logradouro: {
        type: String,
        required: true,
    },
    complemento: {
        type: String,
        default: '',
    },
    unidade: {
        type: String,
        default: '',
    },
    bairro: {
        type: String,
        required: true,
    },
    localidade: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    regiao: {
        type: String,
        required: true,
    },
    ibge: {
        type: String,
        required: true,
    },
    gia: {
        type: String,
        default: '',
    },
    ddd: {
        type: String,
        required: true,
    },
    siafi: {
        type: String,
        required: true,
    },
}, {
    collection: 'zipcode_users',
});

module.exports = mongoose.model('zipcode_users', ZipcodeUsersSchema);