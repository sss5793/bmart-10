import React from "react";

import styled from "styled-components";

type Props = {
  show: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Wrapper = styled.button<{ show: boolean }>`
  display: ${(props): string => (props.show ? "block" : "none")};
  background-color: transparent;
  border: none;

  width: 30px;
  height: 30px;

  position: absolute;
  right: 50px;

  font-size: 16px;
  color: #8b95a1;

  outline: none;
`;

export default function DeleteButton(props: Props): JSX.Element {
  return (
    <Wrapper onClick={props.onClick} show={props.show}>
      ╳
    </Wrapper>
  );
}
