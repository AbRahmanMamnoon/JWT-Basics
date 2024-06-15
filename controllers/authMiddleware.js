require('dotenv').config();
const jwt = require('jsonwebtoken');

const CustomApiError = require('../error/customAPIError');

const authMiddleware = (req, res, next) => {
  
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomApiError('No token provided!', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decode;

    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomApiError('Not authorized to access this route!', 401);
  }
}

module.exports = authMiddleware;