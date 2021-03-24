import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.snow,
  },

  itemPadding: {
    marginVertical: 15,
  },
});

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Username is required")
    .min(3, "Username length must be more than two letters"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password length must be more than three letters"),
});

const SignIn = () => {
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ name: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(props) => (
          <View>
            <FormikTextInput name="name" placeholder="username" />
            <FormikTextInput
              name="password"
              placeholder="password"
              secureTextEntry
            />
            <View style={styles.itemPadding}>
              <Button title="Sign in"></Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
