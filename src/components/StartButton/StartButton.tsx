import React from 'react';
import cn from 'classnames';

// import './StartButton.scss';

// TODO: Make this inherit from a set of base variant types in constants.
export type StartButtonVariant = 'secondary' | 'tertiary' | string | undefined;

interface StartButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  variant?: StartButtonVariant;
  isLoading?: boolean;
}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const StartButton = React.forwardRef((props: StartButtonProps, ref: any) => {
  const {children, variant, isLoading = false, ...rest} = props;
  const classes = cn(
    'button is-start',
    {[`is-${variant}`]: variant === 'secondary' || variant === 'tertiary'},
    {['is-loading']: isLoading},
  );
  return (
    // TODO: Add a 'as' prop so that the button can be either an 'a'-tag or 'button'-tag.
    <button className={classes} ref={ref} {...rest}>
      <span>{children}</span>
    </button>
  );
});

StartButton.defaultProps = {
  type: 'button',
};

export {StartButton};
