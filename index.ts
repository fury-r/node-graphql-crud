const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./src/graphql/schema");

const {
  authors,
  games,
  reviews,
  review,
  game,
  author,
  gameReview,
  authorReview,
  reviewGame,
  addGame,
  reviewAuthor,
  deleteGame,
  updateGame,
} = require("./src/graphql/resolvers");

const Query = {
  games,
  authors,
  reviews,
  review,
  author,
  game,
};
export const server = new ApolloServer({
  //require typeDefs - data ype definition
  typeDefs,
  //resolverFunctions - resolve queries
  resolvers: {
    Query,
    Game: {
      reviews: gameReview,
    },
    Author: {
      reviews: authorReview,
    },
    Review: {
      game: reviewGame,
      author: reviewAuthor,
    },
    Mutation: {
      deleteGame,
      addGame,
      updateGame,
    },
  },
});

startStandaloneServer(server, {
  listen: { port: 4000 },
});
