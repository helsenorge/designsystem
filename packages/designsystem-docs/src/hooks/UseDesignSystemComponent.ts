import { useEffect, useState } from 'react';
import React from 'react';

// const designSystem = {
//     ActionButton
// }

export default function useDesignSystemComponent(scope: string): JSX.Element {
    const [component, setComponent] = useState(null);
    useEffect(() => {
        if(scope) {
            // const wat = React.createElement(scope);
            // console.log('her?', designSystem.ActionButton);
            // console.log('lol', component);
        }
    }, [scope]);
    return component;
}