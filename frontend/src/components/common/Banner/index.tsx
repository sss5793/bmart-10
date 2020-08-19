import React from "react";
import Flicking from "@egjs/react-flicking";
import { FlickingEvent } from "@egjs/flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

import styled from "styled-components";

import Advertisement from "./Advertisement";
import Indicator from "./Indicator";

const Wrapper = styled.div`
  position: relative;
`;

type Advertise = {
  imageURL: string;
};

type Props = {
  advertiseData: Array<Advertise>;
  size?: number;
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
        onMoveEnd={(e: FlickingEvent): void => observable.trigger(e.index)}
        plugins={[new AutoPlay(undefined, "NEXT")]}
      >
        {props.advertiseData.map((advertise, index) => (
          <Advertisement
            key={index}
            imageURL={advertise.imageURL}
            size={props.size}
          />
        ))}
      </Flicking>
      <Indicator size={props.advertiseData.length} observable={observable} />
    </Wrapper>
  );
}
