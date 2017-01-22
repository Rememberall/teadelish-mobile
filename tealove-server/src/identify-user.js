const jwt = require('jwt-simple');
const { jwtSecret } = require('./secrets');

module.exports = (req, res, next) => {
  const token = req.header('X-Token');

  if (!token) {
    next();
    return;
  }

  try {
    const { username, role } = jwt.decode(token, jwtSecret);

    res.locals = { username, role };

    if (role === 'admin') {
      res.locals.isAdmin = true;
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(401).send('bad token');
  }
};
