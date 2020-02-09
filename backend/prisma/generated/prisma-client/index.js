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
  endpoint: `https://us1.prisma.sh/kokoaj-0cd9e2/backend/dev`
});
exports.prisma = new exports.Prisma();
