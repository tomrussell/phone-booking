export default {
  Query: {
    hello: (_, args) => `Hello ${args.name || 'World'}!`,
  },
};
