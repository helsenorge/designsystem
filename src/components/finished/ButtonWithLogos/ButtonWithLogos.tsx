import React from 'react';
import styles from './ButtonWithLogos.scss';

interface ButtonWithLogosProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
  logoLeft?: string;
  logoRight?: string;
}

function ButtonWithLogos({children, logoLeft, logoRight, ...restProps}: ButtonWithLogosProps): JSX.Element {
  function attachLogoStyling(path?: string) {
    return path ? {background: `url(${path}) center no-repeat`} : {};
  }
  return (
    <button className={styles['button-with-logos']} {...restProps}>
      <span className={styles['button-with-logos__logo--left']} style={attachLogoStyling(logoLeft)} />
      {children}
      <span className={styles['button-with-logos__logo--right']} style={attachLogoStyling(logoRight)} />
    </button>
  );
}

ButtonWithLogos.defaultProps = {
  type: 'button',
};

export default ButtonWithLogos;
