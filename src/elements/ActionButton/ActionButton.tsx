import React from 'react';
import cn from 'classnames';

import styles from './ActionButton.module.scss';

interface ActionButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
}

function ActionButton(props: ActionButtonProps) {
    const classes = cn(styles.button);
    return (
        <button className={classes} {...props}>
            {props.children}
        </button>
    )
}

ActionButton.defaultProps = {
    secondary: false,
    type: 'button'
}

export { ActionButton };