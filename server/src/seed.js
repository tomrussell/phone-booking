import request from 'request-promise-native';

import logger from './logger';
import Config from './config';
import Phones from './models/phones';

const log = logger('seed.js');

const options = {
  url: `${Config.fonoAPIURL}getdevice`,
  method: 'POST',
  body: { token: Config.fonoAPIToken },
  json: true,
};

const devices = [
  { brand: 'Samsung', device: 'Galaxy S9' },
  { brand: 'Samsung', device: 'Galaxy S8' },
  { brand: 'Samsung', device: 'Galaxy S7' },
  { brand: 'Motorola', device: 'Nexus 6' },
  { brand: 'LG', device: 'Nexus 5X' },
  { brand: 'Apple', device: 'iPhone X' },
  { brand: 'Apple', device: 'iPhone 8' },
  { brand: 'Apple', device: 'iPhone 4s' },
  { brand: 'Nokia', device: '3310' },
];

const deviceNames = () => devices.map(d => `${d.brand} ${d.device}`);

const clearCollection = () => new Promise(
  resolve => Phones.deleteMany({}, () => resolve()),
);

const storeResponses = responses => new Promise((resolve, reject) => {
  const phones = responses
    .filter(response => response.status !== 'error')
    .map(response => ({
      name: response.DeviceName,
      technology: response.technology,
      twoGBands: response._2g_bands, // eslint-disable-line
      threeGBands: response._3g_bands, // eslint-disable-line
      fourGBands: response._4g_bands, // eslint-disable-line
    }));

  Phones.insertMany(phones, (error) => {
    if (error) {
      reject(error);
    }
    resolve();
  });
});

const seedDatabase = () => new Promise(async (resolve, reject) => {
  log.info('Clearing database');

  await clearCollection();

  log.info('Seeding database');

  Promise.all(devices.map(device => request({
    ...options,
    body: { ...options.body, ...device },
  })))
    .then((responses) => {
      const flattened = [].concat(...responses);
      log.info(`${flattened.length} responses received`);

      const filtered = flattened
        .filter(result => deviceNames().includes(result.DeviceName));

      log.info(`${filtered.length} matching devices found`);

      storeResponses(filtered)
        .then(() => {
          log.info('Database seeded');
          resolve();
        });
    })
    .catch((error) => {
      log.error(error);
      reject(error);
    });
});

export default seedDatabase;
