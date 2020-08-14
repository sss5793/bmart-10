import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import MainItem from "../MainItem";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #000;

  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: calc(100% - 70px);
  margin: 10px 35px 10px 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type Props = {};

export default function Menus(props: Props): JSX.Element {
  return (
    <Wrapper>
      <Row>
        <MainItem></MainItem>
        <MainItem></MainItem>
      </Row>
      <Row>
        <MainItem></MainItem>
        <MainItem></MainItem>
      </Row>
    </Wrapper>
  );
}
