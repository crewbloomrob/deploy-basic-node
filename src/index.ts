import { environment, PORT } from './environment.js';

import express from 'express';

const expressApp = express();

console.log('environment', environment);

expressApp.get('/', function (req, res) {
  res.status(200).json({
    message:'Success'
  })
});

expressApp.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
