const express = require('express');
const router = express.Router();

router.get('/:word/:num', (req, res, next) => {
  const word = req.params.word;
  const numTimes = req.params.num;
  let resultStr = '';

  for (let i = 0; i < numTimes; i++) {
    resultStr += word + '  ';
  }

  res.status(200).send(resultStr);
});

module.exports = router;
