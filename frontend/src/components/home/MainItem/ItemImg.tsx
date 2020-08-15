import React from "react";
import styled from "styled-components";

const ItemImage = styled.div`
    position:relative;
    outline: 1px solid #eee;
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

const DEFAULT_WIDTH = "107px";   // 값이 들어오지 않았을대의 기본값
const backgroundSize = "cover";

/**
 * 이미지는 정사각형으로 보여준다. 따라서 width값과 동일한다.
 * @param width 
 */
const getHeight = (width: string): string => {
    switch (true) {
        case width.includes('%'):
            return parseInt(width) + "vw";
        case width === undefined:
            return DEFAULT_WIDTH;
        default:
            return width;
    }
}

export default function ItemImg(props: any): JSX.Element {
    const src = props.src;
    const width = props.width || DEFAULT_WIDTH;
    const height = getHeight(width);
    const style = { width, height, backgroundImage: `url(${src})`, backgroundSize };

    return (
        <ItemImage style={style}>
            <HeartArea>
                <Heart>♡</Heart>
            </HeartArea>
        </ItemImage>
    );
}
