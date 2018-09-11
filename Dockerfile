# Stage 1 - client bundle
FROM node:8.11.4 as client-deps

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build

# Stage 2 - server bundle
FROM node:8.11.4 as server-deps

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY server .
RUN yarn && yarn build

# Stage 3 - production environment
FROM node:8.11.4-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY server/package.json .
COPY --from=server-deps /usr/src/app/dist .
COPY --from=client-deps /usr/src/app/build client

RUN yarn --production && \
    yarn cache clean

EXPOSE 4000

CMD [ "npm", "start" ]
