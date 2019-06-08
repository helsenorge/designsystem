import React from 'react';
import cn from 'classnames';
import styles from './DisplayButton.scss';
import {ButtonVariants} from '../../../constants';

interface DisplayButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: string;
  onClick?: () => void;
  rightIcon?: string;
  variant?: DisplayButtonVariants;
}

function DisplayButton({
  children,
  variant = ButtonVariants.Primary,
  leftIcon,
  rightIcon,
  fullWidth,
  ...restProps
}: DisplayButtonProps): JSX.Element {
  function attachIconStyling(path?: string) {
    return path ? {background: `url(${path}) center no-repeat`} : {};
  }

  const classes = cn(
    styles['display-button'],
    {[styles['display-button--primary']]: variant === ButtonVariants.Primary},
    {[styles['display-button--secondary']]: variant === ButtonVariants.Secondary},
    {[styles['display-button--tertiary']]: variant === ButtonVariants.Tertiary},
    {[styles['display-button--full-width']]: fullWidth},
  );

  return (
    <button className={classes} {...restProps}>
      {leftIcon ? <span className={styles['display-button__icon-left']} style={attachIconStyling(leftIcon)} /> : null}
      <span className={styles['display-button__content']}>{children}</span>
      {rightIcon ? (
        <span className={styles['display-button__icon-right']} style={attachIconStyling(rightIcon)} />
      ) : null}
    </button>
  );
}

DisplayButton.defaultProps = {
  type: 'button',
};

export type DisplayButtonVariants = (typeof ButtonVariants)[keyof typeof ButtonVariants];
export default DisplayButton;
