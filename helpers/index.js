const sendSuccess = (message, result) => {
    return {
        status: true,
        message: message,
        data: result
    };
}

const sendError = (message) => {
    return {
        status: true,
        message: message,
        data: null
    };
}

module.exports = {
    sendSuccess,
    sendError
};