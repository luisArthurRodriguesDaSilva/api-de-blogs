require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const generateToken = async (info = { nothing: 0 }) => {
  const token = jwt.sign({ data: info }, secret, jwtConfig);
  return token;
};

const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (e) {
    throw new Error('Expired or invalid token');
  }
};
module.exports = { verifyToken, generateToken };