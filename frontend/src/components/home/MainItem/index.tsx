import React from 'react';
import styled from 'styled-components';

import ItemImg from './ItemImg';
import ItemContent from './ItemContent';

type Props = {
    title: string;
    price: string;
    sale: string;
    width?: string;
    src: string;
    fontSize: string;
}

const ItemArea = styled.div`
    margin-top:15px;
`;

export default function MainItem({ title, price, sale, width, src, fontSize }: Props): JSX.Element {

    return (
        <ItemArea>
            <ItemImg width={width} src={src}></ItemImg>
            <ItemContent title={title} price={price} sale={sale} fontSize={fontSize}></ItemContent>
        </ItemArea >
    );
}