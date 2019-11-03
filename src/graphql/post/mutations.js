import gql from 'graphql-tag';
const GET_POSTS = gql`
    query GetPosts($filter: String, $skip: Int, $first: Int, $orderBy: PostOrderOption) {
        feed(filter: $filter, skip: $skip, first: $first, orderBy: $orderBy) {
            posts {
                id
                title
                url
                description
            }
        }
    }
`;

const USER_EXISTS = gql`
    query UserExists($email: String!) {
        userExists(email: $email)
    }
`;

export { GET_POSTS, USER_EXISTS };