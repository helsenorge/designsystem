import styled, {css} from 'styled-components';
import {ButtonVariants, ButtonSizes, ButtonColors} from './Button';
import {color, Colors} from '../../../theme';

const buttonSizes = {
  small: '3.125rem',
  medium: '4.375rem',
  large: '5rem',
};

const buttonStyle = css`
  padding: 0 2.5rem;
  font-size: 1.25rem;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 0;
  cursor: pointer;
`;

const fillStyle = (fillColor: ButtonColors) => css`
  background-color: ${color(`${fillColor}500` as Colors)};
  border: 0.125rem solid ${color(`${fillColor}500` as Colors)};
  color: white;
  &:hover,
  :active,
  :focus {
    background-color: ${color(`${fillColor}700` as Colors)};
    border: 0.125rem solid transparent;
    box-shadow: 0 0 0 0.25rem ${color(`${fillColor}700` as Colors)};
  }
`;

// TODO: Move duplicate before/after to seperate style
const outlineStyle = (outlineColor: ButtonColors) => css`
  background-color: transparent;
  color: ${color(`${outlineColor}500` as Colors)};
  border: 0.125rem solid ${color(`${outlineColor}500` as Colors)};
  position: relative;
  &:before {
    content: ' ';
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    right: -0.25rem;
    bottom: -0.25rem;
    border: 0.125rem solid transparent;
  }
  &:after {
    content: ' ';
    position: absolute;
    top: -0.375rem;
    left: -0.375rem;
    right: -0.375rem;
    bottom: -0.375rem;
    border: 0.125rem solid transparent;
  }
  &:hover,
  :active,
  :focus {
    background-color: ${color(`${outlineColor}700` as Colors, {translucent: true})};
    border: 0.125rem solid transparent;
    color: ${color(`${outlineColor}700` as Colors)};
    &:before {
      border: 0.125rem solid ${color(`${outlineColor}700` as Colors)};
    }
    &:after {
      border: 0.125rem solid ${color(`${outlineColor}700` as Colors)};
    }
  }
`;

const borderlessStyle = (borderlessColor: ButtonColors) => css`
  background-color: transparent;
  color: ${color(`${borderlessColor}500` as Colors)};
  border: 0.125rem solid transparent;
  position: relative;
  &:before {
    content: ' ';
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    right: -0.25rem;
    bottom: -0.25rem;
    border: 0.125rem solid transparent;
  }
  &:after {
    content: ' ';
    position: absolute;
    top: -0.375rem;
    left: -0.375rem;
    right: -0.375rem;
    bottom: -0.375rem;
    border: 0.125rem solid transparent;
  }
  &:hover,
  :active,
  :focus {
    background-color: ${color(`${borderlessColor}700` as Colors, {translucent: true})};
    border: 0.125rem solid transparent;
    color: ${color(`${borderlessColor}700` as Colors)};
    &:before {
      border: 0.125rem solid ${color(`${borderlessColor}700` as Colors)};
    }
    &:after {
      border: 0.125rem solid ${color(`${borderlessColor}700` as Colors)};
    }
  }
`;

export const StyledButtonContent = styled('span')`
  display: flex;
  align-items: center;
`;

export const StyledLeftFluidContent = styled('div')`
  display: flex;
`;

// TODO: Move hasIcon logic to seperate styling
// TODO: Clean up a lot of this logic into own styling functions
export const StyledButton = styled('button')<{
  variant: ButtonVariants;
  size: ButtonSizes;
  color: ButtonColors;
  fluid: boolean;
  loading: boolean;
  hasIcon: boolean;
}>`
  ${buttonStyle}
  ${props =>
    props.fluid &&
    css`
      width: 100%;
    `};
  ${props =>
    props.fluid &&
    props.hasIcon &&
    css`
      justify-content: space-between;
    `}
  ${props =>
    props.hasIcon &&
    !props.loading &&
    css`
      padding: 0;
      & .icon {
        margin: 0 0.375rem;
      }
      & > ${StyledButtonContent}:first-child {
        margin-left: 1.5rem;
      }
      & > ${StyledButtonContent}:last-child {
        margin-right: 1.5rem;
      }
    `}
  height: ${props => buttonSizes[props.size]};
  ${props => props.variant === 'fill' && fillStyle(props.color)};
  ${props => props.variant === 'outline' && outlineStyle(props.color)};
  ${props => props.variant === 'borderless' && borderlessStyle(props.color)};
`;
