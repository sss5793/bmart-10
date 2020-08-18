import React from "react";
import { Layout } from "../components/common";
import CategoryMenu from "../components/common/CategoryMenu";

const Category = ({ match }: any): JSX.Element => {
  const mainCategory = match.params.mainCategory;
  const subCategory = match.params.subCategory;

  return (
    <Layout mainCategory={mainCategory} subCategory={subCategory}>
      <CategoryMenu
        categoryData={[
          "bread",
          "egg",
          "hot-dog",
          "icecream",
          "meal-kit",
          "milk",
          "salad",
          "snacks",
          "soap",
        ]}
      ></CategoryMenu>
    </Layout>
  );
};

export default Category;
