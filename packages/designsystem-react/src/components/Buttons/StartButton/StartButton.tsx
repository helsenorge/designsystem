import React, {useState} from 'react';
import {HTMLButtonProps, HTMLAnchorProps} from '../../../constants';
import Button, {ButtonVariants, ButtonSizes} from '../Button/Button';

type StartButtonVariants = 'primary' | 'secondary' | 'tertiary';
type StartButtonTag = 'a' | 'button';

interface StartButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  variant?: StartButtonVariants;
  children: React.ReactNode;
  htmlTag?: StartButtonTag;
  loading?: boolean;
  onClick?: () => void;
}

const variantMap = {
  primary: 'fill',
  secondary: 'fill',
  tertiary: 'outline',
};

const sizeMap = {
  primary: 'large',
  secondary: 'medium',
  tertiary: 'medium',
};

const StartButton = React.forwardRef((props: StartButtonProps, ref: any) => {
  const {children, variant = 'primary', htmlTag = 'button', loading, ...rest} = props;
  return (
    <Button
      variant={variantMap[variant] as ButtonVariants}
      size={sizeMap[variant] as ButtonSizes}
      htmlTag={htmlTag}
      loading={loading}
      color="vein"
      {...rest}>
      {children}
    </Button>
  );
});

export default StartButton;
