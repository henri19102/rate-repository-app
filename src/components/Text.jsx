import React from "react";
import { Text as NativeText } from "react-native";
import { myStyles } from "../styles/myStyles";

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    myStyles.text,
    color === "textSecondary" && myStyles.colorTextSecondary,
    color === "primary" && myStyles.colorPrimary,
    fontSize === "subheading" && myStyles.fontSizeSubheading,
    fontWeight === "bold" && myStyles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
