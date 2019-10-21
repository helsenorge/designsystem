import React from 'react';
import cn from 'classnames';

// TODO: Make this inherit from a set of base variant types in constants.
export type CommonButtonVariant = string | 'seconary' | 'tertiary' | undefined | null;

// TODO: Make this inherit attributes form both 'a'-tags and 'button'-tags.
interface CommonButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  variant?: CommonButtonVariant;
  isLoading?: boolean;
}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const CommonButton = React.forwardRef((props: CommonButtonProps, ref: any) => {
  const {children, variant, isLoading = false, ...rest} = props;
  const classes = cn(
    'button is-common',
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

CommonButton.defaultProps = {
  type: 'button',
};

export {CommonButton};
