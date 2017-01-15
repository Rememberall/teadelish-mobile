const router = require('express').Router();
const tea = require('../data/tea');

router.get('/', (req, res) => {
  res.send(tea.list());
});

module.exports = router;
