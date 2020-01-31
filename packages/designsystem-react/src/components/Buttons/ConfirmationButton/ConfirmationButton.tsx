import React from 'react';
import {HTMLButtonProps, HTMLAnchorProps} from '../../../constants';
import Button, {ButtonVariants} from '../Button/Button';

export type ConfirmationButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type ConfirmationButtonTag = 'a' | 'button';

interface ConfirmationButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  variant?: ConfirmationButtonVariants;
  htmlTag?: ConfirmationButtonTag;
  loading?: boolean;
  onClick?: () => void;
}

const variantMap = {
  primary: 'fill',
  secondary: 'outline',
  tertiary: 'borderless',
};

const ConfirmationButton = React.forwardRef((props: ConfirmationButtonProps, ref: any) => {
  const {children, variant = 'primary', htmlTag = 'button', disabled = false, loading, ...rest} = props;
  return (
    <Button
      variant={variantMap[variant] as ButtonVariants}
      size="small"
      color="strangulation"
      disabled={disabled}
      htmlTag={htmlTag}
      loading={loading}
      ref={ref}
      {...rest}>
      {children}
    </Button>
  );
});

export default ConfirmationButton;
