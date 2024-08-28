import 'dotenv/config';
import toNumber from 'lodash/toNumber.js';

export const environment = process.env.ENVIRONMENT || process.env.NODE_ENV;

export const PORT = toNumber(process.env.PORT) || 3001;
