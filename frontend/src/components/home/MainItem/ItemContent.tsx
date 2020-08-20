import React, { useContext } from "react";
import styled from "styled-components";
import { ItemContext, ItemContextType } from "./ItemContext";
import ItemPrice from "./ItemPrice";

const MARGIN_TOP = "0.3em";

const Wrapper = styled.div`
  margin-top: ${MARGIN_TOP};
`;

const ItemTitle = styled.div`
  white-space: break-spaces;
`;

function ItemContentWrapper({
  fontSize,
  padding,
  children,
}: ItemContextType): JSX.Element {
  return <Wrapper style={{ padding, fontSize }}>{children}</Wrapper>;
}

export default function ItemContent(): JSX.Element {
  const { title, padding, fontSize }: ItemContextType = useContext(ItemContext);
  return (
    <ItemContentWrapper padding={padding} fontSize={fontSize}>
      <>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrice></ItemPrice>
      </>
    </ItemContentWrapper>
  );
}
