import React from "react";
import styled from "styled-components";

import { COLOR, SVG } from "../../../constants/style";
// import Logo from '/asset/';
import { KEY_NAME } from "../../../constants/message";
import { useHistory } from "react-router-dom";

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

const getCategoryName = (mainCategory: string, subCategory: string): string => {
  if (subCategory) return KEY_NAME[mainCategory].subCategory[subCategory].name;
  return KEY_NAME[mainCategory]?.name;
};

const Header = ({ mainCategory, subCategory }: any) => {
  const categoryName = getCategoryName(mainCategory, subCategory);
  const history = useHistory();

  return (
    <Layer>
      <Item onClick={() => history.goBack()}>
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
