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
  position: relative;
  overflow: hidden;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

type Props = {
  mainCategory?: string;
  subCategory?: string;
  children?: React.ReactNode;
};

const Layout = ({
  mainCategory = "",
  subCategory,
  children,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <Header mainCategory={mainCategory} subCategory={subCategory} />
      <Section>{children}</Section>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
