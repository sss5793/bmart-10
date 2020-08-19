import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 60px;
  z-index: 2000;

  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  right: 15px;

  background-color: #333a;

  border-radius: 10px;
  padding: 5px;
`;

const Text = styled.p`
  width: 10px;
  height: 10px;
  margin: 0 0.5px 0 0.5px;

  font-family: "굴림", Gulim;
  font-size: 10px;
  line-height: 10px;
  text-align: center;

  color: white;
  padding: 0;
`;

type Props = {
  observable: {
    arr: Array<React.Dispatch<React.SetStateAction<number>>>;
    trigger: (i: number) => void;
  };
  size: number;
};

export default function Indicators(props: Props): JSX.Element {
  const [index, setIndex] = useState(0);

  props.observable.arr.push(setIndex);

  return (
    <Wrapper>
      <Text>{index + 1}</Text>
      <Text>/</Text>
      <Text>{props.size}</Text>
    </Wrapper>
  );
}
