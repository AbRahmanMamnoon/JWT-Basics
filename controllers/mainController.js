// check username password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication, so only the request with JWT can access the dashboard

const CustomApiError = require('../error/customAPIError');
require('dotenv').config();


exports.login = (req, res) => {

  const { username, password } = req.body;
  // mongo
  // Joi
  // check in the controller

  if(!username, !password) {
    throw new CustomApiError('Pleas provide your username and password', 400);
  }

  // Just for demo normally provided by DB!!!
  const id = new Date().getDate();
  
  // Try to keep payload small, better experience for user
  // Just for demo, in production use long, complex and unguessable string value!!!!
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, { expiresIn: '30d' });

  res.send({
    msg: 'user created',
    token,
  });
}


exports.dashboard = (req, res) => {

  console.log(req.user);

  res.send({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${Math.floor(Math.random() * 100)}`
  })
}