const zipcodeUsersModel = require('../models/zipcode.users.model');

require('dotenv').config();

module.exports = {
    add: async (zipcode) => {
        return await zipcodeUsersModel.create(zipcode);
    },
    get: async (userId) => {
        if (!userId) {
            return res.status(400).json(sendError('User ID is required'));
        }
        return await zipcodeUsersModel.find({ user_id: userId });
    },
    deleteAll: async (userId) => {
        if (!userId) {
            return res.status(400).json(sendError('User ID is required'));
        }
        return await zipcodeUsersModel.deleteMany({ user_id: userId });
    },
    deleteById: async (id) => {
        return await zipcodeUsersModel.findByIdAndDelete(id);
    },
}