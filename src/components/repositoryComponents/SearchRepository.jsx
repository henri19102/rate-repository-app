import React from "react";
import { Searchbar } from "react-native-paper";

const SearchRepository = ({ onChangeSearch, searchQuery }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchRepository;
