import React from 'react';

const SVG = (props: { size: string; fill: string; path: string }) => {
    const { size, fill, path } = props;
    return (
        <svg width={size+'px'} height={size+'px'}>
            <path fill={fill} d={path}/>
        </svg>
    )
};

export default SVG;
