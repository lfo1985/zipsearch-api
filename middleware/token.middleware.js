require('dotenv').config();
const {sendError} = require('../helpers/index');

const validateToken = (req, res, next) => {
    const token = req.headers['authorization'].replace('Bearer ', '');

    if (!token) {
        return res.status(401).json(sendError('No token provided'));
    }

    if (token !== process.env.AUTH_TOKEN) {
        return res.status(403).json(sendError('Invalid token'));
    }

    next();
};

module.exports = validateToken;