export const typeDefs = `#graphql
type Game{
    id:ID!
    title:String!
    platform: [String!]!
    reviews:[Review!]
    
}
type Author{
    id:ID!
    name:String!
    verified:Boolean!
    reviews:[Review!] 
}
type Review{
    id:ID!
    rating:Int!
    content:String!
    game:Game!
    author:Author!
}


type Query{
    reviews:[Review]
    #query variable
    review(id:ID!): Review
    game(id:ID!):Game
    author(id:ID!):Author
    games:[Game]
    authors:[Author]
}

type Mutation{
    deleteGame(id:ID!):Game
    addGame(game:AddGameInput!):[Game]
    updateGame(id:ID!,update:UpdateGameInput):[Game]
}
input AddGameInput{
    title:String!,
    platform:[String!]
}
input UpdateGameInput{
    title:String!,
    platform:[String!]
}
`;
//Number of types
// int, float, string, boolean, ID
