import cn from 'classnames';
import React from 'react';
import styles from './DisplayButton.module.scss';

type DisplayButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface DisplayButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: DisplayButtonVariant;
}

function DisplayButton(props: DisplayButtonProps) {
  const classes = cn(styles['display-button']);
  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
}

DisplayButton.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export {DisplayButton};
