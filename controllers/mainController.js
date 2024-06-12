// check username password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication, so only the request with JWT can access the dashboard

const CustomApiError = require('../error/customAPIError');

exports.dashboard = (req, res) => {
  res.send({
    msg: 'Hello, John Deo',
    secret: `Here is your authorized data, your lucky number is ${Math.floor(Math.random() * 100)}`
  })
}

exports.login = (req, res) => {

  const { username, password } = req.body;
  // mongo
  // Joi
  // check in the controller

  if(!username, !password) {
    throw new CustomApiError('Pleas provide your username and password', 400);
  }
  res.send({
    msg: 'Fake login/register',
    data: {
      username, password
    }
  });
}