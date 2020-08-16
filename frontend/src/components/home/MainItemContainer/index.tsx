import React from "react";
import styled from "styled-components";

import ChangeItemsButton from './ChangeItemsButton';
import MainItem from '../MainItem';

const Wrapper = styled.div`
    padding:25px 15px;
`;

const Goods = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

type Data = {
    title: string;
    price: string;
    sale: string;
    src: string;
};
type Props = {
    width?: string;
    data: Array<Data>;
    children: string;
};

const MAIN_ITEM_FONT_SIZE = "12px";

export default function MainItemContainer({ width, data, children }: Props): JSX.Element {
    const title = children;
    const convertDataToMainItem = ({ title, price, sale, src }: Data, idx: number): JSX.Element => (
        <MainItem
            key={idx + ""} title={title} price={price} fontSize={MAIN_ITEM_FONT_SIZE}
            sale={sale} width={width} src={src}></MainItem>
    );

    return (
        <div>
            <Wrapper>
                <h2>{title}</h2>
                <Goods>
                    {data.map(convertDataToMainItem)}
                </Goods>
            </Wrapper>
            <ChangeItemsButton>{title}</ChangeItemsButton>
        </div>
    );
}
