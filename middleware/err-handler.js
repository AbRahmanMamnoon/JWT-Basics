const {customApiError} = require('../error/customAPIError');
const errHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if(err instanceof customApiError) {
    res.status(err.statusCode).json({
      status: err.status,
      msg: err.message,
    });
  }
  res.status(500).json({
    msg: "Something went wrong, Pleas try again!",
  });
};

module.exports = errHandlerMiddleware;
