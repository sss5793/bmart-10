import React from "react";

function Case1(): JSX.Element {
  return (
    <tr>
      <td>상품의 하자, 오배송, 광고와 다른 경우</td>
      <td>
        <ul>
          <li>[교환 / 반품 가능 기간]</li>
          <li>
            상품 수령 후 3개월 이내, 혹은 그 사실을 알 수 있었던 날로부터 30일
            이내에 가능합니다.
          </li>
          <li>[교환 / 반품비 부담 및 방법</li>
          <li>
            검토 후 문제가 있는 것으로 확인 시, 교환 / 반품비는 우아한형제들에서
            부담합니다.
          </li>
          <li>
            상품의 상태를 표현할 수 있는 사진을 첨부하여 주문번호와 함께
            cs@woowahan.com으로 보내주시거나, 고객센터 1600-0025 (오전 9시 ~
            새벽 3시)로 연락주시기 바랍니다.
          </li>
        </ul>
      </td>
    </tr>
  );
}

function Case2(): JSX.Element {
  return (
    <tr>
      <td>구매자의 단순 변심, 착오 구매(색상 / 사이즈 교환 포함)</td>
      <td>
        <ul>
          <li>[교환 / 반품 가능 기간]</li>
          <li>
            상품 수령 후 7일 이내에 (신선 식품은 24시간 이내) 교환 및 반품
            요청을 할 수 있습니다.
          </li>
          <li>[교환 / 반품비 부담 및 방법]</li>
          <li>
            교환 / 반품비(왕복 배달팁) 구매자와 부담합니다.
            <br />
            - 교환 9,000원
            <br />
            - 모든 상품 반품 9,000원
            <br />
            - 일부 상품 반품 4,500원
            <br />
            교환 또는 일부 상품 반품의 경우, 고객이 App에서 직접 대체 상품을
            재주문 해주시는 경우에만 가능합니다.
          </li>
          <li>
            반품 또는 교환 상품 확인 후 카드 결제에 대한 승인 취소 혹은
            결제하셨던 수단으로 환불해 드립니다.
          </li>
        </ul>
      </td>
    </tr>
  );
}

export default function ReturnExchangeInfo(): JSX.Element {
  return (
    <table>
      <tbody>
        <Case1></Case1>
        <Case2></Case2>
      </tbody>
    </table>
  );
}
