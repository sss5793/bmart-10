import React from "react";

function DeliveryTip(): JSX.Element {
  return (
    <tr>
      <td>배달 팁</td>
      <td>
        <ul>
          <li>
            <span>20,000원~</span>
            <span>0원</span>
          </li>
          <li>
            <span>10,000원~20,000원 미만</span>
            <span>0원</span>
          </li>
          <li>
            <span>5,000원~10,000원 미만</span>
            <span>0원</span>
          </li>
          <li>*최소주문금액은 5,000원 입니다.</li>
        </ul>
      </td>
    </tr>
  );
}

function DeliveryMethod(): JSX.Element {
  return (
    <tr>
      <td>배달 방법</td>
      <td>
        <ul>
          <li>주문 즉시 바로 배달</li>
          <li>
            주문 후 1시간 이내 배달을 위해 최선을 다하고 있습니다. 다만 기상
            악화나 천재지변 등의 상황에 의해 다소 지연될 수 있습니다. 상품 재고
            품절 등의 상황에서 주문이 취소될 수 있습니다.
          </li>
        </ul>
      </td>
    </tr>
  );
}

function DeliveryLocation(): JSX.Element {
  return (
    <tr>
      <td>배달 지역</td>
      <td>
        <ul>
          <li>서초구/강남구</li>
          <li>
            [서초구]서초1동, 서초2동, 서초3동, 서초4동, 잠원동, 반포본동,
            반포1동, 반포2동, 반포3동, 반포4동, 방배본동, 방배1동, 방배2동,
            방배3동, 방배4동 [강남구] 역삼1동, 역삼2동
          </li>
        </ul>
      </td>
    </tr>
  );
}

export default function DeliveryInfo(): JSX.Element {
  return (
    <table>
      <tbody>
        <DeliveryTip></DeliveryTip>
        <DeliveryMethod></DeliveryMethod>
        <DeliveryLocation></DeliveryLocation>
      </tbody>
    </table>
  );
}
