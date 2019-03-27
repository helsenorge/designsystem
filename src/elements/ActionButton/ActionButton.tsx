import cn from 'classnames';
import React from 'react';
import styles from './ActionButton.module.scss';

type ActionButtonVariant = 'primary' | 'secondary';

interface ActionButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ActionButtonVariant;
}

function ActionButton(props: ActionButtonProps) {
  const classes = cn(styles.button, {[styles['button--secondary']]: props.variant === 'secondary'});
  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
}

ActionButton.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export {ActionButton};
