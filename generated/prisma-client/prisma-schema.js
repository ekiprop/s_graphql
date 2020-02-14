module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateDaily {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Daily {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
}

type DailyConnection {
  pageInfo: PageInfo!
  edges: [DailyEdge]!
  aggregate: AggregateDaily!
}

input DailyCreateInput {
  id: ID
  name: String!
  games: GameCreateManyWithoutDailyInput
}

input DailyCreateOneWithoutGamesInput {
  create: DailyCreateWithoutGamesInput
  connect: DailyWhereUniqueInput
}

input DailyCreateWithoutGamesInput {
  id: ID
  name: String!
}

type DailyEdge {
  node: Daily!
  cursor: String!
}

enum DailyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DailyPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type DailySubscriptionPayload {
  mutation: MutationType!
  node: Daily
  updatedFields: [String!]
  previousValues: DailyPreviousValues
}

input DailySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DailyWhereInput
  AND: [DailySubscriptionWhereInput!]
  OR: [DailySubscriptionWhereInput!]
  NOT: [DailySubscriptionWhereInput!]
}

input DailyUpdateInput {
  name: String
  games: GameUpdateManyWithoutDailyInput
}

input DailyUpdateManyMutationInput {
  name: String
}

input DailyUpdateOneWithoutGamesInput {
  create: DailyCreateWithoutGamesInput
  update: DailyUpdateWithoutGamesDataInput
  upsert: DailyUpsertWithoutGamesInput
  delete: Boolean
  disconnect: Boolean
  connect: DailyWhereUniqueInput
}

input DailyUpdateWithoutGamesDataInput {
  name: String
}

input DailyUpsertWithoutGamesInput {
  update: DailyUpdateWithoutGamesDataInput!
  create: DailyCreateWithoutGamesInput!
}

input DailyWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  games_every: GameWhereInput
  games_some: GameWhereInput
  games_none: GameWhereInput
  AND: [DailyWhereInput!]
  OR: [DailyWhereInput!]
  NOT: [DailyWhereInput!]
}

input DailyWhereUniqueInput {
  id: ID
}

scalar DateTime

type Game {
  id: ID!
  home: String!
  away: String!
  country: String!
  prediction: String!
  outcome: String
  kickoff: DateTime
  daily: Daily
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  id: ID
  home: String!
  away: String!
  country: String!
  prediction: String!
  outcome: String
  kickoff: DateTime
  daily: DailyCreateOneWithoutGamesInput
}

