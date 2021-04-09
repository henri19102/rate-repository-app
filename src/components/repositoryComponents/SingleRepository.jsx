import React from "react";
import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";
import SingleRepositoryView from "./SingleRepositoryView";
import ItemSeparator from "../ItemSeparator";
import ReviewItem from "../reviewComponents/ReviewItem";

const SingleRepository = () => {
  const { id } = useParams();

  const { repository, loading, fetchMore } = useRepository({
    id: id,
    first: 6,
  });

  const onEndReach = () => {
    fetchMore();
  };

  const reviewItems = repository?.reviews
    ? repository?.reviews.edges.map((edge) => edge.node)
    : [];

  const repo = repository ? repository : {};

  return (
    <FlatList
      data={reviewItems}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <SingleRepositoryView repository={repo} loading={loading} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
