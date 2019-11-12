import React from 'react';
import cx from 'classnames';
import {ButtonProps, Button} from '../Button';

interface ConfirmationButtonProps extends ButtonProps {
  isLoading?: boolean;
}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const ConfirmationButton = React.forwardRef((props: ConfirmationButtonProps, ref: any) => {
  const {children, variant, isLoading = false, ...rest} = props;
  const classes = cx(
    'is-confirmation',
    {[`is-${variant}`]: variant === 'secondary' || variant === 'tertiary'},
    {['is-loading']: isLoading},
  );
  return (
    <Button className={classes} ref={ref} {...rest}>
      {children}
    </Button>
  );
});

export {ConfirmationButton};
