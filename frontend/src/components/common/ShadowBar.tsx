import React from "react";
import style from "styled-components";

const Bar = style.div`
  width: 100%;
  height: 7px;
  background: #efefef;
  box-shadow: inset 0px 1px 3px #d2d2d2;
`;

const BarComp = (): JSX.Element => {
  return <Bar />;
};

export default BarComp;
