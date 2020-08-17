import React, { useState } from "react";
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

const next = (idx: number, dataLength: number, stateFunction: any) => {
    const nextIdx = ((idx + 1) * 6 >= dataLength) ? 0 : idx + 1;
    stateFunction(nextIdx);
};

export default function MainItemContainer({ width, data, children: title }: Props): JSX.Element {
    const dataLength = data.length;
    const [idx, setIdx] = useState(0);
    const displayedData = data.slice(idx * 6, (idx + 1) * 6);


    return (
        <div>
            <Wrapper>
                <h2>{title}</h2>
                <Goods>
                    {displayedData.map((oneData: Data, idx: number) =>
                        convertDataToMainItem({ ...oneData, width }, idx))}
                </Goods>
            </Wrapper>
            <ChangeItemsButton onClick={() => next(idx, dataLength, setIdx)} index={idx} lastIdx={dataLength / 6}>{title}</ChangeItemsButton>
        </div>
    );
}
