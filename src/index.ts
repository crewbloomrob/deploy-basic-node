import { environment, PORT } from './environment.js';

import express from 'express';

const expressApp = express();

console.log('environment', environment);

expressApp.get('/', function (req, res) {
  res.send('Hello World');
});

expressApp.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
