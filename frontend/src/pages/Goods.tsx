import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Layout } from "../components/common";
import GoodsComp from "../components/goods";
import { CategoryType } from "../router";

export default function Goods({
  match: {
    params: { goodId = "1" },
  },
}: RouteComponentProps<CategoryType>): JSX.Element {
  return (
    <Layout>
      <GoodsComp goodId={goodId}></GoodsComp>
    </Layout>
  );
}
