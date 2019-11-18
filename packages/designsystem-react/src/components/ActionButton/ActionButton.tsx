import React from 'react';
import cx from 'classnames';
import {ButtonProps, Button} from '../Button';

// trigger deploy

interface ActionButtonProps extends ButtonProps {
  isDanger?: boolean;
}

const ActionButton = React.forwardRef((props: ActionButtonProps, ref: any) => {
  const {children, variant, isDanger = false, ...rest} = props;
  const classes = cx(
    'is-action',
    {[`is-${variant}`]: variant === 'secondary' || variant === 'tertiary'},
    {['is-danger']: isDanger},
  );
  return (
    <Button className={classes} ref={ref} {...rest}>
      {children}
    </Button>
  );
});

export {ActionButton};
