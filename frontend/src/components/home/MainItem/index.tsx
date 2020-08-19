import React from "react";
import styled from "styled-components";
import ItemImg from "./ItemImg";
import ItemContent from "./ItemContent";
import { ItemContext, ItemContextType } from "./ItemContext";

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
    <ItemContext.Provider value={{ width, ...props }}>
      <ItemArea style={{ width, wordBreak }}>
        <ItemImg></ItemImg>
        <ItemContent></ItemContent>
      </ItemArea>
    </ItemContext.Provider>
  );
}
