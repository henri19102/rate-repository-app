import React from "react";
import { Alert } from "react-native";
import ReviewItem from "./ReviewItem";
import useDeleteReview from "../../hooks/useDeleteReview";

const UsersReviewItem = ({ review, refetch }) => {
  const [deleteReview] = useDeleteReview();

  const id = review.id;

  const onSubmit = async () => {
    try {
      const data = await deleteReview({ id });
      console.log(data);
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  const showAlert = () =>
    Alert.alert(
      "Delete review",
      "Are You sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => onSubmit(),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );

  return (
    <>
      <ReviewItem review={review} showAlert={showAlert} isUserView={true} />
    </>
  );
};

export default UsersReviewItem;
