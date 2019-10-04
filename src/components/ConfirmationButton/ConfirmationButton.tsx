import React from 'react';
import cn from 'classnames';

import './ConfirmationButton.scss';

export type ConfirmationButtonVariants = 'primary' | 'secondary' | 'tertiary';

interface ConfirmationButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ConfirmationButtonVariants;
}

const ConfirmationButton = React.forwardRef((props: ConfirmationButtonProps, ref: any) => {
  const {children, variant = 'primary', ...rest} = props;
  const classes = cn('confirmation-button', `confirmation-button--${variant}`);
  return (
    <button className={classes} ref={ref} {...rest}>
      {children}
    </button>
  );
});

ConfirmationButton.defaultProps = {
  type: 'button',
};

export {ConfirmationButton};
