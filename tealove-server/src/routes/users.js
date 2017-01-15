const jwt = require('jwt-simple');
const router = require('express').Router();
const jwtSecret = require('../secrets').jwtSecret;
const users = require('../data/users');
const tea = require('../data/tea');
const checkins = require('../data/checkins');

router.get('/', (req, res) => {
  const token = req.header('X-Token');

  if (!token) {
    return res.status(401).send('x-token is required');
  }

  const { username, password, role } = jwt.decode(token, jwtSecret);

  const user = users.find(username, password);

  if (!user) {
    return res.status(401).send('Wrong username or password');
  }

  if (role !== 'admin') {
    return res.status(401).send(`'Must be "admin" to access this resource, user is "${role}"`);
  }

  return res.send(users.list());
});

router.get('/:username', (req, res) => {
  const token = req.header('X-Token');

  if (!token) {
    return res.status(401).send('x-token is required');
  }

  const requestedUsername = req.params.username;

  const { username, password, role } = jwt.decode(token, jwtSecret);

  if (username !== requestedUsername && role !== 'admin') {
    return res.status(401).send(`You must either have role "admin" or own the user, you are ${username}`);
  }

  const user = users.findByUsername(requestedUsername);

  if (!user) {
    return res.status(401).send('Wrong username or password');
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
