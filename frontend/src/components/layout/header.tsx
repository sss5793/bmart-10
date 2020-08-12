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

const Header = () => {
  return (
    <Layer>
      <div> 뒤로 </div>
      <div> 로고 </div>
      <div></div>
    </Layer>
  );
};

export default Header;
