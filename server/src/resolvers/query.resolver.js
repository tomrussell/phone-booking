import Phones from '../models/phones';

export default {
  Query: {
    phones: () => Phones.find(),
  },
};
