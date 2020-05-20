const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { PrismaClient } = require('@prisma/client');

const cors = require('cors');
const resolvers = require('./resolvers');
const schemas = require('./schema');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors('*'));
app.use(express.json());

const prisma = new PrismaClient();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: prisma,
});

server.applyMiddleware({ app });

// app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`Server listening at ${url}`);
// });

app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
