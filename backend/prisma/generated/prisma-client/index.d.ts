// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  adventure: (where?: AdventureWhereInput) => Promise<boolean>;
  experience: (where?: ExperienceWhereInput) => Promise<boolean>;
  stay: (where?: StayWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  adventure: (where: AdventureWhereUniqueInput) => AdventureNullablePromise;
  adventures: (args?: {
    where?: AdventureWhereInput;
    orderBy?: AdventureOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Adventure>;
  adventuresConnection: (args?: {
    where?: AdventureWhereInput;
    orderBy?: AdventureOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AdventureConnectionPromise;
  experience: (where: ExperienceWhereUniqueInput) => ExperienceNullablePromise;
  experiences: (args?: {
    where?: ExperienceWhereInput;
    orderBy?: ExperienceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Experience>;
  experiencesConnection: (args?: {
    where?: ExperienceWhereInput;
    orderBy?: ExperienceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ExperienceConnectionPromise;
  stay: (where: StayWhereUniqueInput) => StayNullablePromise;
  stays: (args?: {
    where?: StayWhereInput;
    orderBy?: StayOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Stay>;
  staysConnection: (args?: {
    where?: StayWhereInput;
    orderBy?: StayOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => StayConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAdventure: (data: AdventureCreateInput) => AdventurePromise;
  updateAdventure: (args: {
    data: AdventureUpdateInput;
    where: AdventureWhereUniqueInput;
  }) => AdventurePromise;
  updateManyAdventures: (args: {
    data: AdventureUpdateManyMutationInput;
    where?: AdventureWhereInput;
  }) => BatchPayloadPromise;
  upsertAdventure: (args: {
    where: AdventureWhereUniqueInput;
    create: AdventureCreateInput;
    update: AdventureUpdateInput;
  }) => AdventurePromise;
  deleteAdventure: (where: AdventureWhereUniqueInput) => AdventurePromise;
  deleteManyAdventures: (where?: AdventureWhereInput) => BatchPayloadPromise;
  createExperience: (data: ExperienceCreateInput) => ExperiencePromise;
  updateExperience: (args: {
    data: ExperienceUpdateInput;
    where: ExperienceWhereUniqueInput;
  }) => ExperiencePromise;
  updateManyExperiences: (args: {
    data: ExperienceUpdateManyMutationInput;
    where?: ExperienceWhereInput;
  }) => BatchPayloadPromise;
  upsertExperience: (args: {
    where: ExperienceWhereUniqueInput;
    create: ExperienceCreateInput;
    update: ExperienceUpdateInput;
  }) => ExperiencePromise;
  deleteExperience: (where: ExperienceWhereUniqueInput) => ExperiencePromise;
  deleteManyExperiences: (where?: ExperienceWhereInput) => BatchPayloadPromise;
  createStay: (data: StayCreateInput) => StayPromise;
  updateStay: (args: {
    data: StayUpdateInput;
    where: StayWhereUniqueInput;
  }) => StayPromise;
  updateManyStays: (args: {
    data: StayUpdateManyMutationInput;
    where?: StayWhereInput;
  }) => BatchPayloadPromise;
  upsertStay: (args: {
    where: StayWhereUniqueInput;
    create: StayCreateInput;
    update: StayUpdateInput;
  }) => StayPromise;
  deleteStay: (where: StayWhereUniqueInput) => StayPromise;
  deleteManyStays: (where?: StayWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  adventure: (
    where?: AdventureSubscriptionWhereInput
  ) => AdventureSubscriptionPayloadSubscription;
  experience: (
    where?: ExperienceSubscriptionWhereInput
  ) => ExperienceSubscriptionPayloadSubscription;
  stay: (
    where?: StaySubscriptionWhereInput
  ) => StaySubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AdventureOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "period_ASC"
  | "period_DESC"
  | "cost_ASC"
  | "cost_DESC"
  | "country_ASC"
  | "country_DESC"
  | "img_ASC"
  | "img_DESC"
  | "imglow_ASC"
  | "imglow_DESC";

export type ExperienceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "cost_ASC"
  | "cost_DESC"
  | "ratings_ASC"
  | "ratings_DESC"
  | "reviews_ASC"
  | "reviews_DESC"
  | "country_ASC"
  | "country_DESC"
  | "img_ASC"
  | "img_DESC"
  | "imglow_ASC"
  | "imglow_DESC"
  | "location_ASC"
  | "location_DESC";

export type StayOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "cost_ASC"
  | "cost_DESC"
  | "hostType_ASC"
  | "hostType_DESC"
  | "country_ASC"
  | "country_DESC"
  | "location_ASC"
  | "location_DESC"
  | "ratings_ASC"
  | "ratings_DESC"
  | "reviews_ASC"
  | "reviews_DESC"
  | "img_ASC"
  | "img_DESC"
  | "imglow_ASC"
  | "imglow_DESC"
  | "size_ASC"
  | "size_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type AdventureWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  title?: Maybe<String>;
}>;

export interface AdventureWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  period?: Maybe<Int>;
  period_not?: Maybe<Int>;
  period_in?: Maybe<Int[] | Int>;
  period_not_in?: Maybe<Int[] | Int>;
  period_lt?: Maybe<Int>;
  period_lte?: Maybe<Int>;
  period_gt?: Maybe<Int>;
  period_gte?: Maybe<Int>;
  cost?: Maybe<Int>;
  cost_not?: Maybe<Int>;
  cost_in?: Maybe<Int[] | Int>;
  cost_not_in?: Maybe<Int[] | Int>;
  cost_lt?: Maybe<Int>;
  cost_lte?: Maybe<Int>;
  cost_gt?: Maybe<Int>;
  cost_gte?: Maybe<Int>;
  country?: Maybe<String>;
  country_not?: Maybe<String>;
  country_in?: Maybe<String[] | String>;
  country_not_in?: Maybe<String[] | String>;
  country_lt?: Maybe<String>;
  country_lte?: Maybe<String>;
  country_gt?: Maybe<String>;
  country_gte?: Maybe<String>;
  country_contains?: Maybe<String>;
  country_not_contains?: Maybe<String>;
  country_starts_with?: Maybe<String>;
  country_not_starts_with?: Maybe<String>;
  country_ends_with?: Maybe<String>;
  country_not_ends_with?: Maybe<String>;
  img?: Maybe<String>;
  img_not?: Maybe<String>;
  img_in?: Maybe<String[] | String>;
  img_not_in?: Maybe<String[] | String>;
  img_lt?: Maybe<String>;
  img_lte?: Maybe<String>;
  img_gt?: Maybe<String>;
  img_gte?: Maybe<String>;
  img_contains?: Maybe<String>;
  img_not_contains?: Maybe<String>;
  img_starts_with?: Maybe<String>;
  img_not_starts_with?: Maybe<String>;
  img_ends_with?: Maybe<String>;
  img_not_ends_with?: Maybe<String>;
  imglow?: Maybe<String>;
  imglow_not?: Maybe<String>;
  imglow_in?: Maybe<String[] | String>;
  imglow_not_in?: Maybe<String[] | String>;
  imglow_lt?: Maybe<String>;
  imglow_lte?: Maybe<String>;
  imglow_gt?: Maybe<String>;
  imglow_gte?: Maybe<String>;
  imglow_contains?: Maybe<String>;
  imglow_not_contains?: Maybe<String>;
  imglow_starts_with?: Maybe<String>;
  imglow_not_starts_with?: Maybe<String>;
  imglow_ends_with?: Maybe<String>;
  imglow_not_ends_with?: Maybe<String>;
  AND?: Maybe<AdventureWhereInput[] | AdventureWhereInput>;
  OR?: Maybe<AdventureWhereInput[] | AdventureWhereInput>;
  NOT?: Maybe<AdventureWhereInput[] | AdventureWhereInput>;
}

export type ExperienceWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  title?: Maybe<String>;
}>;

export interface ExperienceWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  cost?: Maybe<Int>;
  cost_not?: Maybe<Int>;
  cost_in?: Maybe<Int[] | Int>;
  cost_not_in?: Maybe<Int[] | Int>;
  cost_lt?: Maybe<Int>;
  cost_lte?: Maybe<Int>;
  cost_gt?: Maybe<Int>;
  cost_gte?: Maybe<Int>;
  ratings?: Maybe<Float>;
  ratings_not?: Maybe<Float>;
  ratings_in?: Maybe<Float[] | Float>;
  ratings_not_in?: Maybe<Float[] | Float>;
  ratings_lt?: Maybe<Float>;
  ratings_lte?: Maybe<Float>;
  ratings_gt?: Maybe<Float>;
  ratings_gte?: Maybe<Float>;
  reviews?: Maybe<Int>;
  reviews_not?: Maybe<Int>;
  reviews_in?: Maybe<Int[] | Int>;
  reviews_not_in?: Maybe<Int[] | Int>;
  reviews_lt?: Maybe<Int>;
  reviews_lte?: Maybe<Int>;
  reviews_gt?: Maybe<Int>;
  reviews_gte?: Maybe<Int>;
  country?: Maybe<String>;
  country_not?: Maybe<String>;
  country_in?: Maybe<String[] | String>;
  country_not_in?: Maybe<String[] | String>;
  country_lt?: Maybe<String>;
  country_lte?: Maybe<String>;
  country_gt?: Maybe<String>;
  country_gte?: Maybe<String>;
  country_contains?: Maybe<String>;
  country_not_contains?: Maybe<String>;
  country_starts_with?: Maybe<String>;
  country_not_starts_with?: Maybe<String>;
  country_ends_with?: Maybe<String>;
  country_not_ends_with?: Maybe<String>;
  img?: Maybe<String>;
  img_not?: Maybe<String>;
  img_in?: Maybe<String[] | String>;
  img_not_in?: Maybe<String[] | String>;
  img_lt?: Maybe<String>;
  img_lte?: Maybe<String>;
  img_gt?: Maybe<String>;
  img_gte?: Maybe<String>;
  img_contains?: Maybe<String>;
  img_not_contains?: Maybe<String>;
  img_starts_with?: Maybe<String>;
  img_not_starts_with?: Maybe<String>;
  img_ends_with?: Maybe<String>;
  img_not_ends_with?: Maybe<String>;
  imglow?: Maybe<String>;
  imglow_not?: Maybe<String>;
  imglow_in?: Maybe<String[] | String>;
  imglow_not_in?: Maybe<String[] | String>;
  imglow_lt?: Maybe<String>;
  imglow_lte?: Maybe<String>;
  imglow_gt?: Maybe<String>;
  imglow_gte?: Maybe<String>;
  imglow_contains?: Maybe<String>;
  imglow_not_contains?: Maybe<String>;
  imglow_starts_with?: Maybe<String>;
  imglow_not_starts_with?: Maybe<String>;
  imglow_ends_with?: Maybe<String>;
  imglow_not_ends_with?: Maybe<String>;
  location?: Maybe<String>;
  location_not?: Maybe<String>;
  location_in?: Maybe<String[] | String>;
  location_not_in?: Maybe<String[] | String>;
  location_lt?: Maybe<String>;
  location_lte?: Maybe<String>;
  location_gt?: Maybe<String>;
  location_gte?: Maybe<String>;
  location_contains?: Maybe<String>;
  location_not_contains?: Maybe<String>;
  location_starts_with?: Maybe<String>;
  location_not_starts_with?: Maybe<String>;
  location_ends_with?: Maybe<String>;
  location_not_ends_with?: Maybe<String>;
  AND?: Maybe<ExperienceWhereInput[] | ExperienceWhereInput>;
  OR?: Maybe<ExperienceWhereInput[] | ExperienceWhereInput>;
  NOT?: Maybe<ExperienceWhereInput[] | ExperienceWhereInput>;
}

export type StayWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  title?: Maybe<String>;
}>;

export interface StayWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  cost?: Maybe<Int>;
  cost_not?: Maybe<Int>;
  cost_in?: Maybe<Int[] | Int>;
  cost_not_in?: Maybe<Int[] | Int>;
  cost_lt?: Maybe<Int>;
  cost_lte?: Maybe<Int>;
  cost_gt?: Maybe<Int>;
  cost_gte?: Maybe<Int>;
  hostType?: Maybe<String>;
  hostType_not?: Maybe<String>;
  hostType_in?: Maybe<String[] | String>;
  hostType_not_in?: Maybe<String[] | String>;
  hostType_lt?: Maybe<String>;
  hostType_lte?: Maybe<String>;
  hostType_gt?: Maybe<String>;
  hostType_gte?: Maybe<String>;
  hostType_contains?: Maybe<String>;
  hostType_not_contains?: Maybe<String>;
  hostType_starts_with?: Maybe<String>;
  hostType_not_starts_with?: Maybe<String>;
  hostType_ends_with?: Maybe<String>;
  hostType_not_ends_with?: Maybe<String>;
  country?: Maybe<String>;
  country_not?: Maybe<String>;
  country_in?: Maybe<String[] | String>;
  country_not_in?: Maybe<String[] | String>;
  country_lt?: Maybe<String>;
  country_lte?: Maybe<String>;
  country_gt?: Maybe<String>;
  country_gte?: Maybe<String>;
  country_contains?: Maybe<String>;
  country_not_contains?: Maybe<String>;
  country_starts_with?: Maybe<String>;
  country_not_starts_with?: Maybe<String>;
  country_ends_with?: Maybe<String>;
  country_not_ends_with?: Maybe<String>;
  location?: Maybe<String>;
  location_not?: Maybe<String>;
  location_in?: Maybe<String[] | String>;
  location_not_in?: Maybe<String[] | String>;
  location_lt?: Maybe<String>;
  location_lte?: Maybe<String>;
  location_gt?: Maybe<String>;
  location_gte?: Maybe<String>;
  location_contains?: Maybe<String>;
  location_not_contains?: Maybe<String>;
  location_starts_with?: Maybe<String>;
  location_not_starts_with?: Maybe<String>;
  location_ends_with?: Maybe<String>;
  location_not_ends_with?: Maybe<String>;
  ratings?: Maybe<Float>;
  ratings_not?: Maybe<Float>;
  ratings_in?: Maybe<Float[] | Float>;
  ratings_not_in?: Maybe<Float[] | Float>;
  ratings_lt?: Maybe<Float>;
  ratings_lte?: Maybe<Float>;
  ratings_gt?: Maybe<Float>;
  ratings_gte?: Maybe<Float>;
  reviews?: Maybe<Int>;
  reviews_not?: Maybe<Int>;
  reviews_in?: Maybe<Int[] | Int>;
  reviews_not_in?: Maybe<Int[] | Int>;
  reviews_lt?: Maybe<Int>;
  reviews_lte?: Maybe<Int>;
  reviews_gt?: Maybe<Int>;
  reviews_gte?: Maybe<Int>;
  img?: Maybe<String>;
  img_not?: Maybe<String>;
  img_in?: Maybe<String[] | String>;
  img_not_in?: Maybe<String[] | String>;
  img_lt?: Maybe<String>;
  img_lte?: Maybe<String>;
  img_gt?: Maybe<String>;
  img_gte?: Maybe<String>;
  img_contains?: Maybe<String>;
  img_not_contains?: Maybe<String>;
  img_starts_with?: Maybe<String>;
  img_not_starts_with?: Maybe<String>;
  img_ends_with?: Maybe<String>;
  img_not_ends_with?: Maybe<String>;
  imglow?: Maybe<String>;
  imglow_not?: Maybe<String>;
  imglow_in?: Maybe<String[] | String>;
  imglow_not_in?: Maybe<String[] | String>;
  imglow_lt?: Maybe<String>;
  imglow_lte?: Maybe<String>;
  imglow_gt?: Maybe<String>;
  imglow_gte?: Maybe<String>;
  imglow_contains?: Maybe<String>;
  imglow_not_contains?: Maybe<String>;
  imglow_starts_with?: Maybe<String>;
  imglow_not_starts_with?: Maybe<String>;
  imglow_ends_with?: Maybe<String>;
  imglow_not_ends_with?: Maybe<String>;
  size?: Maybe<String>;
  size_not?: Maybe<String>;
  size_in?: Maybe<String[] | String>;
  size_not_in?: Maybe<String[] | String>;
  size_lt?: Maybe<String>;
  size_lte?: Maybe<String>;
  size_gt?: Maybe<String>;
  size_gte?: Maybe<String>;
  size_contains?: Maybe<String>;
  size_not_contains?: Maybe<String>;
  size_starts_with?: Maybe<String>;
  size_not_starts_with?: Maybe<String>;
  size_ends_with?: Maybe<String>;
  size_not_ends_with?: Maybe<String>;
  AND?: Maybe<StayWhereInput[] | StayWhereInput>;
  OR?: Maybe<StayWhereInput[] | StayWhereInput>;
  NOT?: Maybe<StayWhereInput[] | StayWhereInput>;
}

export interface AdventureCreateInput {
  id?: Maybe<ID_Input>;
  title?: Maybe<String>;
  period: Int;
  cost: Int;
  country: String;
  img: String;
  imglow: String;
}

export interface AdventureUpdateInput {
  title?: Maybe<String>;
  period?: Maybe<Int>;
  cost?: Maybe<Int>;
  country?: Maybe<String>;
  img?: Maybe<String>;
  imglow?: Maybe<String>;
}

export interface AdventureUpdateManyMutationInput {
  title?: Maybe<String>;
  period?: Maybe<Int>;
  cost?: Maybe<Int>;
  country?: Maybe<String>;
  img?: Maybe<String>;
  imglow?: Maybe<String>;
}

export interface ExperienceCreateInput {
  id?: Maybe<ID_Input>;
  title?: Maybe<String>;
  cost: Int;
  ratings?: Maybe<Float>;
  reviews?: Maybe<Int>;
  country: String;
  img: String;
  imglow: String;
  location: String;
}

export interface ExperienceUpdateInput {
  title?: Maybe<String>;
  cost?: Maybe<Int>;
  ratings?: Maybe<Float>;
  reviews?: Maybe<Int>;
  country?: Maybe<String>;
  img?: Maybe<String>;
  imglow?: Maybe<String>;
  location?: Maybe<String>;
}

export interface ExperienceUpdateManyMutationInput {
  title?: Maybe<String>;
  cost?: Maybe<Int>;
  ratings?: Maybe<Float>;
  reviews?: Maybe<Int>;
  country?: Maybe<String>;
  img?: Maybe<String>;
  imglow?: Maybe<String>;
  location?: Maybe<String>;
}

export interface StayCreateInput {
  id?: Maybe<ID_Input>;
  title?: Maybe<String>;
  cost: Int;
  hostType: String;
  country: String;
  location: String;
  ratings?: Maybe<Float>;
  reviews?: Maybe<Int>;
  img: String;
  imglow: String;
  size: String;
}

export interface StayUpdateInput {
  title?: Maybe<String>;
  cost?: Maybe<Int>;
  hostType?: Maybe<String>;
  country?: Maybe<String>;
  location?: Maybe<String>;
  ratings?: Maybe<Float>;
  reviews?: Maybe<Int>;
  img?: Maybe<String>;
  imglow?: Maybe<String>;
  size?: Maybe<String>;
}

export interface StayUpdateManyMutationInput {
  title?: Maybe<String>;
  cost?: Maybe<Int>;
  hostType?: Maybe<String>;
  country?: Maybe<String>;
  location?: Maybe<String>;
  ratings?: Maybe<Float>;
  reviews?: Maybe<Int>;
  img?: Maybe<String>;
  imglow?: Maybe<String>;
  size?: Maybe<String>;
}

export interface AdventureSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AdventureWhereInput>;
  AND?: Maybe<
    AdventureSubscriptionWhereInput[] | AdventureSubscriptionWhereInput
  >;
  OR?: Maybe<
    AdventureSubscriptionWhereInput[] | AdventureSubscriptionWhereInput
  >;
  NOT?: Maybe<
    AdventureSubscriptionWhereInput[] | AdventureSubscriptionWhereInput
  >;
}

export interface ExperienceSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ExperienceWhereInput>;
  AND?: Maybe<
    ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput
  >;
  OR?: Maybe<
    ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput
  >;
  NOT?: Maybe<
    ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput
  >;
}

export interface StaySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<StayWhereInput>;
  AND?: Maybe<StaySubscriptionWhereInput[] | StaySubscriptionWhereInput>;
  OR?: Maybe<StaySubscriptionWhereInput[] | StaySubscriptionWhereInput>;
  NOT?: Maybe<StaySubscriptionWhereInput[] | StaySubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Adventure {
  id: ID_Output;
  title?: String;
  period: Int;
  cost: Int;
  country: String;
  img: String;
  imglow: String;
}

export interface AdventurePromise extends Promise<Adventure>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  period: () => Promise<Int>;
  cost: () => Promise<Int>;
  country: () => Promise<String>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
}

export interface AdventureSubscription
  extends Promise<AsyncIterator<Adventure>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  period: () => Promise<AsyncIterator<Int>>;
  cost: () => Promise<AsyncIterator<Int>>;
  country: () => Promise<AsyncIterator<String>>;
  img: () => Promise<AsyncIterator<String>>;
  imglow: () => Promise<AsyncIterator<String>>;
}

export interface AdventureNullablePromise
  extends Promise<Adventure | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  period: () => Promise<Int>;
  cost: () => Promise<Int>;
  country: () => Promise<String>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
}

export interface AdventureConnection {
  pageInfo: PageInfo;
  edges: AdventureEdge[];
}

export interface AdventureConnectionPromise
  extends Promise<AdventureConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AdventureEdge>>() => T;
  aggregate: <T = AggregateAdventurePromise>() => T;
}

export interface AdventureConnectionSubscription
  extends Promise<AsyncIterator<AdventureConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AdventureEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAdventureSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AdventureEdge {
  node: Adventure;
  cursor: String;
}

export interface AdventureEdgePromise
  extends Promise<AdventureEdge>,
    Fragmentable {
  node: <T = AdventurePromise>() => T;
  cursor: () => Promise<String>;
}

export interface AdventureEdgeSubscription
  extends Promise<AsyncIterator<AdventureEdge>>,
    Fragmentable {
  node: <T = AdventureSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAdventure {
  count: Int;
}

export interface AggregateAdventurePromise
  extends Promise<AggregateAdventure>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAdventureSubscription
  extends Promise<AsyncIterator<AggregateAdventure>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Experience {
  id: ID_Output;
  title?: String;
  cost: Int;
  ratings?: Float;
  reviews?: Int;
  country: String;
  img: String;
  imglow: String;
  location: String;
}

export interface ExperiencePromise extends Promise<Experience>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  cost: () => Promise<Int>;
  ratings: () => Promise<Float>;
  reviews: () => Promise<Int>;
  country: () => Promise<String>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
  location: () => Promise<String>;
}

export interface ExperienceSubscription
  extends Promise<AsyncIterator<Experience>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  cost: () => Promise<AsyncIterator<Int>>;
  ratings: () => Promise<AsyncIterator<Float>>;
  reviews: () => Promise<AsyncIterator<Int>>;
  country: () => Promise<AsyncIterator<String>>;
  img: () => Promise<AsyncIterator<String>>;
  imglow: () => Promise<AsyncIterator<String>>;
  location: () => Promise<AsyncIterator<String>>;
}

export interface ExperienceNullablePromise
  extends Promise<Experience | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  cost: () => Promise<Int>;
  ratings: () => Promise<Float>;
  reviews: () => Promise<Int>;
  country: () => Promise<String>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
  location: () => Promise<String>;
}

