import React from "react";
import styled from "styled-components";

const Time24 = styled.span`
    color: blue;
`;
const MiddleLine = styled.span`
    padding:10px;
`;

export default function CategoryHeader(): JSX.Element {
    return (
        <div>
            <span>⏰&nbsp; 배달 시간 28~39분 예상</span>
            <MiddleLine>|</MiddleLine>
            <Time24>24시까지 주문 가능</Time24>
        </div>
    );
}