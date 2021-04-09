import React from "react";
import { View, ScrollView } from "react-native";
import { myStyles } from "../../styles/myStyles";
import AllAppBarTabs from "./AllAppBarTabs";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  return (
    <View style={myStyles.mainContainer}>
      <ScrollView horizontal>
        <AppBarTab name={"Repositories"} route={"/"} />
        <AllAppBarTabs />
      </ScrollView>
    </View>
  );
};

export default AppBar;
