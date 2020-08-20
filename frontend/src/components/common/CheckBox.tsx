import React from "react";
import style from "styled-components";

import { SVG, COLOR } from "../../constants/style";
import Svg from "./Svg";

type Props = {
  isChecked?: boolean;
  onClick?: () => void;
};

const Wrapper = style.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckBox = (props: Props): JSX.Element => {
  const { isChecked, onClick } = props;
  const fill = isChecked ? COLOR.GREEN_1 : COLOR.GREY_2;
  return (
    <Wrapper onClick={onClick}>
      <Svg path={SVG.CHECKBOX} size={25} fill={fill} />
    </Wrapper>
  );
};

CheckBox.defaultProps = {
  isChecked: false,
  onClick: null,
};

export default CheckBox;
