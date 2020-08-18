import React, { useContext } from "react";
import styled from "styled-components";
import { ItemDispatch, ItemContextType } from "./ItemContext";

type ValueType = {
  fontSize?: string;
  price?: string;
  sale?: string;
  saleValue?: number;
  discountedPrice?: number;
};

const DEFAULT_PRICE = "0";
const DEFAULT_SALE = "0%";

const FONT_SIZE = "10px";
const MARGIN_TOP = "-5px";

const Sale = styled.span`
  font-weight: 800;
  color: #f01616;
`;

const Price = styled.span`
  padding-left: 3px;
  font-weight: 500;
  color: #bbb;
  text-decoration: line-through;
`;

const DiscountedPrice = styled.div`
  font-weight: 800;
`;

const getSaleValue = (sale: string): number => {
  const saleValue = parseInt(sale);
  return Number.isNaN(saleValue) ? 0 : saleValue;
};

const getDiscountPrice = (price: string, saleValue: number): number => {
  const result = parseInt(price) * (1 - saleValue / 100);
  return parseInt(result + ""); // 소수값 제거
};

const getValues = ({
  fontSize = FONT_SIZE,
  price = DEFAULT_PRICE,
  sale = DEFAULT_SALE,
}: ItemContextType): ValueType => {
  const saleValue: number = getSaleValue(sale);
  const discountedPrice = getDiscountPrice(price, saleValue);

  return { fontSize, price, sale, saleValue, discountedPrice };
};

export default function ItemPrice(): JSX.Element {
  const {
    fontSize,
    price,
    sale,
    saleValue = 0,
    discountedPrice,
  }: ValueType = getValues(useContext(ItemDispatch));

  return (
    <div>
      {saleValue > 0 && (
        <div style={{ marginTop: MARGIN_TOP }}>
          <Sale style={{ fontSize }}>{sale}</Sale>
          <Price style={{ fontSize }}>{price}원</Price>
        </div>
      )}
      <DiscountedPrice style={{ fontSize }}>
        {discountedPrice}원
      </DiscountedPrice>
    </div>
  );
}
