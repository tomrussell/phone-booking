# Test-Phone Booking

Fullstack JS application which allows users to view a listing of available mobile phones and book devices for development purposes

Client side code is React, which connects using the Apollo GraphQL client to an Apollo Express GraphQL server

# Running the application

### Docker

A `docker-compose.yaml` file has been provided to build, package and run the application. It will also handle launching a MongoDB server

```
$ docker-compose up -d
```

The application should be available at `http://localhost:4000`

### Development

Running in development mode requires 2 terminal sessions, one to run the client side code, and the second for the API. The app also depends on a MongoDB database running on localhost, this can easily be launched using Docker

```
$ docker run --name mongo -p 27017:27017 -d mongo:latest
```

### Client code

Install NPM dependencies and execute the start script

```
$ yarn && yarn start
```

### Server code

Navigate to the server source folder, install dependencies and run the dev script

```
$ cd server
$ yarn && yarn dev
```
