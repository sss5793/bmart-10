import React, { Dispatch } from "react";
import { CounterWapper, PlusMinusSpan, CounterText } from "./StyleComponent";

export default function Counter({
  setCount,
  count,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}): JSX.Element {
  return (
    <CounterWapper>
      <PlusMinusSpan
        onClick={(): void => {
          count > 1 && setCount(count - 1);
        }}
      >
        -
      </PlusMinusSpan>
      <CounterText>{count}</CounterText>
      <PlusMinusSpan
        onClick={(): void => {
          count < 10 && setCount(count + 1);
        }}
      >
        +
      </PlusMinusSpan>
    </CounterWapper>
  );
}
