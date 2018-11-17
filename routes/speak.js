const express = require('express');
const router = express.Router();

router.get('/pig', (req, res, next) => {
  res.status(200).send('The pig says "Oink"!');
});

router.get('/cow', (req, res, next) => {
  res.status(200).send('The cow says "Mooo"!');
});

router.get('/dog', (req, res, next) => {
  res.status(200).send('The dog says "Woof"!');
});

module.exports = router;
