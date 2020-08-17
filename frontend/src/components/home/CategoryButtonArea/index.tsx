import React from "react";
import styled from "styled-components";
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
            <CategoryButton key={idx + ""} keyName={title}></CategoryButton>
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default Category;
