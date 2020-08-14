import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Category from '../components/home/CategoryButtonArea';
import MainItemContainer from '../components/home/MainItemContainer';
import Banner from '../components/home/Banner';
import Recommend from '../components/home/Recommend';

const data = [
  {
    title: '한끼 당근 1개',
    price: '7500',
    sale: '7%',
    src: '/asset/img/1583285919646l0.jpg',
  },
  {
    title: 'GAP 오이 2입',
    price: '14900',
    sale: '',
    src: '/asset/img/1531993158257l0.jpg',
  },
  {
    title: '친환경 당근 500g',
    price: '13900',
    sale: '',
    src: '/asset/img/1463997072538l0.jpg',
  },
  {
    title: '다다기오이 3입',
    price: '2990',
    sale: '',
    src: '/asset/img/1592985466972l0.jpg',
  },
  {
    title: '무농약 양배추 1/2통',
    price: '10500',
    sale: '',
    src: '/asset/img/1573711443599l0.jpg',
  },
  {
    title: '양배추 2종',
    price: '14900',
    sale: '',
    src: '/asset/img/1593066870177l0.jpg',
  },
];

const advertiseMockData = [
  {
    imageURL:
      'https://user-images.githubusercontent.com/38618187/90112691-4b324600-dd8b-11ea-83cf-d387131713dd.jpg',
  },
  {
    imageURL:
      'https://user-images.githubusercontent.com/38618187/90112683-49688280-dd8b-11ea-8c03-d693e9a9fd1f.jpg',
  },
  {
    imageURL:
      'https://user-images.githubusercontent.com/38618187/90112698-4cfc0980-dd8b-11ea-90a9-a4342fc1086e.gif',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Category></Category>
      <Banner advertiseData={advertiseMockData}></Banner>
      <MainItemContainer width="107" data={data}>
        지금 뭐 먹지?
      </MainItemContainer>
      <MainItemContainer width="107" data={data}>
        지금 필요한 생필품!!
      </MainItemContainer>
      <Recommend></Recommend>
    </Layout>
  );
}
