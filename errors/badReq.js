const {StatusCodes} = require('http-status-codes');
const {CustomApiError} = require('./customApiErr');

class BadRequestError extends CustomApiError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCode.BAD_REQUEST
    }
}