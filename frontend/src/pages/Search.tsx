import React from "react";
import { Layout } from "../components/common";

import SearchBar from "../components/search/Searchbar";
import History from "../components/search/History";

const Search = (): JSX.Element => {
  return (
    <Layout>
      <SearchBar />
      <History />
    </Layout>
  );
};

export default Search;
