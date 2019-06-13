import * as React from 'react';
import * as classNames from 'classnames';
import './index.scss';

interface Props {
  onClick: () => void;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  children?: any;
  /** bruk 'arrowLeft' eller path til custom svg */
  leftIcon?: string;
  /** bruk 'arrowRight' eller path til custom svg */
  rightIcon?: string;
}

export const DisplayButton: React.SFC<Props> = ({
  onClick,
  children,
  primary,
  secondary,
  tertiary,
  fullWidth,
  disabled,
  className,
  leftIcon,
  rightIcon,
}) => {
  /* TODO: comment the props to it appears in toolkit */
  // using primary as a fallback if neither primary secondary or tertiary are used
  if (!primary && !secondary && !tertiary) {
    primary = true;
  }

  const classes = classNames(
    'atom_displaybutton',
    {'atom_displaybutton--primary': primary},
    {'atom_displaybutton--secondary': secondary},
    {'atom_displaybutton--tertiary': tertiary},
    {'atom_displaybutton--fullwidth': fullWidth},
    {'atom_displaybutton--haslefticon': leftIcon},
    {'atom_displaybutton--hasrighticon': rightIcon},
    className,
  );

  let leftIconUrl: string = '';
  if (leftIcon) {
    if (leftIcon === 'arrowLeft' && primary) {
      leftIconUrl = require('./../../../../img/icons/_functional/arrow-left-thin_white.svg');
    } else if (leftIcon === 'arrowLeft' && secondary) {
      leftIconUrl = require('./../../../../img/icons/_functional/arrow-left-thin_blue.svg');
    } else {
      leftIconUrl = leftIcon;
    }
  }

  let rightIconUrl: string = '';
  if (rightIcon) {
    if (rightIcon === 'arrowRight' && primary) {
      rightIconUrl = require('./../../../../img/icons/_functional/arrow-right-thin_white.svg');
    } else if (leftIcon === 'arrowRight' && (secondary || tertiary)) {
      rightIconUrl = require('./../../../../img/icons/_functional/arrow-right-thin_white.svg');
    } else {
      rightIconUrl = rightIcon;
    }
  }

  return (
    <button type="button" onClick={onClick} className={classes} disabled={disabled}>
      {leftIcon && (
        <span
          className="atom_displaybutton-icon-left"
          style={{
            backgroundImage: `url(${leftIconUrl})`,
          }}
        />
      )}
      <span className="atom_displaybutton-text">{children}</span>
      {rightIcon && (
        <span
          className="atom_displaybutton-icon-right"
          style={{
            backgroundImage: `url(${rightIconUrl})`,
          }}
        />
      )}
    </button>
  );
};

export default DisplayButton;
