import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
    mutation createUser($username: String!, $email: String!, $password: String!, savedBooks: $[bookSchema]) {
        createUser(username: $username, email: $email, password: $password, $savedbooks: $[bookSchema]) {
            username
            email
            password
            savedBooks
        }
    }
`;