const express = require('express');
const app = express();
const router = require('./routes/index');
const speakRouter = require('./routes/speak');
const repeatRouter = require('./routes/repeat');

const PORT = 1337;

app.use('/', router);
app.use('/speak', speakRouter);
app.use('/repeat', repeatRouter);

app.use((req, res, next) => {
  res
    .status(404)
    .send('Sorry, page not found...what are you doing with your life?');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
