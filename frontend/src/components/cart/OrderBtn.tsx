import React from "react";
import style from "styled-components";
import { COLOR } from "../../constants/style";

type Props = {
  orderAction: () => void;
};

const BtnWrapper = style.div`
  width: 100%;
  padding: 15px;
  position: fixed;
  bottom: 80px;
`;

const Btn = style.button`
  width: 100%;
  border: 1px solid ${COLOR.YELLOW_1};
  background: ${COLOR.WHITE};
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
`;

const Count = style.div`
  width: 25px;
  height: 25px;
  background: ${COLOR.YELLOW_1};
  color: ${COLOR.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  margin-right: 10px;
`;

const Price = style.div`
  color: ${COLOR.BLACK};
`;

const OrderBtn = (props: Props): JSX.Element => {
  const { orderAction } = props;
  const count = 0;
  const totalPrice = 0;

  return (
    <BtnWrapper>
      <Btn onClick={orderAction}>
        <Count>{count}</Count>
        <Price>{totalPrice}원 배달 주문하기</Price>
      </Btn>
    </BtnWrapper>
  );
};

export default OrderBtn;
