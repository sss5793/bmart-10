import React from "react";
import styled from "styled-components";

import HistoryText from "./HistoryText";

const Wrapper = styled.div`
  margin-top: 80px;
`;

export default function SearchBar(): JSX.Element {
  return (
    <Wrapper>
      <HistoryText>더미 검색 1</HistoryText>
      <HistoryText>더미 검색 2</HistoryText>
    </Wrapper>
  );
}
