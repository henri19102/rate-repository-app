import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { myStyles } from "../../styles/myStyles";
import SignInForm from "./SignInForm";

const initialValues = {
  username: "",
  password: "",
};

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

const SignInContainer = ({ onSubmit }) => {
  return (
    <View style={myStyles.formContainer}>
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

export default SignInContainer;
