import styled from "styled-components";

type Props = {
  size?: number;
};

export default styled.div<Props>`
  width: ${(props): number => props.size || 30}px;
  height: ${(props): number => props.size || 30}px;
  background-image: url("https://static.toss.im/icons/png/4x/icn-searchfield.png");
  background-repeat: no-repeat;
  background-size: ${(props): number => props.size || 30}px;
`;