export interface ExperienceConnection {
  pageInfo: PageInfo;
  edges: ExperienceEdge[];
}

export interface ExperienceConnectionPromise
  extends Promise<ExperienceConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ExperienceEdge>>() => T;
  aggregate: <T = AggregateExperiencePromise>() => T;
}

export interface ExperienceConnectionSubscription
  extends Promise<AsyncIterator<ExperienceConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ExperienceEdgeSubscription>>>() => T;
  aggregate: <T = AggregateExperienceSubscription>() => T;
}

export interface ExperienceEdge {
  node: Experience;
  cursor: String;
}

export interface ExperienceEdgePromise
  extends Promise<ExperienceEdge>,
    Fragmentable {
  node: <T = ExperiencePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ExperienceEdgeSubscription
  extends Promise<AsyncIterator<ExperienceEdge>>,
    Fragmentable {
  node: <T = ExperienceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateExperience {
  count: Int;
}

export interface AggregateExperiencePromise
  extends Promise<AggregateExperience>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateExperienceSubscription
  extends Promise<AsyncIterator<AggregateExperience>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Stay {
  id: ID_Output;
  title?: String;
  cost: Int;
  hostType: String;
  country: String;
  location: String;
  ratings?: Float;
  reviews?: Int;
  img: String;
  imglow: String;
  size: String;
}

export interface StayPromise extends Promise<Stay>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  cost: () => Promise<Int>;
  hostType: () => Promise<String>;
  country: () => Promise<String>;
  location: () => Promise<String>;
  ratings: () => Promise<Float>;
  reviews: () => Promise<Int>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
  size: () => Promise<String>;
}

export interface StaySubscription
  extends Promise<AsyncIterator<Stay>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  cost: () => Promise<AsyncIterator<Int>>;
  hostType: () => Promise<AsyncIterator<String>>;
  country: () => Promise<AsyncIterator<String>>;
  location: () => Promise<AsyncIterator<String>>;
  ratings: () => Promise<AsyncIterator<Float>>;
  reviews: () => Promise<AsyncIterator<Int>>;
  img: () => Promise<AsyncIterator<String>>;
  imglow: () => Promise<AsyncIterator<String>>;
  size: () => Promise<AsyncIterator<String>>;
}

