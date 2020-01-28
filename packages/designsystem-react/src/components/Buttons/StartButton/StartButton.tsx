import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {Icon} from '../../Icons';
import {color, Colors} from '../../../theme';
import {HTMLButtonProps, HTMLAnchorProps} from '../../../constants';
import Button, {ButtonVariants, ButtonSizes} from '../Button/Button';

type StartButtonVariants = 'primary' | 'secondary' | 'tertiary';
type StartButtonTag = 'a' | 'button';

interface StartButtonProps {
  variant?: StartButtonVariants;
  children: React.ReactNode;
  leftIcon: any;
  asTag?: StartButtonTag;
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
  const {children, variant = 'primary', asTag = 'button', leftIcon, ...rest} = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      variant={variantMap[variant] as ButtonVariants}
      size={sizeMap[variant] as ButtonSizes}
      asTag={asTag}
      color="surgical"
      {...rest}>
      {children}
    </Button>
  );
});

export default StartButton;
