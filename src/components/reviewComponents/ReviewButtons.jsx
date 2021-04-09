import React from "react";
import { View, Button } from "react-native";
import { myStyles } from "../../styles/myStyles";
import theme from "../../styles/theme";

const ReviewButtons = ({ pushToRepositoryView, showAlert }) => {
  return (
    <View style={myStyles.buttonContainer}>
      <Button onPress={pushToRepositoryView} title="View Repository"></Button>
      <Button
        color={theme.colors.danger}
        title="Delete"
        onPress={showAlert}
      ></Button>
    </View>
  );
};

export default ReviewButtons;
