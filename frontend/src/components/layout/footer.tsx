import React from 'react';
import styled from 'styled-components';

import { COLOR } from '../../constants';

const Layer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${COLOR.GREEN_1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Footer = () => {
  return (
    <Layer>
      <div>홈</div>
      <div>검색</div>
      <div>장바구니</div>
      <div>전체메뉴</div>
    </Layer>
  );
};

export default Footer;
