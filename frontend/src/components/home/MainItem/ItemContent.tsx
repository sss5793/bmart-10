import React, { useContext } from "react";
import styled from "styled-components";
import { ItemDispatch, ItemContextType } from './ItemContext';
import ItemPrice from './ItemPrice';

const MARGIN_TOP = "0.3em";

const ItemContentWrapper = styled.div`
    margin-top:${MARGIN_TOP};
`;

export default function ItemContent(): JSX.Element {
    const { fontSize, title }: ItemContextType = useContext(ItemDispatch);

    return (
        <ItemContentWrapper>
            <div style={{ fontSize }}>{title}</div>
            <ItemPrice></ItemPrice>
        </ItemContentWrapper>
    );
}
