import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  inputStyle: {
    padding: 20,
    borderColor: theme.colors.grey,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    marginVertical: 10,
  },
  inputError: {
    borderColor: theme.colors.danger,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.inputStyle, error && styles.inputError, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
