import React from 'react';
import cn from 'classnames';

import './StartButton.scss';

export type StartButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type StartButtonElementType = 'a' | 'button';

interface StartButtonProps {
  as?: StartButtonElementType;
  children?: React.ReactNode;
  variant?: StartButtonVariants;
}

export const StartButton = React.forwardRef((props: StartButtonProps, ref: any) => {
  const {as = 'a', children, variant = 'primary'} = props;
  const ElementType = as;
  const classes = cn('start-button', `start-button--${variant}`);
  return (
    <ElementType className={classes} ref={ref}>
      {children}
    </ElementType>
  );
});
