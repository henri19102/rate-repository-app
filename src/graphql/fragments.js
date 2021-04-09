import { gql } from "@apollo/client";

export const USER = gql`
  fragment UserDetails on User {
    id
    username
    createdAt
    reviewCount
    reviews {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const REVIEW = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    repository {
      ownerName
    }
    user {
      id
      username
    }
  }
`;

export const REPOSITORY = gql`
  fragment RepositoryDetails on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
  }
`;
