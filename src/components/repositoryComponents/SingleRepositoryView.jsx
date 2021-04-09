import React from "react";
import { View } from "react-native";
import { myStyles } from "../../styles/myStyles";
import Text from "../Text";
import RepositoryItem from "./RepositoryItem";

const SingleRepositoryView = ({ repository, loading }) => {
  if (loading) {
    return <Text>loading...</Text>;
  }
  return (
    <View style={myStyles.itemSeparator}>
      <RepositoryItem item={repository} isSingleView={true} />
    </View>
  );
};

export default SingleRepositoryView;
