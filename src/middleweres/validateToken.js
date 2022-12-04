const jwtFuncs = require('../auth/jwtFuncs');

const validateToken = async (req, res, next) => {
  const token = req.header('authorization');
  console.log('token', token);
  try {
    if (!token) throw new Error('Token not found');
    const user = await jwtFuncs.verifyToken(token);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = { validateToken };