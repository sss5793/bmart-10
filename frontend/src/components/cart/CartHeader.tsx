import React, { useState } from "react";
import style from "styled-components";

import { CheckBox } from "../common";

const HeaderWrapper = style.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleCheck = style.div`
  display: flex;
  align-items: center;
`;

const ToggleTitle = style.p`
  margin-left: 5px;
`;

const CartHeader = (): JSX.Element => {
  const [check, setCheck] = useState(false);
  const [toggleTitle, setToggleTitle] = useState("모두 선택");

  const onCheck = (): void => {
    setToggleTitle("선택 해제");
    if (check) setToggleTitle("모두 선택");
    setCheck((state) => !state);
  };

  return (
    <HeaderWrapper>
      <ToggleCheck onClick={onCheck}>
        <CheckBox isChecked={check} />
        <ToggleTitle>{toggleTitle}</ToggleTitle>
      </ToggleCheck>
      <p>선택 비우기</p>
    </HeaderWrapper>
  );
};

export default CartHeader;
