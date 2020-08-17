import React from "react";
import { Layout } from "../components/common";

const Category = ({ match }: any): JSX.Element => {
  const mainCategory = match.params.mainCategory;
  const subCategory = match.params.subCategory;

  return (
    <Layout mainCategory={mainCategory} subCategory={subCategory}>
      카테고리 별 페이지
    </Layout>
  );
};

export default Category;
