import React from "react";
import Flicking from "@egjs/react-flicking";
import { FlickingEvent } from "@egjs/flicking";
import styled from "styled-components";

import Advertisement from "./Advertisement";
import Indicator from "./Indicator";

const TIMER = 3000;

const Wrapper = styled.div`
  position: relative;
`;

function autoStart(flicking: Flicking, time: number): void {
  setTimeout(() => {
    flicking.next();
    autoStart(flicking, time);
  }, time);
}

type Advertise = {
  imageURL: string;
};

type Props = {
  advertiseData: Array<Advertise>;
};

export default function Banner(props: Props): JSX.Element {
  const observable = {
    arr: new Array<React.Dispatch<React.SetStateAction<number>>>(),
    trigger: function (index: number): void {
      this.arr.forEach((cur) => {
        cur(index);
      });
    },
  };

  return (
    <Wrapper>
      <Flicking
        circular={true}
        duration={500}
        autoResize={true}
        ref={(e: Flicking): void => autoStart(e, TIMER)}
        onMoveEnd={(e: FlickingEvent): void => observable.trigger(e.index)}
      >
        {props.advertiseData.map((advertise, index) => (
          <Advertisement key={index} imageURL={advertise.imageURL} />
        ))}
      </Flicking>
      <Indicator size={props.advertiseData.length} observable={observable} />
    </Wrapper>
  );
}
