import React from 'react';
import cn from 'classnames';

import './Spinner.scss';

// TODO: Create more base constant types in constant file that these inherit.
type SpinnerSize = 'small' | 'normal' | 'large';
type SpinnerVariant = 'primary' | 'secondary';

interface SpinnerProps {
  size?: SpinnerSize;
  // TODO: Change variant to a color scheme instead.
  variant?: SpinnerVariant;
}

function Spinner(props: SpinnerProps) {
  const {size = 'normal', variant = 'primary'} = props;
  const classes = cn('spinner__dot', {[`spinner__dot--${size}`]: size === 'small' || size === 'large'});
  return (
    <div className={`spinner spinner--${variant}`}>
      <div className={`${classes} spinner__dot--first-dot`} />
      <div className={`${classes} spinner__dot--second-dot`} />
      <div className={`${classes} spinner__dot--third-dot`} />
    </div>
  );
}

export {Spinner};
