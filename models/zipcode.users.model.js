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
        default: '',
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
        default: '',
    },
    localidade: {
        type: String,
        default: '',
    },
    uf: {
        type: String,
        default: '',
    },
    estado: {
        type: String,
        default: '',
    },
    regiao: {
        type: String,
        default: '',
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