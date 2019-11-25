import React from 'react';
import cx from 'classnames';

const Diveboard = React.forwardRef((props: any, ref: any) => {
  const {children, variant, ...rest} = props;
  const classes = cx();
  return (
    <a className={classes} ref={ref} {...rest}>
      {children}
    </a>
  );
});

export {Diveboard};
