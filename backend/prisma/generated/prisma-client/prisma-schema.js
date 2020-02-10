module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Adventure {
  id: ID!
  title: String
  period: Int!
  cost: Int!
  country: String!
}

type AdventureConnection {
  pageInfo: PageInfo!
  edges: [AdventureEdge]!
  aggregate: AggregateAdventure!
}

input AdventureCreateInput {
  id: ID
  title: String
  period: Int!
  cost: Int!
  country: String!
}

type AdventureEdge {
  node: Adventure!
  cursor: String!
}

enum AdventureOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  period_ASC
  period_DESC
  cost_ASC
  cost_DESC
  country_ASC
  country_DESC
}

type AdventurePreviousValues {
  id: ID!
  title: String
  period: Int!
  cost: Int!
  country: String!
}

type AdventureSubscriptionPayload {
  mutation: MutationType!
  node: Adventure
  updatedFields: [String!]
  previousValues: AdventurePreviousValues
}

input AdventureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdventureWhereInput
  AND: [AdventureSubscriptionWhereInput!]
  OR: [AdventureSubscriptionWhereInput!]
  NOT: [AdventureSubscriptionWhereInput!]
}

input AdventureUpdateInput {
  title: String
  period: Int
  cost: Int
  country: String
}

input AdventureUpdateManyMutationInput {
  title: String
  period: Int
  cost: Int
  country: String
}

input AdventureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  period: Int
  period_not: Int
  period_in: [Int!]
  period_not_in: [Int!]
  period_lt: Int
  period_lte: Int
  period_gt: Int
  period_gte: Int
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [AdventureWhereInput!]
  OR: [AdventureWhereInput!]
  NOT: [AdventureWhereInput!]
}

input AdventureWhereUniqueInput {
  id: ID
  title: String
}

type AggregateAdventure {
  count: Int!
}

type AggregateExperience {
  count: Int!
}

type AggregateStay {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Experience {
  id: ID!
  title: String
  cost: Int!
  ratings: Float
  reviews: Int
  country: String!
  img: String
  imglow: String
}

type ExperienceConnection {
  pageInfo: PageInfo!
  edges: [ExperienceEdge]!
  aggregate: AggregateExperience!
}

input ExperienceCreateInput {
  id: ID
  title: String
  cost: Int!
  ratings: Float
  reviews: Int
  country: String!
  img: String
  imglow: String
}

type ExperienceEdge {
  node: Experience!
  cursor: String!
}

enum ExperienceOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  cost_ASC
  cost_DESC
  ratings_ASC
  ratings_DESC
  reviews_ASC
  reviews_DESC
  country_ASC
  country_DESC
  img_ASC
  img_DESC
  imglow_ASC
  imglow_DESC
}

type ExperiencePreviousValues {
  id: ID!
  title: String
  cost: Int!
  ratings: Float
  reviews: Int
  country: String!
  img: String
  imglow: String
}

type ExperienceSubscriptionPayload {
  mutation: MutationType!
  node: Experience
  updatedFields: [String!]
  previousValues: ExperiencePreviousValues
}

input ExperienceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExperienceWhereInput
  AND: [ExperienceSubscriptionWhereInput!]
  OR: [ExperienceSubscriptionWhereInput!]
  NOT: [ExperienceSubscriptionWhereInput!]
}

input ExperienceUpdateInput {
  title: String
  cost: Int
  ratings: Float
  reviews: Int
  country: String
  img: String
  imglow: String
}

input ExperienceUpdateManyMutationInput {
  title: String
  cost: Int
  ratings: Float
  reviews: Int
  country: String
  img: String
  imglow: String
}

input ExperienceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  ratings: Float
  ratings_not: Float
  ratings_in: [Float!]
  ratings_not_in: [Float!]
  ratings_lt: Float
  ratings_lte: Float
  ratings_gt: Float
  ratings_gte: Float
  reviews: Int
  reviews_not: Int
  reviews_in: [Int!]
  reviews_not_in: [Int!]
  reviews_lt: Int
  reviews_lte: Int
  reviews_gt: Int
  reviews_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  imglow: String
  imglow_not: String
  imglow_in: [String!]
  imglow_not_in: [String!]
  imglow_lt: String
  imglow_lte: String
  imglow_gt: String
  imglow_gte: String
  imglow_contains: String
  imglow_not_contains: String
  imglow_starts_with: String
  imglow_not_starts_with: String
  imglow_ends_with: String
  imglow_not_ends_with: String
  AND: [ExperienceWhereInput!]
  OR: [ExperienceWhereInput!]
  NOT: [ExperienceWhereInput!]
}

input ExperienceWhereUniqueInput {
  id: ID
  title: String
}

scalar Long

