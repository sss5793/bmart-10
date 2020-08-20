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
import { getItem, ItemType } from "../../mock";
import MainItem from "../home/MainItem";
import DeliveryInfo from "./DeliveryInfo";
import ReturnExchangeInfo from "./ReturnExchangeInfo";

function InfoSummary(): JSX.Element {
  return (
    <ul>
      <li>
        <span>배달 정보</span>
        <span>가장 필요할 때, 필요한 만큼만 번쩍배달</span>
      </li>
      <li>
        <span></span>
        <span>배달 시간 22~33분 예상|새벽 2시까지 주문 가능</span>
      </li>
      <li>
        <span>적립 혜택</span>
        <span>배민 페이로 결제하면 포인트 0.5% 적립</span>
      </li>
      <li>
        <span>원산지 표시</span>
        <span>하단 상세 내용 참고</span>
      </li>
    </ul>
  );
}

const getPrice = (item: ItemType | undefined): number => {
  return (
    (parseInt(item?.price || "0") * (1 - parseInt(item?.sale || "0") / 100)) | 0
  );
};

export default function Goods({ goodId }: { goodId: string }): JSX.Element {
  const item = getItem(parseInt(goodId));
  const price = getPrice(item);

  const [yPercent, setYPercent] = useState({ y: "0%" });
  const [count, setCount] = useState(1);

  return (
    <div style={{ marginTop: "-15px" }}>
      <MainItem width="100%" {...item}></MainItem>
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
                <li>{item?.price}</li>
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
              <PlusMinusSpan onClick={(): void => setCount(count + 1)}>
                +
              </PlusMinusSpan>
            </Counter>
          </ItemContent>

          <BagButton>
            <span>{count}개 담기 </span>
            <RightSpan>{count * price}원</RightSpan>
          </BagButton>
        </Content>
      </HideArea>
    </div>
  );
}
