import cn from 'classnames';
import React from 'react';
import {ButtonVariants} from '../../../constants';
import styles from './ActionButton.scss';

interface ActionButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ActionButtonVariants;
}

function ActionButton({children, variant = ButtonVariants.Primary, ...restProps}: ActionButtonProps): JSX.Element {
  const classes = cn(
    styles['action-button'],
    {[styles['action-button--primary']]: variant === ButtonVariants.Primary},
    {[styles['action-button--secondary']]: variant === ButtonVariants.Secondary},
    {[styles['action-button--tertiary']]: variant === ButtonVariants.Tertiary},
  );

  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
}

ActionButton.defaultProps = {
  type: 'button',
};

export type ActionButtonVariants = (typeof ButtonVariants)[keyof typeof ButtonVariants];
export default ActionButton;
