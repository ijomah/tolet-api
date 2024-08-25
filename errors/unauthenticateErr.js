const {StatusCode} = require('http-status-codes');
const {CustomApiError} = require('./customApiErr');

class UnauthenticatedError extends CustomApiError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCode.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError;