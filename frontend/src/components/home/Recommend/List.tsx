import React, { UIEvent } from "react";
import Flicking from "@egjs/react-flicking";
import styled from "styled-components";

import Section from "./Section";

const Wrapper = styled.div`
  width: 100%;
  overflow-y: scroll;

  height: calc(100vh - 200px);
  /* height: 318px; */
`;

type Props = {
  store: {
    flicking: Flicking | undefined;
  };
  menus: Array<string>;
};

export default function Menus(props: Props): JSX.Element {
  return (
    <Wrapper
      onScroll={(
        e: React.UIEvent<HTMLDivElement, globalThis.UIEvent>
      ): void => {
        const { scrollTop } = e.target as HTMLDivElement;

        if (props.store.flicking) {
          props.store.flicking.moveTo(Math.floor(scrollTop / 318), 500);
        }
      }}
    >
      {props.menus.map((menu, index) => (
        <Section key={`${menu}.${index}`}></Section>
      ))}
    </Wrapper>
  );
}
