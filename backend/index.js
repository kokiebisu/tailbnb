const { prisma } = require('./prisma/generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './prisma/schema.graphql',
  resolvers,
  context: {
    prisma
  }
});

server.express.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

server.start(() => console.log('Server is running on cloud...'));
