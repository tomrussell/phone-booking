import 'babel-polyfill';
import { GraphQLServer } from 'graphql-yoga';
import express from 'express';
import path from 'path';

import logger from './logger';

import typeDefs from './types';
import resolvers from './resolvers';

const log = logger('index.js');

const options = { endpoint: '/graphql', playground: '/playground' };
const server = new GraphQLServer({ typeDefs, resolvers });

server.express
  .use(express.static(path.join(__dirname, 'client')))
  .use((req, res, next) => {
    if (req.path.startsWith('/graphql') || req.path.startsWith('/playground')) {
      next();
    } else {
      res.sendFile(path.join(__dirname, 'client', 'index.html'));
    }
  });

server.start(options, () => log.info('Server is running at http://localhost:4000'));
