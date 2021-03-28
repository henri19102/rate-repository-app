import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useQuery, useApolloClient } from "@apollo/client";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";
import { AUTHORIZED_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";

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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data } = useQuery(AUTHORIZED_USER);
  console.log(data?.authorizedUser);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name={"Repositories"} route={"/"} />
        {data?.authorizedUser === null ? (
          <AppBarTab name={"Sign in"} route={"/signin"} />
        ) : (
          <AppBarTab signOut={signOut} name={"Sign out"} route={"/"} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
