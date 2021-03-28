import React from "react";
import { Button, View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";

const styles = StyleSheet.create({
  itemPadding: {
    marginVertical: 15,
  },
});

const SignInForm = ({ handleSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" secureTextEntry />
      <View style={styles.itemPadding}>
        <Button onPress={handleSubmit} title="Sign in"></Button>
      </View>
    </View>
  );
};

export default SignInForm;
