import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

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
        <NavLink to='/'>홈</NavLink>
        <NavLink to='/search'>검색</NavLink>
        <NavLink to='/cart'>장바구니</NavLink>
        <NavLink to='/menu'>전체메뉴</NavLink>
    </Layer>
  );
};

export default Footer;
