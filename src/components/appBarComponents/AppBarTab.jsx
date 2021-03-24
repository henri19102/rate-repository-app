import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  texts: {
    color: theme.colors.snow,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

const AppBarTab = ({ name }) => {
  return <Text style={styles.texts}>{name}</Text>;
};

export default AppBarTab;
