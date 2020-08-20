import React from "react";
import styled from "styled-components";

import { useSearchState } from "../../../contexts/SearchContext";

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  padding: 10px;

  width: 100%;

  background-color: #fff;
`;

export default function SearchBar(): JSX.Element {
  const state = useSearchState();

  console.log(state);
  return (
    <Wrapper>
      {state.searchResult.map((cur) => {
        return `${cur.name}, ${cur.amount}`;
      })}
    </Wrapper>
  );
}
