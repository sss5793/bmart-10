import React, { useState } from "react";
import styled from "styled-components";
import GalleryHeader from './GalleryHeader';
import GalleryImage from './GalleryImage';
import MainItem from '../MainItem';

type Data = {
    title: string;
    price: string;
    sale: string;
    src: string;
};
type Props = {
    data: Array<Data>;
};

const GalleryWrapper = styled.div`
    padding: 15px;
`;

const GalleryImages = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: -10px;
`;

const MAIN_ITEM_FONT_SIZE = "17px";


export default function MainItemGallery({ data }: Props) {
    const [index, setIndex] = useState(0);
    const { title, price, sale, src }: Data = data[index];

    const setIdx = (idx: any) => setIndex(idx);
    const convertDataToGalleryImage = ({ src }: { src: string }, idx: number) => (
        <GalleryImage key={idx + ""} index={idx + ""} onClick={setIdx} src={src}></GalleryImage>);

    return (
        <GalleryWrapper>
            <GalleryHeader></GalleryHeader>
            <GalleryImages>
                {data.map(convertDataToGalleryImage)}
            </GalleryImages>
            <MainItem fontSize={MAIN_ITEM_FONT_SIZE} title={title} price={price} sale={sale} src={src}></MainItem>
        </GalleryWrapper>
    );
}