import React from "react";
import styled from "styled-components";

import ItemPrice from './ItemPrice';

type Props = {
    price: string;
    sale: string;
    title: string;
    fontSize: string;
}

const ItemContentWrapper = styled.div`
    margin-top:0.3em;
`;

export default function ItemContent({ price, sale, title, fontSize }: Props): JSX.Element {

    return (
        <ItemContentWrapper>
            <div style={{ fontSize }}>{title}</div>
            <ItemPrice price={price} sale={sale} fontSize={fontSize}></ItemPrice>
        </ItemContentWrapper>
    );
}