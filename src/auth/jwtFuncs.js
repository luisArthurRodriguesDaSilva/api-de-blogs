require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const generateToken = async (info = { nothing: 0 }) => {
  const token = jwt.sign({ data: { ...info } }, secret, jwtConfig);
  return token;
};

const verifyToken = async (info = { nothing: 0 }) => {
  try {
    const decoded = jwt.verify({ data: { ...info } }, secret);
    return decoded;
  } catch (e) {
    return { error: true, message: e.message };
  }
};

module.exports = { verifyToken, generateToken };