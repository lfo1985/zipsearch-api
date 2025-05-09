const ZipCodeService = require("../services/zipcode.service");
const sendSuccess = require("../helpers").sendSuccess;
const sendError = require("../helpers").sendError;

module.exports = {
    get: (req, res) => {
        try {
            if (!req.params.userId) {
                throw new Error('User ID is required');
            }
            ZipCodeService.get(req.params.userId).then((result) => {
                if (result) {
                    res.status(200).json(sendSuccess('zipcode_user retrieved successfully', result));
                } else {
                    res.status(404).json(sendError('No zipcode_user found'));
                }
            });
        } catch (error) {
            res.status(500).json(sendError(error.message));
        }
    },
    store: (req, res) => {
        try {
            if (!req.body) {
                throw new Error('Request body is required');
            }
            ZipCodeService.add(req.body).then((result) => {
                if (result) {
                    res.status(201).json(sendSuccess('zipcode_user created successfully', result));
                } else {
                    res.status(400).json(sendError('Error creating zipcode_user'));
                }
            });
        } catch (error) {
            res.status(500).json(sendError(error.message));
        }
    },
    destroyAll: (req, res) => {
        try {
            if (!req.params.userId) {
                throw new Error('User ID is required');
            }
            ZipCodeService.deleteAll(req.params.userId).then((result) => {
                if (result) {
                    res.status(200).json(sendSuccess('zipcode_user deleted successfully', result));
                } else {
                    res.status(404).json(sendError('No zipcode_user found to delete'));
                }
            });
        } catch (error) {
            res.status(500).json(sendError(error.message));
        }
    },
    destroyById: (req, res) => {
        try {
            const id = req.params.id;
            if (id === '') {
                throw new Error('ID is required');
            }
            ZipCodeService.deleteById(id).then((result) => {
                if (result) {
                    res.status(200).json(sendSuccess('zipcode_user deleted successfully', result));
                } else {
                    res.status(404).json(sendError('No zipcode_user found to delete'));
                }
            });
        } catch (error) {
            res.status(500).json(sendError(error.message));
        }
    },
};