const express = require("express");
const mainRoute = require('./routs/mainRouts');
const notFound = require('./middleware/not-found');
const errHandlerMiddleware = require('./middleware/err-handler');
require('express-async-errors');

require('dotenv').config();
const app = express();

// Middleware
app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1/main', mainRoute);

/// Not Found
app.use(notFound);
// Error Handler
app.use(errHandlerMiddleware);

const port = 3000;
const start = () => {
  try {
    
    app.listen(port, console.log(`Server is listening on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();