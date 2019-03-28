import cn from 'classnames';
import React from 'react';
import {ButtonVariants} from '../../constants';
import styles from './ActionButton.module.scss';

type ActionButtonVariant = ButtonVariants.Primary | ButtonVariants.Secondary;

interface ActionButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ActionButtonVariant;
}

function ActionButton(props: ActionButtonProps) {
  const classes = cn(styles['action-button'], {
    [styles['action-button--secondary']]: props.variant === ButtonVariants.Secondary,
  });
  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
}

ActionButton.defaultProps = {
  type: 'button',
  variant: ButtonVariants.Primary,
};

export {ActionButton};
