import React, {useState} from 'react';
import {StyledConfirmationButton} from './ConfirmationButton.styled';
import {HTMLButtonProps, HTMLAnchorProps} from '../../../constants';
import {useIconColor} from '../../../hooks';
import Button, {ButtonVariants} from '../Button/Button';

export type ConfirmationButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type ConfirmationButtonTag = 'a' | 'button';

interface ConfirmationButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  variant?: ConfirmationButtonVariants;
  leftIcon?: any;
  asTag?: ConfirmationButtonTag;
  isLoading?: boolean;
}

const variantMap = {
  primary: 'fill',
  secondary: 'outline',
  tertiary: 'borderless',
};

const ConfirmationButton = React.forwardRef((props: ConfirmationButtonProps, ref: any) => {
  const {
    children,
    variant = 'primary',
    asTag = 'button',
    isLoading = false,
    leftIcon = null,
    disabled = false,
    ...rest
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  // const iconColor = useIconColor({
  //   variant,
  //   variantColor: 'strangulation400',
  //   defaultColor: 'bone',
  //   onHover: {isToggled: isHovered, color: 'strangulation500'},
  //   onDisable: {isToggled: disabled},
  // });
  return (
    <Button
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      // onFocus={() => setIsHovered(true)}
      // onBlur={() => setIsHovered(false)}
      // hasIcon={leftIcon}
      variant={variantMap[variant] as ButtonVariants}
      size="small"
      color="strangulation"
      disabled={disabled}
      asTag={asTag}
      ref={ref}
      {...rest}>
      {/* {leftIcon ? React.cloneElement(leftIcon, {color: iconColor, size: 38, isHovered}) : null} */}
      {children}
    </Button>
  );
});

export default ConfirmationButton;
