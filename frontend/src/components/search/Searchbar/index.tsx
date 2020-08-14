import React, { Component } from "react";
import styled from "styled-components";

import FixedBox from "./FixedBox";
import Input from "./Input";
import SearchIcon from "./SeachIcon";
import DeleteButton from "./DeleteButton";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  background-color: #fff;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
`;

type Props = {};

type States = {
  showX: boolean;
};

export default class SearchBar extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showX: false,
    };
    this.updateFilter = this.updateFilter.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this);
  }

  updateFilter(event: React.KeyboardEvent<HTMLInputElement>): void {
    const filter = (event.target as HTMLInputElement).value;

    if (filter.length > 0) {
      this.setState({
        showX: true,
      });
    }
  }

  deleteFilter(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const input = (event.target as HTMLInputElement).parentNode?.querySelector(
      "input"
    );

    if (input) {
      input.value = "";
    }

    this.setState({
      showX: false,
    });
  }

  render(): JSX.Element {
    return (
      <Wrapper>
        <FixedBox>
          <SearchIcon />
          <Input placeholder="상품 검색" onKeyUp={this.updateFilter}></Input>
          {this.state.showX ? (
            <DeleteButton onClick={this.deleteFilter}>X</DeleteButton>
          ) : null}
        </FixedBox>
      </Wrapper>
    );
  }
}
