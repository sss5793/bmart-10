import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CategoryButton from "./CategoryButton";
import CategoryHeader from "./CategoryButtonsHeader";

const categoryTitleArr: Array<string> = [
  "bread",
  "egg",
  "hot-dog",
  "icecream",
  "meal-kit",
  "milk",
  "salad",
  "snacks",
  "soap",
  "three-lines",
];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Container = styled.div`
  padding: 10px;
`;

function Category(): JSX.Element {
  return (
    <Container>
      <CategoryHeader></CategoryHeader>
      <Wrapper>
        {categoryTitleArr.map((title, idx) => {
          return (
            <Link key={title + idx} to={`/category/${title}`}>
              <CategoryButton key={idx + ""} keyName={title}></CategoryButton>
            </Link>
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default Category;
