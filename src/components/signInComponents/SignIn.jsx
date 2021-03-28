import React from "react";
import { View, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../../theme";
import useSignIn from "../../hooks/useSignIn";
import SignInForm from "./SignInForm";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.snow,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username length must be more than two letters"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password length must be more than three letters"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm handleSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
