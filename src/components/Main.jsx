import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import RepositoryList from "./repositoryComponents/RepositoryList";
import AppBar from "./appBarComponents/AppBar";
import SignIn from "./signInComponents/SignIn";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.grey,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
