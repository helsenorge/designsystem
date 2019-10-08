import React, {useState} from 'react';
import cn from 'classnames';

import './ConfirmationButton.scss';
import {Spinner} from '../Spinner';

// TODO: Make this inherit from a set of base variant types in constants.
export type ConfirmationButtonVariants = 'primary' | 'secondary' | 'tertiary';

interface ConfirmationButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  // TODO: Implement the better and more dynamic compound components pattern instead of prop icons.
  iconLeft?: any;
  children: React.ReactNode;
  variant?: ConfirmationButtonVariants;
  isLoading?: boolean;
}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const ConfirmationButton = React.forwardRef((props: ConfirmationButtonProps, ref: any) => {
  const [isHoverActive, setIsHoverActive] = useState(false);
  const {children, variant = 'primary', isLoading = false, iconLeft = null, ...rest} = props;
  const classes = cn('confirmation-button', `confirmation-button--${variant}`, {
    [`confirmation-button--icon`]: iconLeft && !isLoading,
  });
  function handleHover(e: any) {
    setIsHoverActive(!isHoverActive);
  }
  return (
    // TODO: Add a 'as' prop so that the button can be either an 'a'-tag or 'button'-tag.
    <button onMouseEnter={handleHover} onMouseLeave={handleHover} className={classes} ref={ref} {...rest}>
      {isLoading ? (
        <Spinner variant="secondary" />
      ) : (
        <>
          {iconLeft}
          <span>{children}</span>
        </>
      )}
    </button>
  );
});

ConfirmationButton.defaultProps = {
  type: 'button',
};

export {ConfirmationButton};
