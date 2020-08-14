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

export default function MainItemContainer(props: any) {
    const title = props.children;
    const data = props.data;
    const width = props.width;

    return (
        <div>
            <Wrapper>
                <h2>{title}</h2>
                <Goods>
                    {
                        data.map((one: any, idx: number) => {
                            const { title, price, sale, src } = one;
                            return <MainItem key={idx + ""} title={title} price={price} sale={sale} width={width} src={src}></MainItem>;
                        })
                    }
                </Goods>
            </Wrapper>
            <ChangeItemsButton>{title}</ChangeItemsButton>
        </div>
    );
}