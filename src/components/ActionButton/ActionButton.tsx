import React from 'react';
import cn from 'classnames';

// import './ActionButton.scss';

// TODO: Make this inherit from a set of base variant types in constants.
export type ActionButtonVariant = 'seconary' | 'tertiary' | string | undefined;

// TODO: Make this inherit attributes form both 'a'-tags and 'button'-tags.
interface ActionButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ActionButtonVariant;
  isLoading?: boolean;
  isDanger?: boolean;
}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const ActionButton = React.forwardRef((props: ActionButtonProps, ref: any) => {
  const {children, variant, isLoading = false, isDanger = false, ...rest} = props;
  const classes = cn(
    'button is-action',
    {[`is-${variant}`]: variant === 'secondary' || variant === 'tertiary'},
    {['is-loading']: isLoading},
    {['is-danger']: isDanger},
  );
  return (
    // TODO: Add a 'as' prop so that the button can be either an 'a'-tag or 'button'-tag.
    <button className={classes} ref={ref} {...rest}>
      <span>{children}</span>
    </button>
  );
});

ActionButton.defaultProps = {
  type: 'button',
};

export {ActionButton};
