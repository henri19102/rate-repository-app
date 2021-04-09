import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import {myStyles} from "../../styles/myStyles";
import ReviewForm from "./ReviewForm";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  stringRating: "0",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Name of the repositorys owner is required"),
  repositoryName: yup.string().required("Repository name is required"),
  stringRating: yup
    .string().min(1).max(3)
    .required("Rating must be between 0-100"),
  text: yup.string(),
});

const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <View style={myStyles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm handleSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default ReviewFormContainer;
