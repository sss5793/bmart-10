import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Horizontal from "./Horizontal";

describe("<Horizontal />", () => {
  // 테스트용 컴포넌트 생성
  const setup = (props = {}) => {
    const utils = render(
      <Horizontal
        title={"가로 슬라이더 테스트 코드"}
        isMore
        onClick={() => console.log("더보기 클릭")}
      >
        <div>Box 1</div>
        <div>Box 2</div>
      </Horizontal>
    );
    const { getByText } = utils;
    const title = getByText("가로 슬라이더 테스트 코드"); // title이 있는지 확인
    const button = getByText("더보기 >"); // button이 있는지 확인
    return {
      ...utils,
      title,
      button,
    };
  };

  it("has title and more button ", () => {
    const { title, button } = setup();
    expect(title).toBeTruthy(); // 해당 값이 truthy 한 값인지 확인
    expect(button).toBeTruthy();
    // 리액트 render 테스트 추가?!
  });
  

  it("calls more action", () => {
    const onInsert = jest.fn();
    const { button } = setup({ onInsert });

    fireEvent.click(button);
    // 버튼 클릭 후 나타날 액션에 대해 추가로 테스트
  });
});
