const jwt = require('jwt-simple');
const jwtSecret = require('../secrets').jwtSecret;
const router = require('express').Router();
const checkins = require('../data/checkins');

router.get('/', (req, res) => {
  const token = req.header('X-Token');

  if (!token) {
    return res.status(401).send('Missing X-Token');
  }

  const { username } = jwt.decode(token, jwtSecret);

  const user = {
    username,
    checkins: checkins.findByUsername(username),
  };

  res.send(user);
});

module.exports = router;
