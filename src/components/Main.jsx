import React from "react";
import { View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import RepositoryListContainer from "./repositoryComponents/RepositoryListContainer";
import SingleRepository from "./repositoryComponents/SingleRepository";
import AppBar from "./appBarComponents/AppBar";
import SignIn from "./signInComponents/SignIn";
import SignUp from "./signUpComponents/SignUp";
import Review from "./reviewComponents/Review";
import MyReviews from "./reviewComponents/MyReviews";
import { myStyles } from "../styles/myStyles";

const Main = () => {
  return (
    <View style={myStyles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryListContainer />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/createreview" exact>
          <Review />
        </Route>
        <Route path="/reviews" exact>
          <MyReviews />
        </Route>
        <Route path="/:id" exact>
          <SingleRepository />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
