import { gql } from "@apollo/client";
import { REPOSITORY } from "./fragments";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $first: Int
    $after: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      first: $first
      after: $after
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
    }
  }
  ${REPOSITORY}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryDetails
      reviews(first: $first, after: $after) {
        edges {
          cursor
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY}
`;

export const AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            repository {
              ownerName
            }
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
