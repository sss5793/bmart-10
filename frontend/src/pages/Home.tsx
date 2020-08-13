import React from 'react';
import Layout from '../components/layout';
import Category from "../components/CategoryButtonArea";

const Home = (): JSX.Element => {
  return (
    <Layout>메인 페이지
      <Category></Category>
    </Layout>);
};

export default Home;
