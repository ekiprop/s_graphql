const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    allGames(root, args, context) {
      return context.prisma.games();
    },
    game(root, args, context) {
      return context.prisma.game({ id: args.gameId });
    },
    gamesByDaily(root, args, context) {
      return context.prisma
        .daily({
          id: args.dailyId
        })
        .games();
    }
  },
  Mutation: {
    addGame(root, args, context) {
      return context.prisma.createGame({
        home: args.home,
        away: args.away,
        country: args.country,
        prediction: args.prediction,
        outcome: args.outcome,
        match_date: args.match_date,
        daily: {
          connect: { id: args.dailyId }
        }
      });
    },

    addDaily(root, args, context) {
      return context.prisma.createDaily({ name: args.name });
    }
  },
  Daily: {
    games(root, args, context) {
      return context.prisma
        .daily({
          id: root.id
        })
        .dailies();
    }
  },
  Game: {
    daily(root, args, context) {
      return context.prisma
        .game({
          id: root.id
        })
        .daily();
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: {
    prisma
  }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
