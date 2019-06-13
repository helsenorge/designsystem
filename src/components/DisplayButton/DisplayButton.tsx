import React from 'react';
import cn from 'classnames';
import styles from './DisplayButton.scss';
import {ButtonVariants} from '../../constants';

interface DisplayButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: string;
  onClick?: () => void;
  rightIcon?: string;
  variant?: DisplayButtonVariants;
}

const DisplayButton = React.forwardRef<HTMLButtonElement, DisplayButtonProps>(
  ({children, variant = ButtonVariants.Primary, leftIcon, rightIcon, fullWidth, ...restProps}, ref): JSX.Element => {
    // function attachIconStyling(path?: string) {
    //   return path ? {background: `url(${path}) center no-repeat`} : {};
    // }

    const classes = cn(
      styles['display-button'],
      {[styles['display-button--primary']]: variant === ButtonVariants.Primary},
      {[styles['display-button--secondary']]: variant === ButtonVariants.Secondary},
      {[styles['display-button--tertiary']]: variant === ButtonVariants.Tertiary},
      {[styles['display-button--full-width']]: fullWidth},
    );

    return (
      <button ref={ref} className={classes} {...restProps}>
        {React.Children.map(children, child => {
          return <span className={styles['display-button__content']}>{child}</span>;
        })}
        {/* {leftIcon ? <span className={styles['display-button__icon-left']} style={attachIconStyling(leftIcon)} /> : null} */}
        {/* {React.Children.map(children, (child => {
        console.log('child', child);
      }))} */}
        {/* <span className={styles['display-button__content']}>{children}</span>
      {rightIcon ? (
        <span className={styles['display-button__icon-right']} style={attachIconStyling(rightIcon)} />
      ) : null} */}
      </button>
    );
  },
);

DisplayButton.defaultProps = {
  type: 'button',
};

type DisplayButtonVariants = (typeof ButtonVariants)[keyof typeof ButtonVariants];

export {DisplayButton};
