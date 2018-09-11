FROM node:9.11.1-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY server/dist server
COPY build server/client

COPY server/package.json .
COPY yarn.lock .

RUN yarn --production && \
    yarn cache clean

EXPOSE 4000

CMD [ "npm", "start" ]
