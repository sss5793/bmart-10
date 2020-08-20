import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  margin-bottom: 1em;
`;

const Row = styled.li`
  display: flex;
  padding: 0.5em 1em;
  line-height: 10px;
`;

const Subject = styled.div`
  display: inline-block;
  width: 5em;
  font-size: 0.9em;
`;

const Content = styled.div`
  font-size: 0.8em;
`;

export default function InfoSummary(): JSX.Element {
  return (
    <Wrapper>
      <Row>
        <Subject>배달 정보</Subject>
        <Content>가장 필요할 때, 필요한 만큼만 번쩍배달</Content>
      </Row>
      <Row>
        <Subject style={{ color: "#fff" }}>배달 정보</Subject>
        <Content>배달 시간 22~33분 예상|새벽 2시까지 주문 가능</Content>
      </Row>
      <Row>
        <Subject>적립 혜택</Subject>
        <Content>배민 페이로 결제하면 포인트 0.5% 적립</Content>
      </Row>
      <Row>
        <Subject>원산지 표시</Subject>
        <Content>하단 상세 내용 참고</Content>
      </Row>
    </Wrapper>
  );
}
