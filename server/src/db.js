import mongoose from 'mongoose';

import logger from './logger';
import config from './config';

const log = logger('index.js');

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
};

class MongoDBClient {
  static connect() {
    mongoose.connection
      .on('connected', () => log.info('Mongoose connected'))
      .on('disconnected', () => log.error('Mongoose disconnected'))
      .on('error', err => log.error(`Mongoose connection error: ${err}`))
      .on('error', (err) => {
        if (err.message
          && err.message.match(/failed to connect to server .* on first connect/)
        ) {
          setTimeout(() => {
            mongoose.connect(config.mongoose, options).catch(() => {});
          }, 5 * 1000);
        } else {
          log.error(err);
        }
      });

    return new Promise((resolve) => {
      mongoose.connect(config.mongoose, options)
        .then(() => resolve())
        .catch(() => {});
    });
  }
}

export default MongoDBClient;
