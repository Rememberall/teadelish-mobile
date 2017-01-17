const jwt = require('jwt-simple');
const jwtSecret = require('../secrets').jwtSecret;
const router = require('express').Router();

router.get('/', (req, res) => {
  const token = req.header('X-Token');

  if (!token) {
    return res.status(401).send('Missing X-Token');
  }

  const user = jwt.decode(token, jwtSecret);
  res.send(user);
});

module.exports = router;
