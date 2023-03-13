const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
  constructor(
    message = `something wrong happened`,
    explanation = `something wrong happened`
  ) {
    super();
    this.name = `Service Error`;
    this.message = message;
    this.explanation = explanation;
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}
module.exports = ServiceError;
