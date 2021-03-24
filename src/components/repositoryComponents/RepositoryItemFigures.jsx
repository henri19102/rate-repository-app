import React from "react";
import Text from "../Text";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  figuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },

  detailsContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
});

const RepositoryItemFigures = ({ item }) => {
  const checkIfThousand = (value) => {
    if (value >= 1000) {
      value = value * 0.001;
      return `${value.toFixed(1)}k`;
    }
    return value;
  };

  return (
    <View style={styles.figuresContainer}>
      <View style={styles.detailsContainer}>
        <Text fontWeight="bold">{checkIfThousand(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text fontWeight="bold">{checkIfThousand(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text fontWeight="bold">{checkIfThousand(item.reviewCount)}</Text>
        <Text>Review</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text fontWeight="bold">{checkIfThousand(item.ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemFigures;
