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
    width?: string;
};
type Props = {
    width?: string;
    data: Array<Data>;
    children: string;
};

const MAIN_ITEM_FONT_SIZE = "12px";

const convertDataToMainItem = ({ title, price, sale, src, width }: Data, idx: number): JSX.Element => (
    <MainItem
        key={idx + ""} title={title} price={price} fontSize={MAIN_ITEM_FONT_SIZE}
        sale={sale} width={width} src={src}></MainItem>
);

export default function MainItemContainer({ width, data, children: title }: Props): JSX.Element {

    return (
        <div>
            <Wrapper>
                <h2>{title}</h2>
                <Goods>
                    {data.map((oneData: Data, idx: number) =>
                        convertDataToMainItem({ ...oneData, width }, idx))}
                </Goods>
            </Wrapper>
            <ChangeItemsButton>{title}</ChangeItemsButton>
        </div>
    );
}
