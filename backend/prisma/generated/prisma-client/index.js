"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Stay",
    embedded: false
  },
  {
    name: "Adventure",
    embedded: false
  },
  {
    name: "Experience",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://nextbnb-server-97b1e5b0c9.herokuapp.com`
});
exports.prisma = new exports.Prisma();
