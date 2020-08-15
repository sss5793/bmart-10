import React from 'react';
import styled from 'styled-components';

import ItemImg from './ItemImg';
import ItemContent from './ItemContent';
const ItemArea = styled.div`
  margin-top: 15px;
  width: 107px;
`;

export default function MainItem(props: any): JSX.Element {
  // console.log(props);
  const { title, price, sale, width, src } = props;
  const style = { width: width + 'px' };
  return (
    <ItemArea style={style}>
      <ItemImg width={width} src={src}></ItemImg>
      <ItemContent title={title} price={price} sale={sale}></ItemContent>
    </ItemArea>
  );
}
