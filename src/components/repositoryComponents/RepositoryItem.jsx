import React from "react";
import { View, Button } from "react-native";
import * as Linking from "expo-linking";
import { myStyles } from "../../styles/myStyles";
import RepositoryItemFigures from "./RepositoryItemFigures";
import RepositoryItemInfo from "./RepositoryItemInfo";

const RepositoryItem = ({ item, isSingleView }) => {
  const openUrl = () => {
    Linking.openURL(`${item.url}`);
  };

  return (
    <View style={myStyles.itemContainer}>
      <RepositoryItemInfo item={item} />
      <RepositoryItemFigures item={item} />
      {isSingleView === true && (
        <View style={myStyles.buttonStyle}>
          <Button onPress={openUrl} title="Open in GitHub"></Button>
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
