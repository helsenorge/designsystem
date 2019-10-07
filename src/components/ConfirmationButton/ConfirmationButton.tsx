import React, {useState} from 'react';
import cn from 'classnames';

import './ConfirmationButton.scss';

export type ConfirmationButtonVariants = 'primary' | 'secondary' | 'tertiary';

interface ConfirmationButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  iconLeft?: any;
  children: React.ReactNode;
  variant?: ConfirmationButtonVariants;
  isLoading?: boolean;
}

const ConfirmationButton = React.forwardRef((props: ConfirmationButtonProps, ref: any) => {
  const [isHoverActive, setIsHoverActive] = useState(false);
  const {children, variant = 'primary', isLoading = false, iconLeft = null, ...rest} = props;
  const classes = cn('confirmation-button', `confirmation-button--${variant}`, {
    [`confirmation-button--icon`]: iconLeft,
  });
  function handleHover(e: any) {
    setIsHoverActive(!isHoverActive);
  }
  return (
    <button onMouseEnter={handleHover} onMouseLeave={handleHover} className={classes} ref={ref} {...rest}>
      {iconLeft}
      <span>{children}</span>
    </button>
  );
});

ConfirmationButton.defaultProps = {
  type: 'button',
};

export {ConfirmationButton};
