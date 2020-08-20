import React from "react";
import styled from "styled-components";
import { History } from "history";
import { KEY_NAME } from "../../constants/message";
import { useHistory } from "react-router-dom";

const Menu = styled.div`
  width: 50%;
  padding: 1em;
  &:not(:last-child) {
    border-right: 1px solid #f6f6f6;
  }
`;

const RowContainer = styled.div``;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #f6f6f6;
`;
const SubCategory = styled.div``;

const categoryGo = (history: History, baseUrl: string, name: string): void => {
  if (name === "") return;
  history.push(`${baseUrl}/${name}`);
};

function makeRow(
  menuData: Array<string>,
  baseUrl: string,
  mainCategoryName: string,
  idx: number
): JSX.Element {
  const history = useHistory();
  return (
    <RowContainer key={idx + ""}>
      <Row key={idx + ""}>
        {menuData.map((one: string, idx: number) => (
          <Menu
            key={idx + ""}
            onClick={(): void => categoryGo(history, baseUrl, one)}
          >
            {/* {one} */}
            {one && KEY_NAME[mainCategoryName].subCategory[one].name}
          </Menu>
        ))}
      </Row>
      <SubCategory></SubCategory>
    </RowContainer>
  );
}

function splitArr(arr: Array<string>, colLength: number): Array<Array<string>> {
  let lastRow: Array<string> = [];
  const result: Array<Array<string>> = [];

  arr.forEach((one: string, idx: number) => {
    idx % colLength === 0 && result.push((lastRow = []));
    lastRow.push(one);
  });

  while (lastRow.length < colLength) lastRow.push("");

  return result;
}
type CategoryMenuProps = {
  baseUrl: string;
  mainCategoryName: string;
  categoryData: Array<string>;
  col?: number;
};

export default function CategoryMenu({
  baseUrl,
  mainCategoryName,
  categoryData,
  col = 2,
}: CategoryMenuProps): JSX.Element {
  const arr = splitArr(categoryData, col);
  return (
    <div>
      {arr.map(
        (one: Array<string>, idx: number): JSX.Element =>
          makeRow(one, baseUrl, mainCategoryName, idx)
      )}
    </div>
  );
}
