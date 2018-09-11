import Phones from '../models/phones';
import logger from '../logger';

const log = logger('mutation.resolver.js');

export default {
  Mutation: {
    bookPhone: (root, { input }) => new Promise((resolve, reject) => {
      const condition = { name: input.deviceName };
      Phones.findOne(condition, (error, phone) => {
        if (error) {
          reject(error);
        } else if (!phone.available) {
          reject(new Error('Phone is unavailable'));
        } else {
          Phones.findOneAndUpdate(condition, {
            available: false,
            bookedBy: input.user,
            bookedAt: new Date(),
          }, { new: true }, (err, document) => {
            if (err) {
              log.error(err);
              reject(err);
            } else {
              resolve(document);
            }
          });
        }
      });
    }),
    returnPhone: (root, { input }) => new Promise((resolve, reject) => {
      Phones.findOneAndUpdate({ name: input.deviceName }, {
        available: true,
        bookedAt: null,
        bookedBy: null,
      }, { new: true }, (error, document) => {
        if (error) {
          reject(error);
        } else {
          resolve(document);
        }
      });
    }),
  },
};
