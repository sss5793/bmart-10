import styled from "styled-components";

export default styled.input`
  width: calc(100% - 24px - 10px - 24px);
  height: 24px;
  margin-left: 8px;
  margin-right: 16px;

  background-color: transparent;
  border: none;

  font-weight: medium;
  color: #8b95a1;
  font-size: 17px;

  :focus {
    outline: none;
  }
`;
