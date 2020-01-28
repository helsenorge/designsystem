import React, {useState} from 'react';
import {StyledFunctionButton} from './FunctionButton.styled';
import {HTMLButtonProps, HTMLAnchorProps} from '../../../constants';
import {useIconColor} from '../../../hooks';

export type FunctionButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type FunctionButtonTag = 'button' | 'a';

interface FunctionButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  variant?: FunctionButtonVariants;
  asTag?: FunctionButtonTag;
  isNegative?: boolean;
  leftIcon: any;
}

const FunctionButton = React.forwardRef((props: FunctionButtonProps, ref: any) => {
  const {
    children,
    variant = 'primary',
    asTag = 'button',
    disabled = false,
    leftIcon = null,
    isNegative = false,
    ...rest
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const iconColor = useIconColor({
    variant,
    variantColor: 'surgical500',
    defaultColor: 'surgical500',
    onHover: {isToggled: isHovered, color: 'surgical400'},
    onDisable: {isToggled: disabled},
  });
  return (
    <StyledFunctionButton
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      variant={variant}
      isNegative={isNegative}
      as={asTag}
      disabled={disabled}
      ref={ref}
      {...rest}>
      {leftIcon
        ? React.cloneElement(leftIcon, {color: isNegative ? 'blood200' : iconColor, size: 38, isHovered})
        : null}
      {variant !== 'tertiary' ? children : null}
    </StyledFunctionButton>
  );
});

export default FunctionButton;
