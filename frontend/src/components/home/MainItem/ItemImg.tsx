import React from "react";
import styled from "styled-components";

const ItemImage = styled.div`
    position:relative;
`;


const HeartArea = styled.div`
    display:block;
    position:absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width:33px;
    height:33px;
    color:#fff;
    border-radius: 100%;
    bottom:10px;
    right:10px;
    text-align:center;
`;

const Heart = styled.span`
    line-height:33px;
    vertical-align:middle;
`;

const WIDTH_PERCENT = "100%";
const WIDTH_VW = "100vw";
const backgroundSize = "cover";

export default function ItemImg(props: any): JSX.Element {
    const src = props.src;
    const width = props.width || WIDTH_PERCENT;
    const height = width === WIDTH_PERCENT ? WIDTH_VW : width;
    const style = { width, height, backgroundImage: `url(${src})`, backgroundSize };

    return (
        <ItemImage style={style}>
            <HeartArea>
                <Heart>♡</Heart>
            </HeartArea>
        </ItemImage>
    );
}