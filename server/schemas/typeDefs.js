const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
        bookCount: Int
    }

    type Book {
        authors: [String]
        desciption: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    input bookInput {
        bookId: String
        authors: [String]
        description: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        books(_id: String): [Book]
        me: User
    }

    type Mutation {
        addUser(_id: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(input:bookInput): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;