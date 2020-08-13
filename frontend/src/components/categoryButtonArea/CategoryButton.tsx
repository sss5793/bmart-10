import React from "react";
import styled, { keyframes } from "styled-components";

type Name = {
    [key: string]: string
}

const name: Name = {
    "bread": "빵 시리얼 잼",
    "egg": "정육 수산 계란",
    "hot-dog": "분식 야식",
    "icecream": "아이스크림",
    "meal-kit": "밀키트",
    "milk": "우유 유제품",
    "salad": "과일 샐러드",
    "snacks": "과자 초콜릿",
    "soap": "헤어 바디 세안",
    "three-lines": "더보기"
};

const smallOut = keyframes`
  0% {
      transform: scale(1);
  }
  50% {
      transform: scale(0.8);
  }
  100% {
      transform: scale(1);
  }
`;

const ButtonWrapper = styled.div`
    margin-top:10px;
    text-align:center;
    width:65px;
    height:65px;

    &:active {
        animation-duration: 0.3s;
        animation-timing-function: ease-out;
        animation-name: ${smallOut};
    }
`;

const ButtonImgWrapper = styled.div`
    border-radius: 50%;
    width:48px;
    height:48px;
    margin:0 auto;
    border:1px solid black;
`;

const ButtonImg = styled.img`
    width:48px;
    padding:10px;
`;

const ButtonTitle = styled.p`
    margin-top:5px;
    font-size:0.7em;
`;

function CategoryButton({ type }: { type: string }): JSX.Element {
    const imagePath = `/asset/icon/${type}.svg`;

    return (
        <ButtonWrapper>
            <div>
                <ButtonImgWrapper>
                    <ButtonImg src={imagePath}></ButtonImg>
                </ButtonImgWrapper>
            </div>
            <ButtonTitle>
                {name[type]}
            </ButtonTitle>
        </ButtonWrapper >
    );
}

export default CategoryButton;