import { gql } from "@apollo/client";
import { REVIEW, USER } from "./fragments";

export const SIGN_IN = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      ...ReviewDetails
    }
  }
  ${REVIEW}
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      ...UserDetails
    }
  }
  ${USER}
`;
