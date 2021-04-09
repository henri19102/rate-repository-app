import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import { myStyles } from "../../styles/myStyles";

const AppBarTab = ({ name, route, signOut }) => {
  const history = useHistory();

  const changePage = () => {
    if (signOut) {
      signOut();
    }
    history.push(`${route}`);
  };

  return (
    <>
      <TouchableOpacity onPress={changePage}>
        <Text style={myStyles.texts}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};

export default AppBarTab;
