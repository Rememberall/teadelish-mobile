const router = require('express').Router();
const jwt = require('jwt-simple');
const jwtSecret = require('../secrets').jwtSecret;

router.get('/', (req, res) => {
  res.send('hey');
});

router.post('/', (req, res) => {
  if (!req.body || req.body.username || req.body.password) {
    return res.status(401).send('request must be {username, password}');
  }

  const username = req.body.username;
  const password = req.body.password;

  const token = jwt.encode({
    username,
    password,
    role: 'admin',
  }, jwtSecret);

  return res.send(token);
});

module.exports = router;
