import React from 'react';
import cn from 'classnames';

import './Spinner.scss';

export type SpinnerSize = 'small' | 'normal' | 'large';

interface SpinnerProps {
  size?: SpinnerSize;
}

function Spinner(props: SpinnerProps) {
  const {size = 'normal'} = props;
  const classes = cn('spinner__dot', {[`spinner__dot--${size}`]: size === 'small' || size === 'large'});
  return (
    <div className="spinner">
      <div className={`${classes} spinner__dot--first-dot`} />
      <div className={`${classes} spinner__dot--second-dot`} />
      <div className={`${classes} spinner__dot--third-dot`} />
    </div>
  );
}

export {Spinner};
