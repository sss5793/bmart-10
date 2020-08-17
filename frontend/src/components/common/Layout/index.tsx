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
  const { mainCategory, subCategory } = props;
  return (
    <Wrapper>
      <Header mainCategory={mainCategory} subCategory={subCategory} />
      <Section>{props.children}</Section>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
