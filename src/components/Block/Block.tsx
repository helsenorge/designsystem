import React from 'react';
import cn from 'classnames';
import styles from './Block.scss';

interface BlockProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  isNew?: boolean;
  noPadding?: boolean;
}

function Block({isNew, noPadding, children, ...restProps}: BlockProps): JSX.Element {
  const classes = cn(styles['block'], {[styles['block--new']]: isNew}, {[styles['block--no-padding']]: noPadding});

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
}

export {Block};
