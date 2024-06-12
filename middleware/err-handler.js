const errHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    msg: "Somthing went wrong, Pleas try again!",
  });
};

module.exports = errHandlerMiddleware;
