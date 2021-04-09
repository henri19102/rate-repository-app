import React from "react";
import SignUpFormContainer from "./SignUpFormContainer";
import useNewUser from "../../hooks/useNewUser";
import useSignIn from "../../hooks/useSignIn";

import { useHistory } from "react-router-native";

const Review = () => {
  const [createUser] = useNewUser();
  const [signIn] = useSignIn();

  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await createUser({ username, password });
      console.log(data);
      const user = await signIn({ username, password });
      console.log(user);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpFormContainer onSubmit={onSubmit} />;
};

export default Review;
