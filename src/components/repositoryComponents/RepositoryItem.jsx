import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryItemFigures from "./RepositoryItemFigures";
import RepositoryItemInfo from "./RepositoryItemInfo";
import theme from '../../theme';


const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.colors.snow,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "column",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <RepositoryItemInfo item={item} />
      <RepositoryItemFigures item={item} />
    </View>
  );
};

export default RepositoryItem;
