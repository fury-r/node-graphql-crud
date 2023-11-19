import db from "../data/index";

export const games = () => {
  return db.games;
};

export const authors = () => {
  return db.authors;
};

export const reviews = () => {
  return db.reviews;
};

export const review = (parent: any, args: any, context: any) => {
  return db.reviews.find((value) => value.id === args.id);
};

export const game = (_: any, args: any) => {
  return db.games.find((value) => value.id === args.id);
};

export const author = (_: any, args: any) => {
  return db.authors.find((value) => value.id === args.id);
};

export const gameReview = (parent: any) =>
  db.reviews.filter((value) => value.game_id === parent.id);

export const authorReview = (parent: any) =>
  db.reviews.filter((value) => value.author_id === parent.id);

export const reviewGame = (parent: any) =>
  db.games.find((value) => value.id === parent.game_id);

export const reviewAuthor = (parent: any) =>
  db.authors.find((value) => value.id === parent.author_id);

export const deleteGame = (_: any, args: any, context: any) => {
  const gameIndex = db.games.findIndex((value) => value.id === args.id);
  const game = db.games[gameIndex];
  db.games.splice(gameIndex, 1);
  return game;
};

export const addGame = (_: any, args: any) => {
  db.games.push({
    ...args.game,
    id: Math.floor(Math.random() * 1000).toString(),
  });
  return db.games;
};

export const updateGame = (_: any, args: any) => {
  db.games.map((value) => {
    if (value.id !== args.id) {
      if (args.update?.title) value.title = args.update.title;
      if (args.update?.platform) value.platform = args.update.platform;
    }
    return value;
  });

  return db.games;
};
