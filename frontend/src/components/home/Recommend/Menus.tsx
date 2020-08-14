import React, { useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import { FlickingEvent } from "@egjs/flicking";
import styled from "styled-components";

import Section from "./Menu";

const Wrapper = styled.div`
  width: 100%;
`;

type Props = {
  menus: Array<string>;
  store: {
    flicking: Flicking | undefined;
  };
};

export default function Menus(props: Props): JSX.Element {
  const observable = {
    map: new Map<string, React.Dispatch<React.SetStateAction<boolean>>>(),
    trigger: function (key: string): void {
      const beforeHandler = this.map.get(this.lastTarget);
      const handler = this.map.get(key);

      if (beforeHandler) {
        beforeHandler(false);
      }

      if (handler) {
        handler(true);
        this.lastTarget = key;
      }
    },
    lastTarget: props.menus[0],
  };

  return (
    <Wrapper>
      <Flicking
        duration={500}
        gap={10}
        ref={(e: Flicking): void => {
          props.store.flicking = e;
          observable.trigger(props.menus[0]);
        }}
        onMoveEnd={(e: FlickingEvent): void =>
          observable.trigger(props.menus[e.index])
        }
        overflow={false}
        hanger={"0"}
        anchor={"0"}
        collectStatistics={false}
        autoResize={true}
      >
        {props.menus.reverse().map((menu, index) => (
          <Section key={`menu.${index}`} menu={menu} observable={observable} />
        ))}
      </Flicking>
    </Wrapper>
  );
}
