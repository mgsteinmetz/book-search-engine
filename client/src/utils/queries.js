import { gql } from '@apollo/client';

export const GET_ME = gql`
    query user {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                title
                description
                authors
                bookId
                image
                link
            }
        }
    }
`;