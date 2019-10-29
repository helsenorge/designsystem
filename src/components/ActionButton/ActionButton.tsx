import React from 'react';
import cn from 'classnames';
import {ButtonProps, Button} from '../Button';

interface ActionButtonProps extends ButtonProps {
  isDanger?: boolean;
}

const ActionButton = React.forwardRef((props: ActionButtonProps, ref: any) => {
  const {children, variant, isDanger = false, ...rest} = props;
  const classes = cn(
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
