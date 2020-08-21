import React from "react";
import style from "styled-components";
import { useHistory } from "react-router-dom";
import { Layout, ShadowBar } from "../components/common";
import {
  OrderBtn,
  CartHeader,
  CartList,
  CartTotal,
  NotCartItem,
} from "../components/cart";
import { PopUpContext } from "../context";
import { MESSAGE } from "../constants/message";
import { CartItemType } from "../types/Cart";

const FakeComp = style.div`
  height: 80px;
`;

const Cart = (): JSX.Element => {
  // totalPrice, deliveryTips - context api
  // cartItemList - context api
  const storage: string | null = localStorage.getItem("cart_list");
  const data: Array<CartItemType> = JSON.parse(storage || "[]");
  // console.log(data);
  const isCart = data.length > 0 ? true : false; // 장바구니에 담긴 상품이 있는지 여부

  const history = useHistory();
  const dispatch = PopUpContext.usePopUpDispatch();

  const goLoginPage = (): void => {
    dispatch({ type: "POPUP_CLOSE" });
    history.push("/login");
  };

  const orderAction = (): void => {
    const token = localStorage.getItem("token");
    if (token) {
      // 구매하기
    } else {
      // 로그인 페이지로 유도
      dispatch({
        type: "POPUP_OPEN",
        payload: {
          content: MESSAGE.LOGIN_INDUCE,
          confirmAction: goLoginPage,
        },
      });
    }
  };

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
          <OrderBtn orderAction={orderAction} />
        </>
      ) : (
        <NotCartItem />
      )}
    </Layout>
  );
};

export default Cart;
