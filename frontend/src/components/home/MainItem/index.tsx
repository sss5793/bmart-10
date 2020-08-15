import React from 'react';
import styled from 'styled-components';
import ItemImg from './ItemImg';
import ItemContent from './ItemContent';
import { ItemDispatch, ItemContextType } from './ItemContext';

const ItemArea = styled.div`
    margin-top:15px;
`;

export default function MainItem(props: ItemContextType): JSX.Element {
    return (
        <ItemDispatch.Provider value={props}>
            <ItemArea>
                <ItemImg></ItemImg>
                <ItemContent></ItemContent>
            </ItemArea >
        </ItemDispatch.Provider>
    );
}
