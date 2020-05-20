const { gql } = require('apollo-server-express');

module.exports = gql`
  type Adventure {
    country: String!
    id: ID!
    img: String!
    period: Int!
    price: Int!
    title: String!
  }

  type Experience {
    available: String!
    category: String!
    country: String!
    description: String!
    id: ID!
    img: String!
    imglow: String!
    cost: Int!
    ratings: Float!
    reviews: Int!
    street: String!
    title: String!
  }

  type Stay {
    access: String
    acommodates: Int
    bathrooms: Float
    bedrooms: Int
    beds: Int
    country: String
    description: String
    during_stay: String
    host_description: String
    host_is_superhost: String
    host_name: String
    host_picture_url: String
    host_response_rate: String
    host_response_time: String
    host_since: String
    host_thumbnail_url: String
    id: ID
    imglow: String
    name: String
    notes: String
    number_of_reviews: Int
    picture_url: String
    price: String
    reviews_per_month: Float
    size: String
    space: String
  }

  type Mutation {
    createStay(
      name: String
      price: Int
      host_is_superhost: String
      country: String
      street: String
      reviews_per_month: Float
      number_of_reviews: Int
      picture_url: String
      imglow: String
      host_thumbnail_url: String
      host_picture_url: String
      size: String
      description: String
      street: String
      space: String
      access: String
      notes: String
      host_name: String
      host_since: String
      host_description: String
      during_stay: String
      host_response_time: String
      host_response_rate: String
      accommodates: Int
      beds: Int
      bedrooms: Int
      bathrooms: Float
    ): Stay!
    deleteStay(name: String): Stay
    createAdventure(
      title: String
      period: Int
      cost: Int
      country: String
      img: String
    ): Adventure
    deleteAdventure(title: String): Adventure
    createExperience(
      title: String
      cost: Int
      ratings: Float
      reviews: Int
      country: String
      img: String
      location: String
      category: String
      available: String
    ): Experience
    deleteExperience(title: String): Experience
  }

  type Query {
    stay(id: Int!): Stay
    stayByCountry(country: String!): Stay
    stays: [Stay!]
    adventures: [Adventure!]
    adventure(id: Int!): Adventure
    experiences: [Experience!]
    experience(id: Int): Experience
  }
`;
