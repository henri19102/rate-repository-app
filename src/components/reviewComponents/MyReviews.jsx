import React from "react";
import { FlatList } from "react-native";
import useUsersReviews from "../../hooks/useUsersReviews";
import ItemSeparator from "../ItemSeparator";
import UsersReviewItem from "./UsersReviewItem";

const MyReviews = () => {
  const { reviews, refetch } = useUsersReviews({ includeReviews: true });

  const reviewItems = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewItems}
      renderItem={({ item }) => (
        <UsersReviewItem review={item} refetch={refetch} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
