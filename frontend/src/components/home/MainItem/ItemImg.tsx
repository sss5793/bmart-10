import React, { useContext } from "react";
import styled from "styled-components";
import { ItemContext, ItemContextType } from "./ItemContext";

type Style = {
  width?: string;
  height: string;
  backgroundImage: string;
  backgroundSize: string;
};

const DEFAULT_WIDTH = "107px"; // 값이 들어오지 않았을대의 기본값
const BACKGROUND_SIZE = "cover";

const ItemImage = styled.div`
  position: relative;
`;

const HeartArea = styled.div`
  display: block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 33px;
  height: 33px;
  color: #fff;
  border-radius: 100%;
  bottom: 10px;
  right: 10px;
  text-align: center;
`;

const Heart = styled.span`
  line-height: 33px;
  vertical-align: middle;
`;

/**
 * 이미지는 정사각형으로 보여준다. 따라서 width값과 동일한다.
 * @param width
 */
const getHeight = (width: string): string => {
  switch (true) {
    case width.includes("%"):
      return `${parseInt(width)}vw`;
    case width === undefined:
      return DEFAULT_WIDTH;
    default:
      return width;
  }
};

const getStyle = ({ src, width = DEFAULT_WIDTH }: ItemContextType): Style => {
  const height = getHeight(width);
  return {
    height,
    backgroundImage: `url(${src})`,
    backgroundSize: BACKGROUND_SIZE,
  };
};

export default function ItemImg(): JSX.Element {
  const style = getStyle(useContext(ItemContext));

  return (
    <ItemImage style={style}>
      <HeartArea>
        <Heart>♡</Heart>
      </HeartArea>
    </ItemImage>
  );
}
