import React, {useState} from 'react';
import cn from 'classnames';

import './CommonButton.scss';
import {Spinner} from '../Spinner';

// TODO: Make this inherit from a set of base variant types in constants.
export type CommonButtonVariants = 'primary' | 'secondary' | 'tertiary';

interface CommonButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  // TODO: Implement the better and more dynamic compound components pattern instead of prop icons.
  iconLeft?: any;
  iconRight?: any;
  children: React.ReactNode;
  variant?: CommonButtonVariants;
  isLoading?: boolean;
}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const CommonButton = React.forwardRef((props: CommonButtonProps, ref: any) => {
  const [isHoverActive, setIsHoverActive] = useState(false);
  const {children, variant = 'primary', isLoading = false, iconLeft = null, iconRight = null, ...rest} = props;
  const classes = cn('common-button', `common-button--${variant}`, {
    [`common-button--icon`]: (iconLeft || iconRight) && !isLoading,
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
          {iconRight}
        </>
      )}
    </button>
  );
});

CommonButton.defaultProps = {
  type: 'button',
};

export {CommonButton};
