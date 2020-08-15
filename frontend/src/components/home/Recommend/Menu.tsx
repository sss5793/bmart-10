import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  border-radius: 2rem;

  text-overflow: ellipsis;
  white-space: nowrap;

  color: #333;
  font-size: 1rem;
  height: 30px;
  line-height: 10px;

  padding: 10px 20px 10px 20px;
  margin: 0 10px 0 10px;

  &.active {
    color: #fff;
    background-color: #000;
  }
`;

type Props = {
  menu: string;
  observable: {
    map: Map<string, React.Dispatch<React.SetStateAction<boolean>>>;
    trigger: (key: string) => void;
    lastTarget: string;
  };
};

export default function Section(props: Props): JSX.Element {
  const [active, setActive] = useState(false);

  props.observable.map.set(props.menu, setActive);

  return <Wrapper className={active ? "active" : "'"}>{props.menu}</Wrapper>;
}
