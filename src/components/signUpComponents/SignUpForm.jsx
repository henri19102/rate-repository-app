import React from "react";
import { Button, View } from "react-native";
import FormikTextInput from "../FormikTextInput";
import { myStyles } from "../../styles/myStyles";

const SignUpForm = ({ handleSubmit }) => {
  return (
    <>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" secureTextEntry />
      <FormikTextInput
        name="confirmPassword"
        placeholder="confirm password"
        secureTextEntry
      />

      <View style={myStyles.itemPadding}>
        <Button onPress={handleSubmit} title="Sign up"></Button>
      </View>
    </>
  );
};

export default SignUpForm;