export interface StayNullablePromise
  extends Promise<Stay | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  cost: () => Promise<Int>;
  hostType: () => Promise<String>;
  country: () => Promise<String>;
  location: () => Promise<String>;
  ratings: () => Promise<Float>;
  reviews: () => Promise<Int>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
  size: () => Promise<String>;
}

export interface StayConnection {
  pageInfo: PageInfo;
  edges: StayEdge[];
}

export interface StayConnectionPromise
  extends Promise<StayConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<StayEdge>>() => T;
  aggregate: <T = AggregateStayPromise>() => T;
}

export interface StayConnectionSubscription
  extends Promise<AsyncIterator<StayConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<StayEdgeSubscription>>>() => T;
  aggregate: <T = AggregateStaySubscription>() => T;
}

export interface StayEdge {
  node: Stay;
  cursor: String;
}

export interface StayEdgePromise extends Promise<StayEdge>, Fragmentable {
  node: <T = StayPromise>() => T;
  cursor: () => Promise<String>;
}

export interface StayEdgeSubscription
  extends Promise<AsyncIterator<StayEdge>>,
    Fragmentable {
  node: <T = StaySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateStay {
  count: Int;
}

export interface AggregateStayPromise
  extends Promise<AggregateStay>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateStaySubscription
  extends Promise<AsyncIterator<AggregateStay>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AdventureSubscriptionPayload {
  mutation: MutationType;
  node: Adventure;
  updatedFields: String[];
  previousValues: AdventurePreviousValues;
}

export interface AdventureSubscriptionPayloadPromise
  extends Promise<AdventureSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AdventurePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AdventurePreviousValuesPromise>() => T;
}

