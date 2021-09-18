const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
    }

    type Book {
        _id: ID!
    }

    type Query {
        user: [User]
        book(_id: String): [Book]
    }

    type Mutation {
        createUser(_id: String!): [User]
    }
`;

module.exports = typeDefs;