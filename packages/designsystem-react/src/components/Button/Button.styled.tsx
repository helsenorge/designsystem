import styled, {css} from 'styled-components';
import {ButtonVariants, ButtonIntents, intentToColor} from './Button';
import {getColor, getHoverColor} from '../../theme/currys/color';
import {PaletteNames} from '../../theme/palette';

interface StyledButtonProps {
  variant: ButtonVariants;
  intent: ButtonIntents;
  inverted: boolean;
  large: boolean;
  fluid: boolean;
  loader: boolean;
  hasIcon: boolean;
  disabled: boolean;
}

const defaultStyle = css`
  padding: 0 2.5rem;
  font-size: 1.25rem;
  font-family: inherit;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  height: 3.125rem;
  outline: none;
  border: 0;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
  }
`;

const fluidStyle = (props: StyledButtonProps) =>
  props.fluid &&
  css`
    width: inherit;
  `;

const largeStyle = (props: StyledButtonProps) =>
  props.large &&
  css`
    height: 4.5rem;
  `;

const variantHoverStyle = css`
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
`;

export const StyledButtonContent = styled('span')`
  display: inline-flex;
  align-items: center;
  height: 100%;
  &:focus {
    border-bottom: 1px solid white;
  }
`;

export const StyledLeftFluidContent = styled('div')`
  display: flex;
`;

// TODO: Move hasIcon logic to seperate styling
// TODO: Clean up a lot of this logic into own styling functions
// For some reason we need to call the props loader instead of loading, reserved word in SC or something.

const fillStyle = (color: PaletteNames, inverted?: boolean) => css`
  border-width: 0.125rem;
  border-style: solid;
  background-color: ${inverted ? 'white' : getColor(color, 500)};
  border-color: ${inverted ? 'white' : getColor(color, 500)};
  color: ${!inverted ? 'white' : getColor(color, 500)};
  &:hover,
  :active,
  :focus {
    background-color: ${inverted ? 'white' : getColor(color, 700)};
    border-color: transparent;
    box-shadow: 0 0 0 0.25rem ${inverted ? 'white' : getColor(color, 700)};
  }
  &:disabled {
    background-color: ${getColor('neutral', 200)};
    border: 0.125rem solid ${getColor('neutral', 200)};
    color: ${getColor('neutral', 600)};
  }
`;

const outlineStyle = (color: PaletteNames, inverted?: boolean) => css`
  border-width: 0.125rem;
  border-style: solid;
  background-color: transparent;
  border-color: ${inverted ? 'white' : getColor(color, 500)};
  color: ${inverted ? 'white' : getColor(color, 500)};
  position: relative;
  ${variantHoverStyle}
  &:hover,
  :active,
  :focus {
    background-color: ${getHoverColor(inverted ? 'white' : color)};
    border-color: transparent;
    &:before {
      border: 0.125rem solid ${getHoverColor(inverted ? 'white' : color)};
    }
    &:after {
      border: 0.125rem solid ${inverted ? 'white' : getColor(color, 700)};
    }
  }
  &:disabled {
    background-color: ${getColor('neutral', 200)};
    border: 0.125rem solid ${getColor('neutral', 200)};
    color: ${getColor('neutral', 600)};
  }
`;

const borderlessStyle = (color: PaletteNames, inverted?: boolean) => css`
  border-width: 0.125rem;
  border-style: solid;
  background-color: transparent;
  border-color: transparent;
  color: ${inverted ? 'white' : getColor(color, 500)};
  position: relative;
  ${variantHoverStyle}
  &:hover,
  :active,
  :focus {
    background-color: ${getHoverColor(inverted ? 'white' : color)};
    border-color: transparent;
    &:before {
      border: 0.125rem solid ${getHoverColor(inverted ? 'white' : color)};
    }
    &:after {
      border: 0.125rem solid ${getHoverColor(inverted ? 'white' : color)};
    }
  }
  &:disabled {
    background-color: ${getColor('neutral', 200)};
    border: 0.125rem solid ${getColor('neutral', 200)};
    color: ${getColor('neutral', 600)};
  }
`;

export const StyledButton = styled('button')<StyledButtonProps>`
  ${defaultStyle}
  ${fluidStyle}
  ${largeStyle}
  ${props => props.variant === 'fill' && fillStyle(intentToColor[props.intent] as PaletteNames, props.inverted)};
  ${props => props.variant === 'outline' && outlineStyle(intentToColor[props.intent] as PaletteNames, props.inverted)};
  ${props =>
    props.variant === 'borderless' && borderlessStyle(intentToColor[props.intent] as PaletteNames, props.inverted)};
  /* ${props =>
    props.fluid &&
    props.hasIcon &&
    css`
      justify-content: space-between;
    `} */
  /* ${props =>
    props.hasIcon &&
    !props.loader &&
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
    `} */
`;
