import React from "react";
import styled from "styled-components";

const ItemImage = styled.div`
    position:relative;
`;

const Img = styled.img`
    width:100%;
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

export default function ItemImg(props: any): JSX.Element {
    const src = props.src;
    const width = props.width || 107;
    const style = { width: `${width}px`, height: `${width}px` }
    return (
        <ItemImage>
            <Img src={src} alt="" style={style} /><HeartArea>
                <Heart>♡</Heart>
            </HeartArea>
        </ItemImage>
    );
}