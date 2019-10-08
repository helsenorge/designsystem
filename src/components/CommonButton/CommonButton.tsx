import React, {useState} from 'react';
import cn from 'classnames';

import './CommonButton.scss';
import {Spinner} from '../Spinner';

// TODO: Make this inherit from a set of base variant types in constants.
export type CommonButtonVariants = 'primary' | 'secondary' | 'tertiary';

interface CommonButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  variant?: CommonButtonVariants;
  isLoading?: boolean;
}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const CommonButton = React.forwardRef((props: CommonButtonProps, ref: any) => {
  const [isHoverActive, setIsHoverActive] = useState(false);
  const {children, variant = 'primary', isLoading = false, ...rest} = props;
  const classes = cn('common-button', `common-button--${variant}`);
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
          <span>{children}</span>
        </>
      )}
    </button>
  );
});

CommonButton.defaultProps = {
  type: 'button',
};

export {CommonButton};
