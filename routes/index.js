const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('Hi there, welcome to my assignment!');
});

module.exports = router;
