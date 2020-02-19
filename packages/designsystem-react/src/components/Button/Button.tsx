import React, {useState} from 'react';
import {HTMLButtonProps, HTMLAnchorProps} from '../../constants';
import {StyledButton, StyledButtonContent, StyledLeftFluidContent} from './Button.styled';
import Loader from '../Loader';
import {getColor} from '../../theme/currys/color';
import {PaletteNames} from '../../theme/palette';

export type ButtonVariants = 'fill' | 'outline' | 'borderless';
export type ButtonSizes = 'small' | 'medium' | 'large';
export type ButtonColors = PaletteNames | 'white' | 'black';
export type ButtonTags = 'button' | 'a';

interface ButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  color?: ButtonColors;
  size?: ButtonSizes;
  danger?: boolean;
  fluid?: boolean;
  loading?: boolean;
  htmlTag?: ButtonTags;
  onClick?: () => void;
}

// TODO: Consider making this a shared hook
export function useIcons(children: React.ReactNode[]) {
  let leftIcon = null;
  let rightIcon = null;
  if ((children[0] as any).type?.displayName === 'Icon') leftIcon = children.shift();
  if ((children[children.length - 1] as any).type?.displayName === 'Icon') rightIcon = children.pop();
  return [leftIcon, rightIcon, children];
}

const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {
    children,
    variant = 'fill',
    color = 'neutral',
    size = 'small',
    htmlTag = 'button',
    danger = false,
    loading = false,
    fluid = false,
    ...rest
  } = props;
  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  const [isHovered, setIsHovered] = useState(false);
  // TODO: Considering expanding the Icon props to including color logic like this
  const iconColor = variant === 'fill' ? 'white' : color;
  return (
    <StyledButton
      onMouseEnter={() => setIsHovered(true)}
      onFocus={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
      size={size}
      variant={variant}
      color={color}
      as={htmlTag}
      hasIcon={!!(leftIcon || rightIcon)}
      fluid={fluid}
      loader={loading}
      ref={ref}
      {...rest}>
      {/* TODO: Consider splitting this up into render-functions. This is a mess */}
      {loading ? (
        <Loader color={variant === 'fill' ? 'white' : getColor(color, 500)} size="tiny" />
      ) : (
        <>
          {fluid ? (
            <StyledLeftFluidContent>
              {leftIcon
                ? React.cloneElement(leftIcon as React.ReactElement, {
                    color: iconColor,
                    isHovered,
                  })
                : null}
              <StyledButtonContent>{restChildren}</StyledButtonContent>
            </StyledLeftFluidContent>
          ) : (
            <>
              {leftIcon
                ? React.cloneElement(leftIcon as React.ReactElement, {
                    color: iconColor,
                    isHovered,
                  })
                : null}
              <StyledButtonContent>{restChildren}</StyledButtonContent>
            </>
          )}
          {rightIcon
            ? React.cloneElement(rightIcon as React.ReactElement, {
                color: iconColor,
                isHovered,
              })
            : null}
        </>
      )}
    </StyledButton>
  );
});

export default Button;
