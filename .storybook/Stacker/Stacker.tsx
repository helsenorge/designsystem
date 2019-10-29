import React, { CSSProperties } from 'react';

import './Stacker.scss';

interface StackerProps {
    children: React.ReactNode;
    vertical?: boolean;
}

function Stacker(props: StackerProps) {
    const {children, vertical = false} = props;
    const style: CSSProperties = {
        gridTemplateColumns: vertical ? 'auto' : `repeat(${React.Children.count(children)}, 1fr)`,
    }
    return (
        <div className="storybook-stacker" style={style}>
            {children}
        </div>
    )
}

export default Stacker;