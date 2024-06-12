
exports.dashboard = (req, res) => {
  res.send({
    msg: 'Hello, John Deo',
    secret: `Here is your authorized data, your lucky number is ${Math.floor(Math.random() * 100)}`
  })
}

exports.login = (req, res) => {

  res.send({
    msg: 'Fake login/register',
  });
}