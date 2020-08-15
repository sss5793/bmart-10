import React from "react";
import styled from "styled-components";

type Props = {
    fontSize?: string;
    price?: string;
    sale?: string;
};

const Sale = styled.span`
    font-weight:800;
    color: #f01616;
`;

const Price = styled.span`
    padding-left: 3px;
    font-weight:500;
    color:#bbb;
    text-decoration:line-through;
`;

const DiscountedPrice = styled.div`
    font-weight:800;
`;

const FONT_SIZE = "10px";
const MARGIN_TOP = '-5px';

const getSaleValue = (sale: string): number => {
    const saleValue = parseInt(sale);
    return (Number.isNaN(saleValue)) ? 0 : saleValue;
};

const getDiscountPrice = (price: string, saleValue: number): number => {
    const result = parseInt(price) * (1 - (saleValue / 100));
    return parseInt(result + "");    // 소수값 제거
};

export default function ItemPrice({ fontSize = FONT_SIZE, price = '0', sale = '0%' }: Props): JSX.Element {
    const saleValue = getSaleValue(sale);
    const discountedPrice = getDiscountPrice(price, saleValue);

    return (
        <div>
            {saleValue > 0 &&
                (<div style={{ marginTop: MARGIN_TOP }}>
                    <Sale style={{ fontSize }}>{sale}</Sale>
                    <Price style={{ fontSize }}>{price}원</Price>
                </div>)
            }
            <DiscountedPrice style={{ fontSize }}>{discountedPrice}원</DiscountedPrice>
        </div>
    );
}
