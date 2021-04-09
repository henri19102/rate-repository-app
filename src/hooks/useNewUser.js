import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useNewUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { user: { username, password } },
    });

    return data;
  };

  return [createUser, result];
};

export default useNewUser;
