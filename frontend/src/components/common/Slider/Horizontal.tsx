import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/style";

type Props = {
  title?: string;
  isMore?: boolean;
  onClick?: () => void;
  children: JSX.Element[];
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const Title = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;

const More = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${COLOR.GREEN_1};
`;

const ItemWrapper = styled.div`
  overflow-x: auto;
  white-space: nowrap;

  > div {
    margin: 0;
    margin-right: 10px;
    display: inline-table;

    &:first-child {
      margin-left: 15px;
    }

    &:last-child {
      margin-right: 15px;
    }
  }
`;

const Horizontal = ({
  title = "이미지 슬라이더 제목",
  isMore = false,
  onClick,
  children,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        {isMore && <More onClick={onClick}>더보기 &gt; </More>}
      </TitleWrapper>
      <ItemWrapper>{children}</ItemWrapper>
    </Wrapper>
  );
};

export default Horizontal;
