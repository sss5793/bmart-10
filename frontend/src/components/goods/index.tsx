import React, { useState } from "react";
import {
  EtcInfo,
  ButtonArea,
  Button,
  Shadow,
  HideArea,
  HideAreaHeader,
  Content,
  Counter,
  CounterText,
  BagButton,
  RightSpan,
  PlusMinusSpan,
  ItemInfo,
  ItemImg,
  ItemContent,
} from "./StyleComponent";
import { useHistory } from "react-router-dom";
import { getItem, ItemType } from "../../mock";
import MainItem from "../home/MainItem";
import DeliveryInfo from "./DeliveryInfo";
import ReturnExchangeInfo from "./ReturnExchangeInfo";
import InfoSummary from "./InfoSummary";

import styled from "styled-components";

const Container = styled.div`
  margin-top: -15px;
`;

const getPrice = (item: ItemType | undefined): number => {
  return (
    (parseInt(item?.price || "0") * (1 - parseInt(item?.sale || "0") / 100)) | 0
  );
};

export default function Goods({ goodId }: { goodId: string }): JSX.Element {
  const item = getItem(parseInt(goodId));
  const price = getPrice(item);

  const [yPercent, setYPercent] = useState({ y: "100%" });
  const [count, setCount] = useState(1);

  const history = useHistory();
  return (
    <Container>
      <MainItem width="100%" padding="0.5em 1em" {...item}></MainItem>
      <InfoSummary></InfoSummary>
      <EtcInfo>
        <DeliveryInfo></DeliveryInfo>
        <ReturnExchangeInfo></ReturnExchangeInfo>
      </EtcInfo>
      <ButtonArea>
        <Button onClick={(): void => setYPercent({ y: "0%" })}>구매하기</Button>
      </ButtonArea>
      <Shadow
        style={{ display: yPercent.y === "100%" ? "none" : "block" }}
        onClick={(): void => setYPercent({ y: "100%" })}
      ></Shadow>
      <HideArea style={{ transform: `translateY(${yPercent.y})` }}>
        <HideAreaHeader>
          <span>{item?.title}</span>
          <RightSpan onClick={(): void => setYPercent({ y: "100%" })}>
            닫기
          </RightSpan>
        </HideAreaHeader>
        <Content>
          <ItemContent>
            <ItemImg style={{ backgroundImage: `url(${item?.src})` }}></ItemImg>

            <ItemInfo>
              <ul>
                <li>{item?.title}</li>
                <li>1회 최대 구매수량 10개</li>
                <li>{price}원</li>
              </ul>
            </ItemInfo>
            <Counter>
              <PlusMinusSpan
                onClick={(): void => {
                  count > 1 && setCount(count - 1);
                }}
              >
                -
              </PlusMinusSpan>
              <CounterText>{count}</CounterText>
              <PlusMinusSpan
                onClick={(): void => {
                  count < 10 && setCount(count + 1);
                }}
              >
                +
              </PlusMinusSpan>
            </Counter>
          </ItemContent>

          <BagButton onClick={(): void => history.goBack()}>
            <span>{count}개 담기 </span>
            <RightSpan>{count * price}원</RightSpan>
          </BagButton>
        </Content>
      </HideArea>
    </Container>
  );
}
