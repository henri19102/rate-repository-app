import React from "react";
import { useQuery, useApolloClient } from "@apollo/client";
import { AUTHORIZED_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";
import AppBarTab from "./AppBarTab";

const AllAppBarTabs = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data } = useQuery(AUTHORIZED_USER);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  if (data?.authorizedUser) {
    return (
      <>
        <AppBarTab name={"Create review"} route={"/createreview"} />
        <AppBarTab name={"My reviews"} route={"/reviews"} />
        <AppBarTab signOut={signOut} name={"Sign out"} route={"/"} />
      </>
    );
  }
  return (
    <>
      <AppBarTab name={"Sign in"} route={"/signin"} />
      <AppBarTab name={"Sign up"} route={"/signup"} />
    </>
  );
};

export default AllAppBarTabs;