export interface AdventureSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AdventureSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AdventureSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AdventurePreviousValuesSubscription>() => T;
}

export interface AdventurePreviousValues {
  id: ID_Output;
  title?: String;
  period: Int;
  cost: Int;
  country: String;
  img: String;
  imglow: String;
}

export interface AdventurePreviousValuesPromise
  extends Promise<AdventurePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  period: () => Promise<Int>;
  cost: () => Promise<Int>;
  country: () => Promise<String>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
}

export interface AdventurePreviousValuesSubscription
  extends Promise<AsyncIterator<AdventurePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  period: () => Promise<AsyncIterator<Int>>;
  cost: () => Promise<AsyncIterator<Int>>;
  country: () => Promise<AsyncIterator<String>>;
  img: () => Promise<AsyncIterator<String>>;
  imglow: () => Promise<AsyncIterator<String>>;
}

export interface ExperienceSubscriptionPayload {
  mutation: MutationType;
  node: Experience;
  updatedFields: String[];
  previousValues: ExperiencePreviousValues;
}

export interface ExperienceSubscriptionPayloadPromise
  extends Promise<ExperienceSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ExperiencePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ExperiencePreviousValuesPromise>() => T;
}

export interface ExperienceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ExperienceSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ExperienceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ExperiencePreviousValuesSubscription>() => T;
}

