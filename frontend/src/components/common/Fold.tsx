import React, { useState } from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  padding: 20px;
  font-size: 1em;
  justify-content: space-between;
  background-color: #eee;
  border-top: 1px solid #d3cdcd;
  border-bottom: 1px solid #d3cdcd;
`;

const Body = styled.div`
  padding: 20px;
  & td {
    border: 1px solid #d3cdcd;
    padding: 15px;
    min-width: 8em;
    font-size: 0.8em;
    vertical-align: baseline;
  }
  & li {
    display: flex;
    justify-content: space-between;
  }
`;

function ArrowDown(): JSX.Element {
  return <i className="fa fa-chevron-down"></i>;
}

export default function ReturnExchangeInfo({
  style,
  title,
  children,
}: {
  style?: { [key: string]: string };
  title: string;
  children: React.ReactElement;
}): JSX.Element {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Header style={style} onClick={(): void => setToggle(!toggle)}>
        <span>{title}</span>
        <ArrowDown></ArrowDown>
      </Header>
      <Body style={{ display: (toggle && "none") || "block" }}>{children}</Body>
    </div>
  );
}
