import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;

const Text = styled.div`
  color: #000;
  font-size: 20px;
`;

type Props = {
  observable: {
    callbacks: Function[];
    trigger: (height: number) => void;
  };
};

export default function PullTop(props: Props): JSX.Element {
  const [height, setHeight] = useState(0);

  props.observable.callbacks.push(setHeight);

  return (
    <Wrapper style={{ height: Math.round(height) }}>
      <Text>땡겨도 아무것도 없어요</Text>
    </Wrapper>
  );
}
