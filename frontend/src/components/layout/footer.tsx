import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import Svg from '../svg';

import {COLOR, SVG} from '../../constants';

const Layer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${COLOR.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid ${COLOR.GREY_1};
  
  .nav {
    color: ${COLOR.GREY_2};
    text-decoration: none;
    path {
        fill: ${COLOR.GREY_2};
    }
  }
  .nav_selected {
    color: ${COLOR.GREEN_1};
    path {
        fill: ${COLOR.GREEN_1};
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const navList = [
    {
        path: '/',
        name: '홈',
        svg: SVG.HOME,
    },
    {
        path: '/search',
        name: '검색',
        svg: SVG.SEARCH,
    },
    {
        path: '/cart',
        name: '장바구니',
        svg: SVG.CART,
    },
    {
        path: '/menu',
        name: '전체메뉴',
        svg: SVG.MENU,
    },
];

const NavItem = (props: { path: string; name: string; svg: string }) => {
    const { path, name, svg } = props;
    return(
        <NavLink exact to={path} activeClassName="nav_selected" className="nav">
            <Item>
                <Svg size={'36'} fill={COLOR.GREY_2} path={svg}/>
                <p>{name}</p>
            </Item>
        </NavLink>
    )
};

const Footer = () => {
  return (
    <Layer>
        {
            navList.map((item) => <NavItem key={item.path} {...item}/>)
        }
    </Layer>
  );
};

export default Footer;
