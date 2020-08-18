import React from "react";
import styled from "styled-components";
import { Layout, HorizontalSlider } from "../components/common";
import Category from "../components/home/CategoryButtonArea";
import MainItemContainer from "../components/home/MainItemContainer";
import MainItemGallery from "../components/home/MainItemGallery";
import Banner from "../components/home/Banner";
import Recommend from "../components/home/Recommend";
import MainItem from "../components/home/MainItem";
import { getAdsData, getItems } from "../mock";

type Data = {
  title: string;
  price: string;
  sale: string;
  src: string;
  width?: string;
};

export default function Home(): JSX.Element {
  const advertiseMockData = getAdsData();
  const data = getItems(8);
  const itemData = getItems(30);

  return (
    <Layout>
      <Banner advertiseData={advertiseMockData}></Banner>
      <Category></Category>
      <HorizontalSlider title={"고객님을 위해 준비한 상품"}>
        {data.map((item: Data, idx: number) => (
          <MainItem key={idx + ""} {...item} />
        ))}
      </HorizontalSlider>
      <MainItemGallery data={data.slice(0, 4)} />
      <MainItemContainer data={itemData}>지금 뭐 먹지?</MainItemContainer>
      <HorizontalSlider
        title={"새로 나왔어요"}
        isMore
        onClick={() => {
          console.log("새로 나온거 더보기...");
        }}
      >
        {data.map((item: Data, idx: number) => (
          <MainItem key={idx + ""} {...item} />
        ))}
      </HorizontalSlider>
      <HorizontalSlider
        title={"요즘 잘 팔려요"}
        isMore
        onClick={() => {
          console.log("요즘 잘 팔리는거 더보기...");
        }}
      >
        {data.map((item: Data, idx: number) => (
          <MainItem key={idx + ""} {...item} />
        ))}
      </HorizontalSlider>
      <MainItemContainer data={itemData}>
        지금 필요한 생필품!!
      </MainItemContainer>
      <Recommend></Recommend>
    </Layout>
  );
}
