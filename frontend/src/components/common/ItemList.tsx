import React, { useState } from "react";
import styled from "styled-components";
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

const CheckIcon = ({ show }: { show: boolean }): JSX.Element => (
  <i
    className="fa fa-check"
    style={{ fontSize: "1em", opacity: Number(show) }}
  ></i>
);

const sortTitle = [
  "기본 정렬순",
  "인기 상품순",
  "금액 높은순",
  "금액 낮은순",
  "신규 상품순",
  "할인율 순",
];

type ItemType = {
  title: string;
  price: string;
  sale: string;
  src: string;
};

// const sortFunc = [
//   () => {},
//   () => {},
//   (a: Object, b: Object) => {
//     return a.price - b.price;
//   },
// ];

export default function ItemList({
  data,
}: {
  data: Array<ItemType>;
}): JSX.Element {
  const [sortState, setSortState] = useState({ y: "100%", sortIdx: 0 });

  return (
    <div>
      <Container>
        <SortHeader
          onClick={(): void => {
            setSortState({ ...sortState, y: "0%" });
          }}
        >
          {sortTitle[sortState.sortIdx]} ▼
        </SortHeader>
        <Wrapper>
          {data.map(
            (one: ItemType, idx: number): JSX.Element => (
              <MainItem key={idx + ""} width="48%" {...one}></MainItem>
            )
          )}
        </Wrapper>
      </Container>
      <SortSelect style={{ transform: `translateY(${sortState.y})` }}>
        <SortSelectHeader>
          <span></span>
          <span>정렬</span>
          <span onClick={(): void => setSortState({ ...sortState, y: "100%" })}>
            닫기
          </span>
        </SortSelectHeader>
        <div>
          <SelectOne
            onClick={(): void => setSortState({ y: "100%", sortIdx: 0 })}
          >
            <span>기본 정렬순</span>
            <CheckIcon show={sortState.sortIdx === 0}></CheckIcon>
          </SelectOne>
          <SelectOne
            onClick={(): void => setSortState({ y: "100%", sortIdx: 1 })}
          >
            <span>인기 상품순</span>
            <CheckIcon show={sortState.sortIdx === 1}></CheckIcon>
          </SelectOne>
          <SelectOne
            onClick={(): void => setSortState({ y: "100%", sortIdx: 2 })}
          >
            <span>금액 높은순</span>
            <CheckIcon show={sortState.sortIdx === 2}></CheckIcon>
          </SelectOne>
          <SelectOne
            onClick={(): void => setSortState({ y: "100%", sortIdx: 3 })}
          >
            <span>금액 낮은순</span>
            <CheckIcon show={sortState.sortIdx === 3}></CheckIcon>
          </SelectOne>
          <SelectOne
            onClick={(): void => setSortState({ y: "100%", sortIdx: 4 })}
          >
            <span>신규 상품순</span>
            <CheckIcon show={sortState.sortIdx === 4}></CheckIcon>
          </SelectOne>
          <SelectOne
            onClick={(): void => setSortState({ y: "100%", sortIdx: 5 })}
          >
            <span>할인율 순</span>
            <CheckIcon show={sortState.sortIdx === 5}></CheckIcon>
          </SelectOne>
        </div>
      </SortSelect>
    </div>
  );
}
