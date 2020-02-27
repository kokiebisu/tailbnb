const { prisma } = require('../generated/prisma-client');
var stays = require('./stays.json');
var experiences = require('./experiences.json');
var adventures = require('./adventures.json');

async function main() {
  for (let i = 0; i < stays.length; i++) {
    const newStay = await prisma.createStay({
      name: stays[i].name,
      host_is_superhost: stays[i].host_is_superhost,
      country: stays[i].country,
      street: stays[i].street,
      number_of_reviews: stays[i].number_of_reviews
    });
  }

  console.log('successful');
}

main().catch((e) => console.log(e));
