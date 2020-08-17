import React, { Children } from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Header categoryKey={props.categoryKey} />
      <Section>{props.children}</Section>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
