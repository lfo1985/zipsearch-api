const express = require('express');
const router = express.Router();
const ZipCodeController = require('../controllers/zipcode.controller');

router.post('/', (req, res) => {
    ZipCodeController.store(req, res);
});

router.get('/:userId', (req, res) => {
    ZipCodeController.get(req, res);
});

router.delete('/:userId', (req, res) => {
    ZipCodeController.destroyAll(req, res);
});

router.delete('/delete/:id', (req, res) => {
    ZipCodeController.destroyById(req, res);
});

module.exports = router;