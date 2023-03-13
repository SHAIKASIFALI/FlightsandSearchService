const { StatusCodes } = require("http-status-codes");

class ClientError extends Error {
  constructor(
    message = `something wrong happened`,
    explanation = `something wrong happened`,
    statusCode = StatusCodes.NOT_FOUND
  ) {
    super();
    this.name = `Client Error`;
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}
module.exports = ClientError;
