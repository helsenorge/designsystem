import React from 'react';

interface ActionButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
}

function ActionButton(props: ActionButtonProps) {
    return (
        <button>
            {props.children}
        </button>
    )
}

export { ActionButton };