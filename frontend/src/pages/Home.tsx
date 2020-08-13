import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Category from "../components/home/CategoryButtonArea";
import MainItem from "../components/home/MainItem";

const data = [
  { title: "스윗밸런스 고구마메쉬와 훈제오리 샐러드 325g", price: "7500", sale: "7%", src: "/asset/img/15863312604l0.jpg" },
  { title: "오리엔탈 분짜를 빼당빼당 645g 2인", price: "14900", sale: "", src: "/asset/img/15863312604l0.jpg" },
  { title: "마이셰프 월남쌈 2인 991g", price: "13900", sale: "", src: "/asset/img/15863312604l0.jpg" },
  { title: "하림 숯불향갈비치킨 230g", price: "2990", sale: "", src: "/asset/img/15863312604l0.jpg" },
  { title: "프렙박스 해산물 빠에야 1인 376g", price: "10500", sale: "", src: "/asset/img/15863312604l0.jpg" },
  { title: "프레시지 블랙라벨 파히타 720g", price: "14900", sale: "", src: "/asset/img/15863312604l0.jpg" },
];

const Goods = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;


const Home = () => {
  return (
    <Layout>
      메인 페이지
      <Category></Category>
      <Goods>
        {data.map(({ title, price, sale, src }, idx) => {
          return <MainItem key={idx + ""} title={title} price={price} sale={sale} width="107" src={src}></MainItem>
        })}
      </Goods>
    </Layout>);
};

export default Home;
