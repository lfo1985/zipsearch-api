const sendSuccess = (message, result) => {
    return {
        success: true,
        message: message,
        data: result
    };
}

const sendError = (message) => {
    return {
        success: false,
        message: message,
        data: null
    };
}

module.exports = {
    sendSuccess,
    sendError
};