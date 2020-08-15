import styled from "styled-components";

const WIDTH = 375;

export default styled.div`
  margin: 14px 16px 6px 16px;
  padding: 16px 12px;
  width: calc(${WIDTH}px - 32px - 24px);

  display: flex;
  flex-direction: row;
  background-color: rgba(2, 23, 71, 0.05);
  border-radius: 12px;
`;
