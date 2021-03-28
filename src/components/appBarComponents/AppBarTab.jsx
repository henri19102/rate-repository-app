import React from "react";
import { StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  texts: {
    color: theme.colors.snow,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

const AppBarTab = ({ name, route, signOut }) => {
  return (
    <Link onPress={signOut} to={route}>
      <Text style={styles.texts}>{name}</Text>
    </Link>
  );
};

export default AppBarTab;
