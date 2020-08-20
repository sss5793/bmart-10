import React from "react";
import style from "styled-components";
import { Layout, ShadowBar } from "../components/common";
import {
  OrderBtn,
  CartHeader,
  CartList,
  CartTotal,
  NotCartItem,
} from "../components/cart";
import { getItems } from "../mock";

const FakeComp = style.div`
  height: 80px;
`;

const Cart = (): JSX.Element => {
  const isCart = false; // 장바구니에 담긴 상품이 있는지 여부
  // totalPrice, deliveryTips - context api
  // cartItemList - context api
  const data = getItems(3);

  return (
    <Layout>
      {isCart ? (
        <>
          <CartHeader />
          <ShadowBar />
          <CartList data={data} />
          <ShadowBar />
          <CartTotal />
          <FakeComp />
          <OrderBtn />
        </>
      ) : (
        <NotCartItem />
      )}
    </Layout>
  );
};

export default Cart;
