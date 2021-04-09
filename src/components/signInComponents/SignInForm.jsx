import React from "react";
import { Button, View } from "react-native";
import FormikTextInput from "../FormikTextInput";
import { myStyles } from "../../styles/myStyles";

const SignInForm = ({ handleSubmit }) => {
  return (
    <View>
      <FormikTextInput
        testID="username"
        name="username"
        placeholder="username"
      />
      <FormikTextInput
        testID="password"
        name="password"
        placeholder="password"
        secureTextEntry
      />
      <View style={myStyles.itemPadding}>
        <Button testID="signIn" onPress={handleSubmit} title="Sign in"></Button>
      </View>
    </View>
  );
};

export default SignInForm;
