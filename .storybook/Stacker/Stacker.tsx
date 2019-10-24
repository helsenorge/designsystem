import React, { CSSProperties } from 'react';

interface StackerProps {
    children: React.ReactNode;
    vertical?: boolean;
}



function Stacker(props: StackerProps) {
    const {children, vertical = false} = props;
    const style: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: vertical ? 'auto' : `repeat(${React.Children.count(children)}, 1fr)`,
        alignItems: 'center'
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Stacker;