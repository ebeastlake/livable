const router = require('express').Router();

router.use('/places', require('./places'));

// if a user requests an api route that doesn't exist
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;