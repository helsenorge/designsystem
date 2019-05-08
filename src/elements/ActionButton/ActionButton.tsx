import cn from 'classnames';
import React from 'react';
import {ActionButtonVariants, ButtonVariants} from '../../constants';
import './ActionButton.scss';

interface ActionButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ActionButtonVariants;
}

function ActionButton({children, variant, ...restProps}: ActionButtonProps): JSX.Element {
  const classes = cn(
    'action-button',
    {['action-button--primary']: variant === ButtonVariants.Primary},
    {['action-button--secondary']: variant === ButtonVariants.Secondary},
    {['action-button--tertiary']: variant === ButtonVariants.Tertiary},
  );
  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
}

ActionButton.defaultProps = {
  type: 'button',
  variant: ButtonVariants.Primary,
};

export {ActionButton};
