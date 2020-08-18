import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;
  border: none;
`;

type Props = {
  onClick: () => void;
  index: number;
  children: string;
  lastIdx: number;
};

export default function ChangeItemsButton({
  onClick,
  index,
  children: title,
  lastIdx,
}: Props): JSX.Element {
  return (
    <Button onClick={onClick}>
      <i className="fa fa-refresh fa-spin"></i>
      <span>&nbsp;{title}</span>
      <span>
        &nbsp;다른 상품 보기 {index + 1}/{lastIdx}
      </span>
    </Button>
  );
}
