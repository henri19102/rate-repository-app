import React from "react";
import { View, Image } from "react-native";
import Text from "../Text";
import { myStyles } from "../../styles/myStyles";

const RepositoryItemInfo = ({ item }) => {
  return (
    <View style={myStyles.infoContainer}>
      <Image
        style={myStyles.imageStyle}
        source={{ uri: `${item.ownerAvatarUrl}` }}
      ></Image>
      <View style={myStyles.textContainer}>
        <Text
          style={myStyles.textPadding}
          fontWeight="bold"
          fontSize="subheading"
          testID="fullName"
        >
          {item.fullName}
        </Text>
        <Text testID="description" style={myStyles.textPadding}>
          {item.description}{" "}
        </Text>
        <Text testID="language" style={myStyles.languageStyle}>
          {item.language}{" "}
        </Text>
      </View>
    </View>
  );
};

export default RepositoryItemInfo;
