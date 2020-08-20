import React from "react";
import { Layout } from "../components/common";

import SearchBar from "../components/search/Searchbar";
import History from "../components/search/History";
import Result from "../components/search/Result";

import { SearchProvider } from "../contexts/SearchContext";

const Search = (): JSX.Element => {
  return (
    <Layout>
      <SearchProvider>
        <SearchBar />
        <History />
        <Result />
      </SearchProvider>
    </Layout>
  );
};

export default Search;
