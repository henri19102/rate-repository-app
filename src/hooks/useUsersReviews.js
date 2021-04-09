import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../graphql/queries";

const useUsersReviews = (variables) => {
  const { data, refetch } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  return { reviews: data?.authorizedUser.reviews, refetch };
};

export default useUsersReviews;
