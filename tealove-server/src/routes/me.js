const jwt = require('jwt-simple');
const jwtSecret = require('../secrets').jwtSecret;
const router = require('express').Router();
const checkins = require('../data/checkins');

router.get('/', (req, res) => {
  const { username } = res.locals;

  if (!username) {
    res.status(401).send();
    return;
  }

  const user = {
    username,
    checkins: checkins.findByUsername(username),
  };

  res.send(user);
});

module.exports = router;