export interface ExperiencePreviousValues {
  id: ID_Output;
  title?: String;
  cost: Int;
  ratings?: Float;
  reviews?: Int;
  country: String;
  img: String;
  imglow: String;
  location: String;
}

export interface ExperiencePreviousValuesPromise
  extends Promise<ExperiencePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  cost: () => Promise<Int>;
  ratings: () => Promise<Float>;
  reviews: () => Promise<Int>;
  country: () => Promise<String>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
  location: () => Promise<String>;
}

export interface ExperiencePreviousValuesSubscription
  extends Promise<AsyncIterator<ExperiencePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  cost: () => Promise<AsyncIterator<Int>>;
  ratings: () => Promise<AsyncIterator<Float>>;
  reviews: () => Promise<AsyncIterator<Int>>;
  country: () => Promise<AsyncIterator<String>>;
  img: () => Promise<AsyncIterator<String>>;
  imglow: () => Promise<AsyncIterator<String>>;
  location: () => Promise<AsyncIterator<String>>;
}

export interface StaySubscriptionPayload {
  mutation: MutationType;
  node: Stay;
  updatedFields: String[];
  previousValues: StayPreviousValues;
}

export interface StaySubscriptionPayloadPromise
  extends Promise<StaySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = StayPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = StayPreviousValuesPromise>() => T;
}

