import React from "react";
import { Layout } from "../components/common";

import SearchBar from "../components/search/Searchbar";

const Search = (): JSX.Element => {
  return (
    <Layout>
      <SearchBar></SearchBar>
      검색 페이지
    </Layout>
  );
};

export default Search;
