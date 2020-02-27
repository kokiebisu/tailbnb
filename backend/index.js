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

server.start(() => console.log('Server is running on cloud...'));
