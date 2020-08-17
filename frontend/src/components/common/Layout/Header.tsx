import React from "react";
import styled from "styled-components";

import { COLOR, SVG } from "../../../constants/style";
// import Logo from '/asset/';
import { KEY_NAME } from "../../../constants/message";

const Layer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${COLOR.GREEN_1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Item = styled.div`
  width: 36px;
`;

const Title = styled.h2`
  color: #fff;
`;

const Header = (props: any) => {
  const categoryKey = props.categoryKey;
  const categoryName = KEY_NAME[categoryKey]?.name;

  return (
    <Layer>
      <Item>
        <svg width={36} height="36px">
          <path fill={COLOR.WHITE} d={SVG.ARROW_BACK} />
        </svg>
      </Item>
      <div>
        {categoryName ? (
          <Title>{categoryName}</Title>
        ) : (
          <img src="/asset/images/logo.png" width={"60px"} />
        )}
      </div>
      <Item></Item>
    </Layer>
  );
};

export default Header;
