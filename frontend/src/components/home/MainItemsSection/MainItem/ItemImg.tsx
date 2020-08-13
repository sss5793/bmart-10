import React from "react";
import styled from "styled-components";

const pp = "/asset/img/15863312604l0.jpg";

const ItemImage = styled.div`
    position:relative;
`;

const Heart = styled.span`
    display:inline-block;
    position:absolute;
    border: 1px solid black;
    border-radius: 50%;
    content: "♡";
`;

export default function ItemImg(props: any) {
    return (
        <ItemImage>
            <img src={pp} alt="" />
            <Heart></Heart>
        </ItemImage>
    );
}