import React from 'react';
import {HTMLButtonProps, HTMLAnchorProps} from '../../../constants';
import {Colors} from '../../../theme';
import {StyledButton, StyledButtonContent} from './Button.styled';
import Loader from '../../Loader/Loader';
import {Icon} from '../../..';

export type ButtonVariants = 'fill' | 'outline' | 'borderless';
export type ButtonSizes = 'small' | 'medium' | 'large';
export type ButtonColors = 'strangulation' | 'surgical';
export type ButtonTags = 'button' | 'a';

interface ButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  variant: ButtonVariants;
  color: ButtonColors;
  size: ButtonSizes;
  isLoading?: boolean;
  asTag?: ButtonTags;
}

function useIcons(children: React.ReactNode[]) {
  let leftIcon = null;
  let rightIcon = null;
  if ((children[0] as any).type?.displayName === 'Icon') leftIcon = children.shift();
  if ((children[children.length - 1] as any).type?.displayName === 'Icon') rightIcon = children.pop();
  return [leftIcon, rightIcon, children];
}

const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {children, variant, color, size, asTag = 'button', isLoading = false, ...rest} = props;
  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  return (
    <StyledButton
      size={size}
      variant={variant}
      color={color}
      as={asTag}
      hasIcon={!!(leftIcon || rightIcon)}
      ref={ref}
      {...rest}>
      {leftIcon}
      {isLoading ? (
        <Loader color={variant === 'fill' ? 'bone' : (`${color}500` as Colors)} size="tiny" />
      ) : (
        <StyledButtonContent>{restChildren}</StyledButtonContent>
      )}
      {rightIcon}
    </StyledButton>
  );
});

export default Button;
