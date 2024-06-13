require('dotenv').config();
require('express-async-errors');

const express = require("express");
const app = express();

const mainRouter = require('./routs/mainRouts');
const notFound = require('./middleware/not-found');
const errHandlerMiddleware = require('./middleware/err-handler');


// Middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(notFound);
app.use(errHandlerMiddleware);

const port = process.env.PORT | 3000;
const start = () => {
  try {
    
    app.listen(port, console.log(`Server is listening on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();