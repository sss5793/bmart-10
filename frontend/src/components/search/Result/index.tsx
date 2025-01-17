import React from "react";
import styled from "styled-components";

import { useSearchState } from "../../../contexts/SearchContext";

import GoodInformation from "./GoodInformation";

const Wrapper = styled.div`
  z-index: 1000;
  padding: 10px;

  width: 100%;

  overflow-y: scroll;
`;

export default function SearchBar(): JSX.Element {
  const state = useSearchState();
  return (
    <Wrapper>
      {state.searchResult.map((cur, index) => {
        return (
          <GoodInformation
            key={`${cur.name}/${index}`}
            title={cur.name}
            price={cur.cost}
            imageURL={cur.imageUrl}
          />
        );
      })}
    </Wrapper>
  );
}
