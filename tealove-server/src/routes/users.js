const jwt = require('jwt-simple');
const router = require('express').Router();
const jwtSecret = require('../secrets').jwtSecret;
const users = require('../data/users');

router.get('/', (req, res) => {
  const token = req.header('X-Token');

  if (!token) {
    return res.status(401).send('x-token is required');
  }

  const { username, password, role } = jwt.decode(token, jwtSecret);

  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).send('Wrong username or password');
  }

  if (role !== 'admin') {
    return res.status(401).send(`'Must be "admin" to access this resource, user is "${role}"`);
  }

  return res.send(users);
});

module.exports = router;
