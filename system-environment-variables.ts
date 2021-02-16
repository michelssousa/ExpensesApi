import * as dotenv from 'dotenv';
import pino from "pino";

dotenv.config();

const config = process.env;

export const environment_variable = {
  App: {
    port: config.port,
    url: config.url,
    bdUrl: config.bdUrl,
  },
  Auth: {
    jwt_secret_key: config.jwt_secret_key,
    tokenExpiresIn: config.tokenExpiresIn,
  },
}

export const logger = pino({
  enabled: true,
  level: 'info',
});
