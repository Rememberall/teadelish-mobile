const jwt = require('jwt-simple');
const router = require('express').Router();
const jwtSecret = require('../secrets').jwtSecret;
const users = require('../data/users');
const tea = require('../data/tea');
const checkins = require('../data/checkins');

router.get('/', (req, res) => {
  const { username, isAdmin } = res.locals;

  const user = users.findByUsername(username);

  if (!user) {
    res.status(401).send('Wrong username or password');
    return;
  }

  if (!isAdmin) {
    res.status(401).send(`'Must be admin to access this resource`);
    return;
  }

  return res.send(users.list());
});

router.get('/:username', (req, res) => {
  const requestedUsername = req.params.username;

  const { username, isAdmin } = res.locals;

  if (username !== requestedUsername && !isAdmin) {
    return res.status(401).send(`You must either be admin or own the user, you are ${username}`);
  }

  const user = users.findByUsername(requestedUsername);

  if (!user) {
    return res.status(401).send('Wrong username');
  }

  return res.send(user);
});

router.get('/:username/checkins', (req, res) => {
  const tea = checkins.findByUsername(req.params.username);
  return res.send(tea);
});

router.post('/:username/checkins', (req, res) => {
  if (!req.body || !req.body.teaId) {
    return res.status(400).send('Request must be { teaId }');
  }

  const { teaId } = req.body;

  const requestedUsername = req.params.username;

  const token = req.header('x-token');

  const user = users.findByUsername(requestedUsername);

  if (!user) {
    return res.status(401).send('Wrong username or password');
  }

  const { username, password, role } = jwt.decode(token, jwtSecret);

  if (username !== requestedUsername && role !== 'admin') {
    return res.status(401).send('Must be user or have role "admin"');
  }

  const { brand, name } = tea.findById(teaId);

  const checkin = checkins.create({
    username,
    brand,
    name,
  });

  return res.status(201).send(checkin);
});

module.exports = router;
