import React from "react";
import Flicking from "@egjs/react-flicking";
import styled from "styled-components";

import Content from "./Content";

const HEIGHT = 400;
const THRESHOLD = 2800;

const Wrapper = styled.div<{ innerHeight: number }>`
  width: 100%;
  height: ${(props): number => props.innerHeight}px;

  overflow-y: scroll;
`;

type Props = {
  innerHeight?: number;
  contentHeight?: number;
  store: {
    flicking: Flicking | undefined;
  };
  menus: Array<string>;
};

const changeMenus = (scrollTop: number, props: Props): void => {
  if (props.store.flicking) {
    props.store.flicking.moveTo(Math.floor(scrollTop / HEIGHT), 300);
  }
};

const focusToThis = (pageY: number): void => {
  if (pageY > THRESHOLD) {
    window.scroll({
      behavior: "smooth",
      top: THRESHOLD,
    });
  }
};

export default function List(props: Props): JSX.Element {
  let element: HTMLDivElement;
  let debounceFlag = false;
  const debounceTime = 20;

  return (
    <Wrapper
      innerHeight={props.innerHeight || HEIGHT}
      onScrollCapture={(
        event: React.UIEvent<HTMLDivElement, UIEvent>
      ): void => {
        if (debounceFlag) return;
        const { scrollTop } = event.target as HTMLDivElement;

        debounceFlag = true;
        changeMenus(scrollTop, props);

        setTimeout(() => {
          debounceFlag = false;
        }, debounceTime);
      }}
      onTouchStart={(event: React.TouchEvent<HTMLDivElement>): void => {
        // 불필요한 focusing을 막기 위해 List 컴포넌트의 위치를 이용해 분기
        if (element) {
          const { top } = element.getBoundingClientRect();

          if (top > 110) {
            const { pageY } = event.touches[0];

            focusToThis(pageY);
          }
        }
      }}
      ref={(e: HTMLDivElement | null): void => {
        if (e) element = e;
      }}
    >
      {props.menus.map((menu, index) => (
        <Content key={`${menu}.${index}`} height={HEIGHT}></Content>
      ))}
    </Wrapper>
  );
}
