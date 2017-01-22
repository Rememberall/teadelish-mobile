const router = require('express').Router();
const jwt = require('jwt-simple');
const jwtSecret = require('../secrets').jwtSecret;
const users = require('../data/users');

router.get('/', (req, res) => {
  res.send('hey');
});

router.post('/', (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.status(401).send('request must be {username, password}');
  }

  const { username, password } = req.body;

  const user = users.find(username, password);

  if (!user) {
    return res.status(401).send('Wrong username or password');
  }

  const token = jwt.encode({
    username,
    role: user.role,
  }, jwtSecret);

  res.send(token);
  return;
});

module.exports = router;
