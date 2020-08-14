import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ imageURL: string }>`
  width: 100%;
  height: 200px;

  background-image: url(${(props): string => props.imageURL});
  background-repeat: no-repeat;
  background-size: cover;
`;

type Props = {
  imageURL: string;
};

export default function Advertisement(props: Props): JSX.Element {
  return <Wrapper imageURL={props.imageURL}></Wrapper>;
}
