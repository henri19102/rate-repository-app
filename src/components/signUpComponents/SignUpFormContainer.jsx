import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { myStyles } from "../../styles/myStyles";
import SignUpForm from "./SignUpForm";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required("username is required"),
  password: yup.string().min(5).max(50).required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Password confirm is required"),
});

const SignUpFormContainer = ({ onSubmit }) => {
  return (
    <View style={myStyles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm handleSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUpFormContainer;
