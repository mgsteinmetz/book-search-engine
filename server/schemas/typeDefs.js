const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String! @unique
        email: String! @unique
        password: String!
        savedBooks: [bookSchema]
    }

    type Book {
        authors: [String]
        desciption: String!
        bookId: ID!
        image: String
        link: String
        title: String!
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