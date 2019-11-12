import React from 'react';
import cx from 'classnames';
import {Button, ButtonProps} from '../Button';

interface CommonButtonProps extends ButtonProps {}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const CommonButton = React.forwardRef((props: CommonButtonProps, ref: any) => {
  const {children, variant, ...rest} = props;
  const classes = cx('is-common', {[`is-${variant}`]: variant === 'secondary' || variant === 'tertiary'});
  return (
    <Button className={classes} ref={ref} {...rest}>
      {children}
    </Button>
  );
});

export {CommonButton};
