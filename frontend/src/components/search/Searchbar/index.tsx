import React, { useState } from "react";
import styled from "styled-components";

import FixedBox from "./FixedBox";
import Input from "./Input";
import SearchIcon from "./SeachIcon";
import DeleteButton from "./DeleteButton";

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  padding: 10px;

  width: 100%;

  background-color: #fff;
`;

export default function SearchBar(): JSX.Element {
  const [showDelete, setShowDelete] = useState(false);

  function updateFilter(event: React.KeyboardEvent<HTMLInputElement>): void {
    const filter = (event.target as HTMLInputElement).value;

    if (filter.length > 0) {
      setShowDelete(true);
    } else {
      setShowDelete(false);
    }
  }

  function deleteFilter(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const input = (event.target as HTMLInputElement).parentNode?.querySelector(
      "input"
    );

    if (input) {
      input.value = "";
    }

    setShowDelete(false);
  }

  return (
    <Wrapper>
      <FixedBox>
        <SearchIcon />
        <Input placeholder="상품 검색" onKeyUp={updateFilter} />
        <DeleteButton onClick={deleteFilter} show={showDelete} />
      </FixedBox>
    </Wrapper>
  );
}
