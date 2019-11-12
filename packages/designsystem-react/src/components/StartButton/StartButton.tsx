import React from 'react';
import cx from 'classnames';
import {ButtonProps, Button} from '../Button';

interface StartButtonProps extends ButtonProps {}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const StartButton = React.forwardRef((props: StartButtonProps, ref: any) => {
  const {children, variant, ...rest} = props;
  const classes = cx('is-start', {[`is-${variant}`]: variant === 'secondary' || variant === 'tertiary'});
  return (
    <Button className={classes} ref={ref} {...rest}>
      {children}
    </Button>
  );
});

export {StartButton};
