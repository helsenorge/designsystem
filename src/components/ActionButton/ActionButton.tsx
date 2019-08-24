import cn from 'classnames';
import React from 'react';
import {ButtonVariants} from '../../constants';
import './ActionButton.scss';

interface ActionButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ActionButtonVariants;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({children, variant = ButtonVariants.Primary, ...restProps}, ref): JSX.Element => {
    const classes = cn(
      'action-button',
      {'action-button--primary': variant === ButtonVariants.Primary},
      {'action-button--secondary': variant === ButtonVariants.Secondary},
    );

    return (
      <button ref={ref} className={classes} {...restProps}>
        {children}
      </button>
    );
  },
);

ActionButton.defaultProps = {
  type: 'button',
};

type ActionButtonVariants = (typeof ButtonVariants)[keyof typeof ButtonVariants];

export {ActionButton};
