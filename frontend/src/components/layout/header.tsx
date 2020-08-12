import React from 'react';
import styled from 'styled-components';

import { COLOR, SVG } from '../../constants';
import Logo from './logo.png';

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

const Header = () => {
  return (
    <Layer>
      <Item>
          <svg width="36px" height="36px">
              <path fill={COLOR.WHITE} d={SVG.ARROW_BACK}/>
          </svg>
      </Item>
      <div>
          <img src={Logo} width={'60px'}/>
      </div>
      <Item></Item>
    </Layer>
  );
};

export default Header;
