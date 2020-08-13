import React from "react";
import styled from "styled-components";

import ItemTitle from './ItemTitle';
import ItemPrice from './ItemPrice';

export default function ItemContent(props: any) {
    const { price, sale, title } = props;
    return (
        <div>
            <ItemTitle>{title}</ItemTitle>
            <ItemPrice price={price} sale={sale}></ItemPrice>
        </div>
    );
}