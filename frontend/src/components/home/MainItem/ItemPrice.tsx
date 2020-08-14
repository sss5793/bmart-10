import React from "react";
import styled from "styled-components";

const Sale = styled.span`
    font-weight:800;
    color: #f01616;
    font-size: 10px;
`;

const Price = styled.span`
    padding-left: 3px;
    font-weight:500;
    color:#bbb;
    text-decoration:line-through;
    font-size:10px;
`;

const DiscountedPrice = styled.div`
    font-size:10px;
    font-weight:800;
`;

export default function ItemPrice(props: any): JSX.Element {
    const price = parseInt(props.price);
    const sale = parseInt(props.sale) || 0;
    const dicountedPrice = price * (1 - (sale / 100));

    return (
        <div>
            {
                sale > 0 &&
                (<p>
                    <Sale>{sale}%</Sale>
                    <Price>{price}원</Price>
                </p>)
            }
            <DiscountedPrice>{dicountedPrice | 0}원</DiscountedPrice>
        </div>
    );
}