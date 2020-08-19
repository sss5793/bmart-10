import React from "react";
import { getItem } from "../../mock";
import MainItem from "../home/MainItem";
import DeliveryInfo from "./DeliveryInfo";
import ReturnExchangeInfo from "./ReturnExchangeInfo";
import { Fold } from "../common";

function EtcInfo(): JSX.Element {
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

export default function Goods({ goodId }: { goodId: string }): JSX.Element {
  const item = getItem(parseInt(goodId));

  return (
    <div>
      <MainItem width="100%" {...item}></MainItem>
      <EtcInfo></EtcInfo>
      <Fold title="배달 정보">
        <DeliveryInfo></DeliveryInfo>
      </Fold>
      <Fold style={{ marginTop: "-1px" }} title="반품 및 교환 정보">
        <ReturnExchangeInfo></ReturnExchangeInfo>
      </Fold>
    </div>
  );
}
