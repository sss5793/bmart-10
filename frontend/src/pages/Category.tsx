import React from "react";
import { Layout } from "../components/common";

const Category = ({ match }: any): JSX.Element => {
  const mainCategory = match.params.mainCategory;
  const subCategory = match.params.subCategory;
  console.log(mainCategory, subCategory);

  return <Layout categoryKey={mainCategory}>카테고리 별 페이지</Layout>;
};

export default Category;
