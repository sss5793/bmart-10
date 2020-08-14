import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  text-align: center;
  border: 1px solid #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StrongText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  font-size: 1.5rem;

  margin: 0;
  padding: 0;
`;

type Props = {};

export default function Header(props: Props): JSX.Element {
  return (
    <Wrapper
      ref={(ref) => {
        if (ref) {
          const clientRect = ref?.getBoundingClientRect();

          console.log(clientRect?.top, pageYOffset + clientRect?.top);
        }
      }}
    >
      <StrongText>번쩍하면 배달오는</StrongText>
      <Text>B+ 마트 대표 상품</Text>
    </Wrapper>
  );
}
