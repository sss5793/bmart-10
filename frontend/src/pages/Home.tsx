import React from "react";
import { Layout, HorizontalSlider } from "../components/common";
import Category from "../components/home/CategoryButtonArea";
import MainItemContainer from "../components/home/MainItemContainer";
import MainItemGallery from "../components/home/MainItemGallery";
import Banner from "../components/home/Banner";
import Recommend from "../components/home/Recommend";
import itemData from "../ItemData.json";
import MainItem from "../components/home/MainItem";

const data = [
  {
    title: "한끼 당근 1개",
    price: "7500",
    sale: "7%",
    src: "/asset/img/1583285919646l0.jpg",
  },
  {
    title: "GAP 오이 2입",
    price: "14900",
    sale: "",
    src: "/asset/img/1531993158257l0.jpg",
  },
  {
    title: "친환경 당근 500g",
    price: "13900",
    sale: "",
    src: "/asset/img/1463997072538l0.jpg",
  },
  {
    title: "다다기오이 3입",
    price: "2990",
    sale: "",
    src: "/asset/img/1592985466972l0.jpg",
  },
  {
    title: "무농약 양배추 1/2통",
    price: "10500",
    sale: "",
    src: "/asset/img/1573711443599l0.jpg",
  },
  {
    title: "양배추 2종",
    price: "14900",
    sale: "",
    src: "/asset/img/1593066870177l0.jpg",
  },
];

const advertiseMockData = [
  {
    imageURL:
      "https://user-images.githubusercontent.com/38618187/90112691-4b324600-dd8b-11ea-83cf-d387131713dd.jpg",
  },
  {
    imageURL:
      "https://user-images.githubusercontent.com/38618187/90112683-49688280-dd8b-11ea-8c03-d693e9a9fd1f.jpg",
  },
  {
    imageURL:
      "https://user-images.githubusercontent.com/38618187/90112698-4cfc0980-dd8b-11ea-90a9-a4342fc1086e.gif",
  },
];

type Data = {
  title: string;
  price: string;
  sale: string;
  src: string;
  width?: string;
};

export default function Home(): JSX.Element {
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
      <MainItemContainer data={itemData.slice(0, 30)}>
        지금 뭐 먹지?
      </MainItemContainer>
      <HorizontalSlider
        title={"새로 나왔어요"}
        isMore
        onClick={(): void => {
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
        onClick={(): void => {
          console.log("요즘 잘 팔리는거 더보기...");
        }}
      >
        {data.map((item: Data, idx: number) => (
          <MainItem key={idx + ""} {...item} />
        ))}
      </HorizontalSlider>
      <MainItemContainer data={itemData.slice(30, 60)}>
        지금 필요한 생필품!!
      </MainItemContainer>
      <Recommend></Recommend>
    </Layout>
  );
}
