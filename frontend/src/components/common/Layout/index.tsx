import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overscroll-behavior-y: none;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Wrapper>
      <Header />
      <Section>{props.children}</Section>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
