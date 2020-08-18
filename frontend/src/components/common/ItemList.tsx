import React, { useState } from "react";
import styled from "styled-components";
import { KEY_NAME } from "../../constants/message";
import { Link, useHistory } from "react-router-dom";
import MainItem from "../home/MainItem";

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

const SortHeader = styled.div`
  height: 2em;
  line-height: 2em;
  text-align: right;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SortSelect = styled.div`
  border-radius: 15px 15px 0px 0px;
  position: absolute;
  background-color: #eee;
  width: 100%;
  bottom: 0px;
  transition: transform 0.2s linear;
`;
const SortSelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const SelectOne = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

export default function ItemList({ data }: any) {
  const [translateY, setY] = useState("100%");
  return (
    <div>
      <Container>
        <SortHeader
          onClick={() => {
            setY("0%");
          }}
        >
          기본 정렬 순 ▼
        </SortHeader>
        <Wrapper>
          {data.map((one: any, idx: number) => (
            <MainItem key={idx + ""} width="48%" {...one}></MainItem>
          ))}
        </Wrapper>
      </Container>
      <SortSelect style={{ transform: `translateY(${translateY})` }}>
        <SortSelectHeader>
          <span></span>
          <span>정렬</span>
          <span
            onClick={(one) => {
              setY("100%");
            }}
          >
            닫기
          </span>
        </SortSelectHeader>
        <div>
          <SelectOne>
            <span>기본 정렬순</span>
            <i className="fa fa-check" style={{ fontSize: "1em" }}></i>
          </SelectOne>
          <SelectOne>
            <span>인기 상품순</span>
            <i className="fa fa-check" style={{ fontSize: "1em" }}></i>
          </SelectOne>
          <SelectOne>
            <span>금액 높은순</span>
            <i className="fa fa-check" style={{ fontSize: "1em" }}></i>
          </SelectOne>
          <SelectOne>
            <span>금액 낮은순</span>
            <i className="fa fa-check" style={{ fontSize: "1em" }}></i>
          </SelectOne>
          <SelectOne>
            <span>신규 상품순</span>
            <i className="fa fa-check" style={{ fontSize: "1em" }}></i>
          </SelectOne>
          <SelectOne>
            <span>할인율 순</span>
            <i className="fa fa-check" style={{ fontSize: "1em" }}></i>
          </SelectOne>
        </div>
      </SortSelect>
    </div>
  );
}
