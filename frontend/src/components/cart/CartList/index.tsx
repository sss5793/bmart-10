import React from "react";
import style from "styled-components";

import CartItem from "./CartItem";

const ListWrapper = style.div`
  width: 100%;
  padding: 15px;
`;

type Item = {
  goodId?: number;
  title: string;
  price: string;
  sale: string;
  src: string;
};

type Props = {
  data: Array<Item>;
};

const CartList = (props: Props): JSX.Element => {
  const { data } = props;

  return (
    <ListWrapper>
      {data.map((item, index) => (
        <CartItem key={index + item.title} {...item} />
      ))}
    </ListWrapper>
  );
};

export default CartList;
