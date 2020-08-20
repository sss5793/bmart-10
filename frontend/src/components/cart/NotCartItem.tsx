import React from "react";
import style from "styled-components";

const NotCartItemWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: auto;
    height: auto;
    max-width: 375px;
    margin-top: 100px;
  }
`;

const Text = style.div`
  margin-top: 50px;
`;

const NotCartItem = (): JSX.Element => {
  return (
    <NotCartItemWrapper>
      <img src="/asset/images/cart_bear.png" />
      <Text>장바구니에 담긴 상품이 없습니다.</Text>
      <Text>상품을 담아주세요.</Text>
    </NotCartItemWrapper>
  );
};

export default NotCartItem;
