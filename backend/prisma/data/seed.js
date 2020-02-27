const { prisma } = require('../generated/prisma-client');
var stays = require('./stays.json');
var experiences = require('./experiences.json');
var adventures = require('./adventures.json');

async function main() {
  for (let i = 0; i < stays.length; i++) {
    await prisma.createStay({
      name: stays[i].name,
      price: stays[i].price,
      host_is_superhost: stays[i].host_is_superhost,
      country: stays[i].country,
      street: stays[i].street,
      number_of_reviews: stays[i].number_of_reviews,
      reviews_per_month: stays[i].reviews_per_month,
      picture_url: stays[i].picture_url,
      host_thumbnail_url: stays[i].host_thumbnail_url,
      host_picture_url: stays[i].host_picture_url,
      size: stays[i].size,
      description: stays[i].description,
      space: stays[i].space,
      access: stays[i].access,
      notes: stays[i].notes,
      host_name: stays[i].host_name,
      host_since: stays[i].host_since,
      hostDescription: stays[i].hostDescription,
      duringStay: stays[i].duringStay,
      host_response_time: stays[i].host_response_time,
      host_response_rate: stays[i].host_response_rate,
      accommodates: stays[i].accommodates,
      beds: stays[i].beds,
      bedrooms: stays[i].bedrooms,
      bathrooms: stays[i].bathrooms
    });
  }
  for (let j = 0; j < experiences.length; j++) {
    await prisma.createExperience({
      title: experiences[j].title,
      cost: experiences[j].cost,
      ratings: experiences[j].ratings,
      reviews: experiences[j].reviews,
      country: experiences[j].country,
      img: experiences[j].img,
      location: experiences[j].location
    });
  }
  for (let k = 0; k < adventures.length; k++) {
    await prisma.createAdventure({
      title: adventures[k].title,
      period: adventures[k].period,
      cost: adventures[k].cost,
      ratings: adventures[k].ratings,
      reviews: adventures[k].reviews,
      country: adventures[k].country,
      img: adventures[k].img,
      location: adventures[k].location
    });
  }

  console.log('successfully seeded');
}

main().catch((e) => console.log(e));
