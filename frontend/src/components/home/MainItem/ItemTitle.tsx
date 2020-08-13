import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-size:10px;
`;

export default function ItemTitle(props: any) {
    const titleText = props.children;

    return (
        <Title>{titleText}</Title>
    );
}