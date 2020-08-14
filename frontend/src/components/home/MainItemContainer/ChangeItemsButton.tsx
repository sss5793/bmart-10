import React from "react";
import styled from "styled-components";

const Button = styled.button`
    height: 45px;
    width: 100%;
    border: none;
`;

export default function ChangeItemsButton(props: any): JSX.Element {
    const title = props.children;
    return (
        <Button>
            <i className="fa fa-refresh fa-spin"></i>
            <span>&nbsp;{title}</span>
            <span>&nbsp;다른 상품 보기</span>
        </Button>
    );
}