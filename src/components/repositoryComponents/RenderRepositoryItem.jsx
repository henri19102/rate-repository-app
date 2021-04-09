import React from "react";
import { TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import RepositoryItem from "./RepositoryItem";

const RenderRepositoryItem = ({ item }) => {
  const history = useHistory();

  return (
    <TouchableOpacity onPress={() => history.push(`/${item.id}`)}>
      <RepositoryItem item={item} isSingleView={false} />
    </TouchableOpacity>
  );
};

export default RenderRepositoryItem;
