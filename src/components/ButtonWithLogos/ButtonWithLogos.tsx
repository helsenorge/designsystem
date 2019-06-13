import React from 'react';
import styles from './ButtonWithLogos.scss';

interface ButtonWithLogosProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  logoLeft?: string;
  logoRight?: string;
  onClick?: () => void;
}

const ButtonWithLogos = React.forwardRef<HTMLButtonElement, ButtonWithLogosProps>(
  ({children, logoLeft, logoRight, ...restProps}, ref): JSX.Element => {
    function attachLogoStyling(path?: string) {
      return path ? {background: `url(${path}) center no-repeat`} : {};
    }

    return (
      <button ref={ref} className={styles['button-with-logos']} {...restProps}>
        {logoLeft ? (
          <span className={styles['button-with-logos__logo--left']} style={attachLogoStyling(logoLeft)} />
        ) : null}
        {children}
        {logoRight ? (
          <span className={styles['button-with-logos__logo--right']} style={attachLogoStyling(logoRight)} />
        ) : null}
      </button>
    );
  },
);

ButtonWithLogos.defaultProps = {
  type: 'button',
};

export {ButtonWithLogos};
