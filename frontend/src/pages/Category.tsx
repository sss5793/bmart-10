import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Layout, HorizontalSlider } from "../components/common";
import MainItem from "../components/home/MainItem";
import CategoryMenu from "../components/common/CategoryMenu";
import Banner from "../components/common/Banner";
import { getAdsData, getItems } from "../mock";
import { KEY_NAME } from "../constants/message";
import ItemList from "../components/common/ItemList";

type Data = {
  title: string;
  price: string;
  sale: string;
  src: string;
  width?: string;
};

type CategoryType = {
  mainCategory?: string;
  subCategory?: string;
};

const Category = ({
  match,
}: RouteComponentProps<CategoryType>): JSX.Element => {
  const mainCategory = match.params.mainCategory || "";
  const subCategory = match.params.subCategory;
  const subCategoryData = Object.keys(KEY_NAME[mainCategory].subCategory).map(
    (o) => o
  );
  const data = getItems(6);
  return (
    <Layout mainCategory={mainCategory} subCategory={subCategory}>
      {!subCategory && <Banner advertiseData={getAdsData()}></Banner>}
      {!subCategory && (
        <CategoryMenu
          baseUrl={`/category${"/" + mainCategory}`}
          mainCategoryName={mainCategory}
          categoryData={subCategoryData}
        ></CategoryMenu>
      )}
      {!subCategory && (
        <HorizontalSlider
          title={"이 상품 어때요?"}
          isMore
          onClick={(): void => {
            console.log("새로 나온거 더보기...");
          }}
        >
          {data.map((item: Data, idx: number) => {
            return <MainItem key={idx + ""} {...item} />;
          })}
        </HorizontalSlider>
      )}
      <ItemList data={getItems(40)}></ItemList>
    </Layout>
  );
};

export default Category;
