const express = require('express');
const { PubSub } = require('graphql-subscriptions');
const app = express();
const { createServer } = require('@graphql-yoga/node');
const { RedisPubSub } = require('graphql-redis-subscriptions');
const { default: Redis } = require('ioredis');
require('dotenv').config();

//routes
app.get('/',function (req,res){
    res.send('Hello World');
});

const options_redis = {
    host: '127.0.0.1',
    port: '6379',
    retryStrategy: times => {
        return Math.min(times * 50, 2000);
    }
};

const pubsub = new RedisPubSub({
    publisher: new Redis(options_redis),
    subscriber: new Redis(options_redis)
});

//DB Connect
require('./db/db_connection');

//importing GraphQL files
require('./src/data/data');
require('./src/resolvers/Mutation');
require('./src/resolvers/Query');
require('./src/resolvers/Subscription');
require('./src/resolvers/User');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const server = new createServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        User,
        Subscription
    },
    context: {
        data,
        pubsub
    }
});

//server setup
/*app.listen(process.env.PORT,function(err){
    if(err){console.log("Error in Server Setup");}
    console.log("Server listening on port "+process.env.PORT);
});*/

const options = {
    port: process.env.PORT
}

server.start(options, ({ port }) =>
    console.log(
        `Server started, listening on port ${port} for incoming requests.`,
    ),
)

