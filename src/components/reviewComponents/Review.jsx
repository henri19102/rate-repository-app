import React from "react";
import ReviewFormContainer from "./ReviewFormContainer";
import useReviewSubmit from "../../hooks/useReviewSubmit";
import { useHistory } from "react-router-native";

const Review = () => {
  const [createReview] = useReviewSubmit();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, stringRating, text } = values;

    const rating = Number(stringRating);

    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      console.log(data);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default Review;
