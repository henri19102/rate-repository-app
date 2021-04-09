import React, { useState } from "react";
import { FlatList } from "react-native";
import { useDebounce } from "use-debounce";
import useRepositories from "../../hooks/useRepositories";
import SearchRepository from "./SearchRepository";
import ItemSeparator from "../ItemSeparator";
import RenderRepositoryItem from "./RenderRepositoryItem";
import SortRepositories from "./SortRepositories";

const RepositoryListContainer = () => {
  const [orderBy, setOrderBy] = useState("Latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [value] = useDebounce(searchQuery, 500);
  const onChangeSearch = (query) => setSearchQuery(query);

  const orderSelection = (searchKeyword) => {
    const reOrganizeRepos = {
      orderBy: "CREATED_AT",
      orderDirection: "DESC",
      searchKeyword: searchKeyword,
      first: 6,
    };
    switch (orderBy) {
      case "Latest":
        return reOrganizeRepos;
      case "Highest":
        reOrganizeRepos.orderBy = "RATING_AVERAGE";
        return reOrganizeRepos;
      case "Lowest":
        reOrganizeRepos.orderBy = "RATING_AVERAGE";
        reOrganizeRepos.orderDirection = "ASC";
        return reOrganizeRepos;
      default:
        return reOrganizeRepos;
    }
  };

  const { repositories, fetchMore } = useRepositories(
    orderSelection(searchQuery)
  );

  const onEndReach = () => {
    fetchMore();
  };

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      <SearchRepository onChangeSearch={onChangeSearch} searchQuery={value} />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(item) => <RenderRepositoryItem item={item.item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <SortRepositories setOrderBy={setOrderBy} orderBy={orderBy} />
        )}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default RepositoryListContainer;
