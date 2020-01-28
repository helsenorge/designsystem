import React, {useState} from 'react';
import {HTMLAnchorProps, HTMLButtonProps} from '../../../constants';
import {StyledCommonButton} from './CommonButton.styled';
import {useIconColor} from '../../../hooks';
import Button, {ButtonVariants, ButtonSizes} from '../Button/Button';

export type CommonButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type CommonButtonTag = 'button' | 'a';

interface CommonButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  variant?: CommonButtonVariants;
  asTag?: CommonButtonTag;
  leftIcon?: any;
  rightIcon?: any;
}

const variantMap = {
  primary: 'fill',
  secondary: 'outline',
  tertiary: 'borderless',
};

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const CommonButton = React.forwardRef((props: CommonButtonProps, ref: any) => {
  const {
    children,
    variant = 'primary',
    asTag = 'button',
    leftIcon = null,
    rightIcon = null,
    disabled = false,
    ...rest
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const iconColor = useIconColor({
    variant,
    variantColor: 'surgical500',
    defaultColor: 'bone',
    onHover: {isToggled: isHovered, color: 'surgical400'},
    onDisable: {isToggled: disabled},
  });
  return (
    <Button
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      // onFocus={() => setIsHovered(true)}
      // onBlur={() => setIsHovered(false)}
      // hasIcon={leftIcon || rightIcon}
      disabled={disabled}
      variant={variantMap[variant] as ButtonVariants}
      size="small"
      color="surgical"
      asTag={asTag}
      ref={ref}
      {...rest}>
      {/* {leftIcon ? React.cloneElement(leftIcon, {color: iconColor, size: 38, isHovered}) : null} */}
      {children}
      {/* {rightIcon ? React.cloneElement(leftIcon, {color: iconColor, size: 38, isHovered}) : null} */}
    </Button>
  );
});

export default CommonButton;
