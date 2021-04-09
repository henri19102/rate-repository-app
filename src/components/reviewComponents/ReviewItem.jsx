import React from "react";
import { View } from "react-native";
import { myStyles } from "../../styles/myStyles";
import Text from "../Text";
import format from "date-fns/format";
import { useHistory } from "react-router-native";
import ReviewButtons from "./ReviewButtons";

const ReviewItem = ({ review, showAlert, isUserView }) => {
  const history = useHistory();
  const formattedDate = format(new Date(review.createdAt), "dd.MM.yyyy");

  const pushToRepositoryView = () => history.push(`/${review.repositoryId}`);

  return (
    <View style={myStyles.itemContainer}>
      <View style={myStyles.infoContainer}>
        <Text style={myStyles.circle}>{review.rating}</Text>
        <View style={myStyles.textContainer}>
          <Text
            style={myStyles.textPadding}
            fontWeight="bold"
            fontSize="subheading"
          >
            {review.user?.username}
          </Text>
          <Text style={myStyles.textPadding}>{formattedDate}</Text>
          <Text style={myStyles.textStyle}>{review.text}</Text>
        </View>
      </View>
      {isUserView === true && (
        <ReviewButtons
          pushToRepositoryView={pushToRepositoryView}
          showAlert={showAlert}
        />
      )}
    </View>
  );
};

export default ReviewItem;
