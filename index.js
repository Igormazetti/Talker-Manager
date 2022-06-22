const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const app = express();
app.use(bodyParser.json());
app.use('/talker', routes.talkerRoute);
app.use('/login', routes.loginRoute);

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
