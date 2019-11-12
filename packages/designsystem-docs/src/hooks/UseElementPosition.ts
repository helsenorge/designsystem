import React, { useEffect, useState } from 'react';

type ElementPosition = {top: number, right: number, bottom: number, left: number};

export default function useElementPosition(element: React.MutableRefObject<any>): ElementPosition {
    const [position, setPosition] = useState({top: 0, right: 0, bottom: 0, left: 0});
    useEffect(() => {
        const boundingRect = element.current.getBoundingClientRect();
        setPosition({top: boundingRect.top, right: boundingRect.right, bottom: boundingRect.bottom, left: boundingRect.left})
    }, [element]);
    return position;
}