type Mutation {
  createAdventure(data: AdventureCreateInput!): Adventure!
  updateAdventure(data: AdventureUpdateInput!, where: AdventureWhereUniqueInput!): Adventure
  updateManyAdventures(data: AdventureUpdateManyMutationInput!, where: AdventureWhereInput): BatchPayload!
  upsertAdventure(where: AdventureWhereUniqueInput!, create: AdventureCreateInput!, update: AdventureUpdateInput!): Adventure!
  deleteAdventure(where: AdventureWhereUniqueInput!): Adventure
  deleteManyAdventures(where: AdventureWhereInput): BatchPayload!
  createExperience(data: ExperienceCreateInput!): Experience!
  updateExperience(data: ExperienceUpdateInput!, where: ExperienceWhereUniqueInput!): Experience
  updateManyExperiences(data: ExperienceUpdateManyMutationInput!, where: ExperienceWhereInput): BatchPayload!
  upsertExperience(where: ExperienceWhereUniqueInput!, create: ExperienceCreateInput!, update: ExperienceUpdateInput!): Experience!
  deleteExperience(where: ExperienceWhereUniqueInput!): Experience
  deleteManyExperiences(where: ExperienceWhereInput): BatchPayload!
  createStay(data: StayCreateInput!): Stay!
  updateStay(data: StayUpdateInput!, where: StayWhereUniqueInput!): Stay
  updateManyStays(data: StayUpdateManyMutationInput!, where: StayWhereInput): BatchPayload!
  upsertStay(where: StayWhereUniqueInput!, create: StayCreateInput!, update: StayUpdateInput!): Stay!
  deleteStay(where: StayWhereUniqueInput!): Stay
  deleteManyStays(where: StayWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  adventure(where: AdventureWhereUniqueInput!): Adventure
  adventures(where: AdventureWhereInput, orderBy: AdventureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Adventure]!
  adventuresConnection(where: AdventureWhereInput, orderBy: AdventureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdventureConnection!
  experience(where: ExperienceWhereUniqueInput!): Experience
  experiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience]!
  experiencesConnection(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceConnection!
  stay(where: StayWhereUniqueInput!): Stay
  stays(where: StayWhereInput, orderBy: StayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stay]!
  staysConnection(where: StayWhereInput, orderBy: StayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StayConnection!
  node(id: ID!): Node
}

type Stay {
  id: ID!
  title: String
  cost: Int!
  hostType: String
  country: String
  location: String
  ratings: Float
  img: String
  imglow: String
}

type StayConnection {
  pageInfo: PageInfo!
  edges: [StayEdge]!
  aggregate: AggregateStay!
}

input StayCreateInput {
  id: ID
  title: String
  cost: Int!
  hostType: String
  country: String
  location: String
  ratings: Float
  img: String
  imglow: String
}

type StayEdge {
  node: Stay!
  cursor: String!
}

enum StayOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  cost_ASC
  cost_DESC
  hostType_ASC
  hostType_DESC
  country_ASC
  country_DESC
  location_ASC
  location_DESC
  ratings_ASC
  ratings_DESC
  img_ASC
  img_DESC
  imglow_ASC
  imglow_DESC
}

type StayPreviousValues {
  id: ID!
  title: String
  cost: Int!
  hostType: String
  country: String
  location: String
  ratings: Float
  img: String
  imglow: String
}

type StaySubscriptionPayload {
  mutation: MutationType!
  node: Stay
  updatedFields: [String!]
  previousValues: StayPreviousValues
}

input StaySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StayWhereInput
  AND: [StaySubscriptionWhereInput!]
  OR: [StaySubscriptionWhereInput!]
  NOT: [StaySubscriptionWhereInput!]
}

input StayUpdateInput {
  title: String
  cost: Int
  hostType: String
  country: String
  location: String
  ratings: Float
  img: String
  imglow: String
}

input StayUpdateManyMutationInput {
  title: String
  cost: Int
  hostType: String
  country: String
  location: String
  ratings: Float
  img: String
  imglow: String
}

input StayWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  hostType: String
  hostType_not: String
  hostType_in: [String!]
  hostType_not_in: [String!]
  hostType_lt: String
  hostType_lte: String
  hostType_gt: String
  hostType_gte: String
  hostType_contains: String
  hostType_not_contains: String
  hostType_starts_with: String
  hostType_not_starts_with: String
  hostType_ends_with: String
  hostType_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  ratings: Float
  ratings_not: Float
  ratings_in: [Float!]
  ratings_not_in: [Float!]
  ratings_lt: Float
  ratings_lte: Float
  ratings_gt: Float
  ratings_gte: Float
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  imglow: String
  imglow_not: String
  imglow_in: [String!]
  imglow_not_in: [String!]
  imglow_lt: String
  imglow_lte: String
  imglow_gt: String
  imglow_gte: String
  imglow_contains: String
  imglow_not_contains: String
  imglow_starts_with: String
  imglow_not_starts_with: String
  imglow_ends_with: String
  imglow_not_ends_with: String
  AND: [StayWhereInput!]
  OR: [StayWhereInput!]
  NOT: [StayWhereInput!]
}

input StayWhereUniqueInput {
  id: ID
  title: String
}

type Subscription {
  adventure(where: AdventureSubscriptionWhereInput): AdventureSubscriptionPayload
  experience(where: ExperienceSubscriptionWhereInput): ExperienceSubscriptionPayload
  stay(where: StaySubscriptionWhereInput): StaySubscriptionPayload
}
`
      }
    