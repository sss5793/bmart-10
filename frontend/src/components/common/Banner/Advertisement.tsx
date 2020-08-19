import styled from "styled-components";

type Props = {
  imageURL: string;
  size?: number;
};

export default styled.div<Props>`
  width: 100%;
  height: ${(props): string => (props.size ? `${props.size}` : "200")}px;

  background-image: url(${(props): string => props.imageURL});
  background-repeat: no-repeat;
  background-size: cover;
`;
