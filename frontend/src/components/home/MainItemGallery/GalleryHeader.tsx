import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const RedText = styled.span`
  color: red;
`;

const MoreLink = styled.a`
  line-height: 28px;
  color: "#2bc1bc";
  text-decoration: none;
`;

const TEXT1 = "지금 사면";
const TEXT2 = "⚡ 번쩍 할인";
const TEXT3_MORE = "더보기";

export default function GalleryHeader(): JSX.Element {
  return (
    <Wrapper>
      <div>
        <span>{TEXT1}</span>
        <RedText>{TEXT2}</RedText>
      </div>
      <MoreLink href="#">{TEXT3_MORE}</MoreLink>
    </Wrapper>
  );
}
