const router = require('express').Router();
const teas = require('../data/teas');

const defaultLimit = 10;
const maxLimit = 50;

router.get('/', (req, res) => {
  const queryLimit = Number(req.query.limit) || defaultLimit;

  if (isNaN(queryLimit)) {
    res.status(400).send(`limit must be a number, was ${req.query.limit}`);
    return;
  }

  const limit = Math.min(queryLimit, maxLimit);

  if (queryLimit > maxLimit) {
    res.status(400).send(`limit must be below ${maxLimit}, was ${queryLimit}`);
    return;
  }

  const afterIndex = req.query.after ? Number(req.query.after) : -1;

  if (!Number.isInteger(afterIndex)) {
    res.status(400).send(`after must be a number, was ${req.query.after}`);
    return;
  }

  const fromIndex = afterIndex + 1;

  if (fromIndex < 0) {
    res.status(400).send('after must be >= -1');
    return;
  }

  const query = req.query.query;

  if (!query) {
    res.send(teas.list({ fromIndex, limit }));
    return;
  }

  res.send(teas.search({ query, limit }));
});

module.exports = router;
