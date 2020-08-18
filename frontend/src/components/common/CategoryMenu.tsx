import React from "react";
import styled from "styled-components";
import { KEY_NAME } from "../../constants/message";
import { Link, useHistory } from "react-router-dom";

const Menu = styled.div`
  width: 50%;
  line-height: 2em;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  text-align: center;
`;

const categoryGo = (history: any, name: string) => {
  if (name === "") return;
  history.push(`/category/${name}`);
};

function makeRow(menuData: Array<string>, idx: any): JSX.Element {
  const history = useHistory();
  return (
    <Row style={{ display: "flex" }} key={idx + ""}>
      {menuData.map((one: any, idx: number) => (
        <Menu key={one + idx} onClick={() => categoryGo(history, one)}>
          {one}
        </Menu>
      ))}
    </Row>
  );
}

function splitArr(arr: Array<any>, colLength: number): Array<Array<any>> {
  let lastRow: Array<any> = [];
  const result: Array<Array<any>> = [lastRow];

  arr.forEach((one: any, idx: number) => {
    lastRow.push(one);
    (idx + 1) % colLength === 0 && result.push((lastRow = []));
  });

  while (lastRow.length < colLength) lastRow.push("");

  return result;
}

export default function CategoryMenu({
  categoryData,
  col = 2,
}: any): JSX.Element {
  const arr = splitArr(categoryData, col);
  return <div>{arr.map(makeRow)}</div>;
}
