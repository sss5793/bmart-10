import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

import { HEADER, FOOTER } from "../../../constants/layout";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overscroll-behavior-y: none;
`;

const Section = styled.div`
  width: 100%;
  margin: ${HEADER.SIZE}px 0 ${FOOTER.SIZE}px 0;
`;

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Section>{props.children}</Section>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
