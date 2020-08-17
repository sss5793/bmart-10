import React from "react";
import styled from "styled-components";
import ItemImg from "./ItemImg";
import ItemContent from "./ItemContent";
import { ItemDispatch, ItemContextType } from "./ItemContext";

const DEFAULT_WIDTH = "107px";
const wordBreak = "keep-all";

const ItemArea = styled.div`
  margin-top: 15px;
`;

export default function MainItem({
  width = DEFAULT_WIDTH,
  ...props
}: ItemContextType): JSX.Element {
  return (
    <ItemDispatch.Provider value={{ width, ...props }}>
      <ItemArea style={{ width, wordBreak }}>
        <ItemImg></ItemImg>
        <ItemContent></ItemContent>
      </ItemArea>
    </ItemDispatch.Provider>
  );
}
