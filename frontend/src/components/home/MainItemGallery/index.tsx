import React, { useState } from "react";
import styled from "styled-components";
import GalleryHeader from "./GalleryHeader";
import GalleryImage from "./GalleryImage";
import MainItem from "../MainItem";

type Data = {
  goodId?: string | number;
  title: string;
  price: string;
  sale: string;
  src: string;
};
type Props = {
  data: Array<Data>;
};

const GalleryWrapper = styled.div`
  padding: 15px;
`;

const GalleryImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -10px;
`;

const MAIN_ITEM_WIDTH = "100%";

export default function MainItemGallery({ data: dataArr }: Props): JSX.Element {
  const [index, setIndex] = useState(0);
  const dataOne: Data = dataArr[index];

  const setIdx = (idx: number): void => setIndex(idx);
  const convertDataToGalleryImage = (
    { src }: { src: string },
    idx: number
  ): JSX.Element => (
    <GalleryImage
      key={idx + ""}
      index={idx + ""}
      onClick={setIdx}
      src={src}
    ></GalleryImage>
  );

  return (
    <GalleryWrapper>
      <GalleryHeader></GalleryHeader>
      <GalleryImages>{dataArr.map(convertDataToGalleryImage)}</GalleryImages>
      <MainItem width={MAIN_ITEM_WIDTH} {...dataOne}></MainItem>
    </GalleryWrapper>
  );
}
