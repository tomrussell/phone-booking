import QueryResolver from './query.resolver';
import MutationResolver from './mutation.resolver';

export default {
  ...QueryResolver,
  ...MutationResolver,
};
