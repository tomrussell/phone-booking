export default {
  fonoAPIURL: process.env.FONO_API_URL
    || 'https://fonoapi.freshpixl.com/v1/',
  fonoAPIToken: process.env.FONO_API_TOKEN
    || 'c22394ca0cd99290405822843c9485e2966c7190d399edad',
  mongoose: process.env.MONGODB_PATH
    || 'mongodb://localhost:27017/phone-booking',

};
