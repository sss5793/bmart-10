import React, { Children } from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout = (props: { children: any }) => {
  return (
    <Layer>
      <Header />
      {props.children}
      <Footer />
    </Layer>
  );
};

export default Layout;
