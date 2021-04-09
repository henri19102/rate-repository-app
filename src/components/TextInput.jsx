import React from "react";
import { TextInput as NativeTextInput } from "react-native";
import {myStyles} from "../styles/myStyles";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [myStyles.inputStyle, error && myStyles.inputError, style];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
