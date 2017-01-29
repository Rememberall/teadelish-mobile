const router = require('express').Router();
const tea = require('../data/teas');

router.get('/', (req, res) => {
  res.send(tea.list());
});

module.exports = router;
