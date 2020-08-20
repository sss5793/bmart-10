import React, { useState } from "react";
import style from "styled-components";

import { COLOR } from "../../../constants/style";
import { CheckBox } from "../../common";

type Item = {
  goodId?: number;
  title: string;
  price: string;
  sale: string;
  src: string;
};

const ItemWrapper = style.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const TitleWrapper = style.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckBoxWrapper = style.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    margin-left: 5px;
    font-weight: 700;
  }
`;

const DeleteBtn = style.div`
  color: ${COLOR.BLUE}
`;

const ContentWrapper = style.div`
  display: flex;
  margin-top: 15px;
`;

const ImgWrapper = style.div`
  display: flex;

  > img {
    width: 100px;
    height: 100px;
  }
`;

const PriceWrapper = style.div`
  display: flex;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: space-between;
`;

const Price = style.div`
  display: flex;
  color: ${COLOR.GREY_2};
  margin-right: 5px;
`;

const SaleWrapper = style.div`
  display: flex;
  margin-top: 5px;
`;

const Sale = style.div`
  display: flex;
`;

const ChangeCounter = style.div`
  display: flex;
  border: 1px solid grey;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
  width: 7rem;
`;

const CounterItem = style.div`
  display: flex;
  align-items: center;
`;

const CartItem = (props: Item): JSX.Element => {
  const { title, price, sale, src } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [cnt, setCount] = useState(0);

  const percent: number = parseInt(sale) || 0;

  const onChecked = (): void => {
    setIsChecked((state) => !state);
  };

  const minusAction = (): void => {
    if (cnt < 1) return;
    setCount((state) => state - 1);
  };

  const plusAction = (): void => {
    setCount((state) => state + 1);
  };

  const salePrice =
    parseInt(price) - Math.round(parseInt(price) * (percent * 0.01));

  return (
    <ItemWrapper>
      <TitleWrapper>
        <CheckBoxWrapper onClick={onChecked}>
          <CheckBox isChecked={isChecked} />
          <p>{title}</p>
        </CheckBoxWrapper>
        <DeleteBtn>삭제</DeleteBtn>
      </TitleWrapper>
      <ContentWrapper>
        <ImgWrapper>
          <img src={src} />
        </ImgWrapper>
        <PriceWrapper>
          <div>
            <Price>({price}원)</Price>
            <SaleWrapper>
              {percent !== 0 && (
                <Price style={{ textDecoration: "line-through" }}>
                  {price}원
                </Price>
              )}
              <Sale>{salePrice}원</Sale>
            </SaleWrapper>
          </div>
          <ChangeCounter>
            <CounterItem onClick={minusAction}>ㅡ</CounterItem>
            <CounterItem>{cnt}</CounterItem>
            <CounterItem onClick={plusAction}>+</CounterItem>
          </ChangeCounter>
        </PriceWrapper>
      </ContentWrapper>
    </ItemWrapper>
  );
};

CartItem.defaultProps = {
  goodId: 0,
  title: "",
  price: 0,
  sale: 0,
  src: "string",
};

export default CartItem;
