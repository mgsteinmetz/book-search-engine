import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
        _id
        username
        email
        password
        savedBooks
    }
`;

export const QUERY_BOOK = gql`
    query book($_id: String) {
        book(_id: $_id) {
            savedBooks {
                title
                description
                authors
                bookId
            }
        }
    }
`;