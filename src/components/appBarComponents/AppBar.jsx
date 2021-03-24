import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 0,
    paddingTop: 25,
    padding: 10,
    backgroundColor: theme.colors.dark,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab name={"Repositories"} />
        </Link>

        <Link to="/signin">
          <AppBarTab name={"Sign in"} />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
