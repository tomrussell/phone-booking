import Query from './query.graphqls';
import Mutation from './mutation.graphqls';
import Phone from './phone.graphqls';
import BookPhoneInput from './book-phone.graphqls';

const types = [
  Query,
  Mutation,
  Phone,
  BookPhoneInput,
];

export default types.join('');
