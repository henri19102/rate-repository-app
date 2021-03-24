import React from "react";
import Text from "../Text";
import { View, StyleSheet, Image } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
  },
  textContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  textPadding: {
    marginVertical: 3,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  languageStyle: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    color: theme.colors.snow,
    borderRadius: 5,
    marginVertical: 3,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

const RepositoryItemInfo = ({ item }) => {
  return (
    <View style={styles.infoContainer}>
      <Image
        style={styles.imageStyle}
        source={{ uri: `${item.ownerAvatarUrl}` }}
      ></Image>
      <View style={styles.textContainer}>
        <Text
          style={styles.textPadding}
          fontWeight="bold"
          fontSize="subheading"
        >
          {item.fullName}
        </Text>
        <Text style={styles.textPadding}>{item.description} </Text>
        <Text style={styles.languageStyle}>{item.language} </Text>
      </View>
    </View>
  );
};

export default RepositoryItemInfo;
