import React, { useState } from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Counter from "./Counter";

function Wrapper({ initValue }: { initValue: string }): JSX.Element {
  const [count, setCount] = useState(parseInt(initValue));
  return <Counter count={count} setCount={setCount}></Counter>;
}

describe("<Counter />", () => {
  const setup = (initValue: number) => {
    const { getByText } = render(
      <Wrapper initValue={initValue + ""}></Wrapper>
    );
    const countUpComponent = getByText("+");
    const countDownComponent = getByText("-");
    const countComponent = getByText(initValue + "");
    return [countUpComponent, countDownComponent, countComponent];
  };

  it("countUpTest", () => {
    const [countUpComponent, countDownComponent, countComponent] = setup(5);
    fireEvent.click(countUpComponent);
    fireEvent.click(countUpComponent);
    fireEvent.click(countUpComponent);
    expect(countComponent).toHaveTextContent("8");
  });
  it("countUpTest: max count value 10", () => {
    const [countUpComponent, countDownComponent, countComponent] = setup(9);
    fireEvent.click(countUpComponent);
    expect(countComponent).toHaveTextContent("10");

    fireEvent.click(countUpComponent);
    fireEvent.click(countUpComponent);
    expect(countComponent).toHaveTextContent("10");
  });
  it("countDownTest", () => {
    const [countUpComponent, countDownComponent, countComponent] = setup(5);
    fireEvent.click(countDownComponent);
    fireEvent.click(countDownComponent);
    expect(countComponent).toHaveTextContent("3");
  });
  it("countDownTest: min count value 1", () => {
    const [countUpComponent, countDownComponent, countComponent] = setup(2);
    fireEvent.click(countDownComponent);
    expect(countComponent).toHaveTextContent("1");

    fireEvent.click(countDownComponent);
    fireEvent.click(countDownComponent);
    fireEvent.click(countDownComponent);
    expect(countComponent).toHaveTextContent("1");
  });
});
