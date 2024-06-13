const customApiError = require('../error/customAPIError');
const errHandlerMiddleware = (err, req, res, next) => {
  if(err instanceof customApiError) {
    return res.status(err.statusCode).json({
      status: err.status,
      msg: err.message,
    });
  }
  return res.status(500).json({
    msg: "Something went wrong, Pleas try again!",
  });
};

module.exports = errHandlerMiddleware;