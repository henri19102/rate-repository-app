import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const repositoryData = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return repositoryData;
};

export default useRepositories;