input GameCreateManyWithoutDailyInput {
  create: [GameCreateWithoutDailyInput!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateWithoutDailyInput {
  id: ID
  home: String!
  away: String!
  country: String!
  prediction: String!
  outcome: String
  kickoff: DateTime
}

type GameEdge {
  node: Game!
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  home_ASC
  home_DESC
  away_ASC
  away_DESC
  country_ASC
  country_DESC
  prediction_ASC
  prediction_DESC
  outcome_ASC
  outcome_DESC
  kickoff_ASC
  kickoff_DESC
}

type GamePreviousValues {
  id: ID!
  home: String!
  away: String!
  country: String!
  prediction: String!
  outcome: String
  kickoff: DateTime
}

input GameScalarWhereInput {
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
  home: String
  home_not: String
  home_in: [String!]
  home_not_in: [String!]
  home_lt: String
  home_lte: String
  home_gt: String
  home_gte: String
  home_contains: String
  home_not_contains: String
  home_starts_with: String
  home_not_starts_with: String
  home_ends_with: String
  home_not_ends_with: String
  away: String
  away_not: String
  away_in: [String!]
  away_not_in: [String!]
  away_lt: String
  away_lte: String
  away_gt: String
  away_gte: String
  away_contains: String
  away_not_contains: String
  away_starts_with: String
  away_not_starts_with: String
  away_ends_with: String
  away_not_ends_with: String
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
  prediction: String
  prediction_not: String
  prediction_in: [String!]
  prediction_not_in: [String!]
  prediction_lt: String
  prediction_lte: String
  prediction_gt: String
  prediction_gte: String
  prediction_contains: String
  prediction_not_contains: String
  prediction_starts_with: String
  prediction_not_starts_with: String
  prediction_ends_with: String
  prediction_not_ends_with: String
  outcome: String
  outcome_not: String
  outcome_in: [String!]
  outcome_not_in: [String!]
  outcome_lt: String
  outcome_lte: String
  outcome_gt: String
  outcome_gte: String
  outcome_contains: String
  outcome_not_contains: String
  outcome_starts_with: String
  outcome_not_starts_with: String
  outcome_ends_with: String
  outcome_not_ends_with: String
  kickoff: DateTime
  kickoff_not: DateTime
  kickoff_in: [DateTime!]
  kickoff_not_in: [DateTime!]
  kickoff_lt: DateTime
  kickoff_lte: DateTime
  kickoff_gt: DateTime
  kickoff_gte: DateTime
  AND: [GameScalarWhereInput!]
  OR: [GameScalarWhereInput!]
  NOT: [GameScalarWhereInput!]
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
  OR: [GameSubscriptionWhereInput!]
  NOT: [GameSubscriptionWhereInput!]
}

input GameUpdateInput {
  home: String
  away: String
  country: String
  prediction: String
  outcome: String
  kickoff: DateTime
  daily: DailyUpdateOneWithoutGamesInput
}

input GameUpdateManyDataInput {
  home: String
  away: String
  country: String
  prediction: String
  outcome: String
  kickoff: DateTime
}

input GameUpdateManyMutationInput {
  home: String
  away: String
  country: String
  prediction: String
  outcome: String
  kickoff: DateTime
}

input GameUpdateManyWithoutDailyInput {
  create: [GameCreateWithoutDailyInput!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  set: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  update: [GameUpdateWithWhereUniqueWithoutDailyInput!]
  upsert: [GameUpsertWithWhereUniqueWithoutDailyInput!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
}

input GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput!
  data: GameUpdateManyDataInput!
}

input GameUpdateWithoutDailyDataInput {
  home: String
  away: String
  country: String
  prediction: String
  outcome: String
  kickoff: DateTime
}

input GameUpdateWithWhereUniqueWithoutDailyInput {
  where: GameWhereUniqueInput!
  data: GameUpdateWithoutDailyDataInput!
}

input GameUpsertWithWhereUniqueWithoutDailyInput {
  where: GameWhereUniqueInput!
  update: GameUpdateWithoutDailyDataInput!
  create: GameCreateWithoutDailyInput!
}

input GameWhereInput {
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
  home: String
  home_not: String
  home_in: [String!]
  home_not_in: [String!]
  home_lt: String
  home_lte: String
  home_gt: String
  home_gte: String
  home_contains: String
  home_not_contains: String
  home_starts_with: String
  home_not_starts_with: String
  home_ends_with: String
  home_not_ends_with: String
  away: String
  away_not: String
  away_in: [String!]
  away_not_in: [String!]
  away_lt: String
  away_lte: String
  away_gt: String
  away_gte: String
  away_contains: String
  away_not_contains: String
  away_starts_with: String
  away_not_starts_with: String
  away_ends_with: String
  away_not_ends_with: String
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
  prediction: String
  prediction_not: String
  prediction_in: [String!]
  prediction_not_in: [String!]
  prediction_lt: String
  prediction_lte: String
  prediction_gt: String
  prediction_gte: String
  prediction_contains: String
  prediction_not_contains: String
  prediction_starts_with: String
  prediction_not_starts_with: String
  prediction_ends_with: String
  prediction_not_ends_with: String
  outcome: String
  outcome_not: String
  outcome_in: [String!]
  outcome_not_in: [String!]
  outcome_lt: String
  outcome_lte: String
  outcome_gt: String
  outcome_gte: String
  outcome_contains: String
  outcome_not_contains: String
  outcome_starts_with: String
  outcome_not_starts_with: String
  outcome_ends_with: String
  outcome_not_ends_with: String
  kickoff: DateTime
  kickoff_not: DateTime
  kickoff_in: [DateTime!]
  kickoff_not_in: [DateTime!]
  kickoff_lt: DateTime
  kickoff_lte: DateTime
  kickoff_gt: DateTime
  kickoff_gte: DateTime
  daily: DailyWhereInput
  AND: [GameWhereInput!]
  OR: [GameWhereInput!]
  NOT: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDaily(data: DailyCreateInput!): Daily!
  updateDaily(data: DailyUpdateInput!, where: DailyWhereUniqueInput!): Daily
  updateManyDailies(data: DailyUpdateManyMutationInput!, where: DailyWhereInput): BatchPayload!
  upsertDaily(where: DailyWhereUniqueInput!, create: DailyCreateInput!, update: DailyUpdateInput!): Daily!
  deleteDaily(where: DailyWhereUniqueInput!): Daily
  deleteManyDailies(where: DailyWhereInput): BatchPayload!
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
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
  daily(where: DailyWhereUniqueInput!): Daily
  dailies(where: DailyWhereInput, orderBy: DailyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Daily]!
  dailiesConnection(where: DailyWhereInput, orderBy: DailyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DailyConnection!
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  node(id: ID!): Node
}

type Subscription {
  daily(where: DailySubscriptionWhereInput): DailySubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
}
`
      }
    