export interface StaySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<StaySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = StaySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = StayPreviousValuesSubscription>() => T;
}

export interface StayPreviousValues {
  id: ID_Output;
  title?: String;
  cost: Int;
  hostType: String;
  country: String;
  location: String;
  ratings?: Float;
  reviews?: Int;
  img: String;
  imglow: String;
  size: String;
}

export interface StayPreviousValuesPromise
  extends Promise<StayPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  cost: () => Promise<Int>;
  hostType: () => Promise<String>;
  country: () => Promise<String>;
  location: () => Promise<String>;
  ratings: () => Promise<Float>;
  reviews: () => Promise<Int>;
  img: () => Promise<String>;
  imglow: () => Promise<String>;
  size: () => Promise<String>;
}

export interface StayPreviousValuesSubscription
  extends Promise<AsyncIterator<StayPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  cost: () => Promise<AsyncIterator<Int>>;
  hostType: () => Promise<AsyncIterator<String>>;
  country: () => Promise<AsyncIterator<String>>;
  location: () => Promise<AsyncIterator<String>>;
  ratings: () => Promise<AsyncIterator<Float>>;
  reviews: () => Promise<AsyncIterator<Int>>;
  img: () => Promise<AsyncIterator<String>>;
  imglow: () => Promise<AsyncIterator<String>>;
  size: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
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

/**
 * Type Defs
 */

export const prisma: Prisma;