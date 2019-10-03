import React from 'react';
import cn from 'classnames';

import './StartButton.scss';

export type StartButtonVariants = 'primary' | 'secondary' | 'tertiary';

interface StartButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: StartButtonVariants;
}

const StartButton = React.forwardRef((props: StartButtonProps, ref: any) => {
  const {children, variant = 'primary', ...rest} = props;
  const classes = cn('start-button', `start-button--${variant}`);
  return (
    <button className={classes} ref={ref} {...rest}>
      {children}
    </button>
  );
});

StartButton.defaultProps = {
  type: 'button',
};

export {StartButton};
