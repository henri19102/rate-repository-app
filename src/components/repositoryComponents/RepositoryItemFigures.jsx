import React from "react";
import { View } from "react-native";
import Text from "../Text";
import { myStyles } from "../../styles/myStyles";

export const checkIfThousand = (value) => {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : `${value}`;
};

const RepositoryItemFigures = ({ item }) => {
  return (
    <View style={myStyles.figuresContainer}>
      <View style={myStyles.detailsContainer}>
        <Text testID="stargazersCount" fontWeight="bold">
          {checkIfThousand(item.stargazersCount)}
        </Text>
        <Text>Stars</Text>
      </View>

      <View style={myStyles.detailsContainer}>
        <Text testID="forksCount" fontWeight="bold">
          {checkIfThousand(item.forksCount)}
        </Text>
        <Text>Forks</Text>
      </View>

      <View style={myStyles.detailsContainer}>
        <Text testID="reviewCount" fontWeight="bold">
          {checkIfThousand(item.reviewCount)}
        </Text>
        <Text>Review</Text>
      </View>

      <View style={myStyles.detailsContainer}>
        <Text testID="ratingAverage" fontWeight="bold">
          {checkIfThousand(item.ratingAverage)}
        </Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemFigures;
