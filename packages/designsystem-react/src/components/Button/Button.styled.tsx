import styled, {css} from 'styled-components';
import {ButtonVariants, ButtonIntents, intentToColor} from './Button';
import {getColor, getHoverColor} from '../../theme/currys/color';
import {PaletteNames} from '../../theme/palette';

interface StyledButtonProps {
  variant: ButtonVariants;
  intent: ButtonIntents;
  large: boolean;
  fluid: boolean;
  loader: boolean;
  hasIcon: boolean;
}

const defaultStyle = css`
  padding: 0 2.5rem;
  font-size: 1.25rem;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 3.125rem;
  outline: none;
  border: 0;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
  }
`;

const fillStyle = (fillColor: PaletteNames) => css`
  background-color: ${getColor(fillColor, 500)};
  border: 0.125rem solid ${getColor(fillColor, 500)};
  color: white;
  &:hover,
  :active,
  :focus {
    background-color: ${getColor(fillColor, 700)};
    border: 0.125rem solid transparent;
    box-shadow: 0 0 0 0.25rem ${getColor(fillColor, 700)};
  }
  &:disabled {
    background-color: ${getColor('neutral', 200)};
    border: 0.125rem solid ${getColor('neutral', 200)};
    color: ${getColor('neutral', 600)};
  }
`;

const fluidStyle = (props: StyledButtonProps) =>
  props.fluid &&
  css`
    width: 100%;
  `;

const largeStyle = (props: StyledButtonProps) =>
  props.large &&
  css`
    height: 4.735rem;
  `;

// const fillOffsetTextColor = (color: ButtonColors) => (color === 'white' ? 'black' : 'white');

// TODO: Move duplicate before/after to seperate style
const outlineStyle = (outlineColor: PaletteNames) => css`
  background-color: transparent;
  color: ${getColor(outlineColor, 500)};
  border: 0.125rem solid ${getColor(outlineColor, 500)};
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
    background-color: ${getHoverColor(outlineColor)};
    border: 0.125rem solid transparent;
    color: ${getColor(outlineColor, 700)};
    &:before {
      border: 0.125rem solid ${getColor(outlineColor, 700)};
    }
    &:after {
      border: 0.125rem solid ${getColor(outlineColor, 700)};
    }
  }
  &:disabled {
    background-color: ${getColor('neutral', 50)};
    border: 0.125rem solid ${getColor('neutral', 600)};
    color: ${getColor('neutral', 600)};
  }
`;

const borderlessStyle = (borderlessColor: PaletteNames) => css`
  background-color: transparent;
  color: ${getColor(borderlessColor, 500)};
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
    background-color: ${getHoverColor(borderlessColor)};
    border: 0.125rem solid transparent;
    color: ${getColor(borderlessColor, 700)};
    &:before {
      border: 0.125rem solid ${getColor(borderlessColor, 700)};
    }
    &:after {
      border: 0.125rem solid ${getColor(borderlessColor, 700)};
    }
  }
  &:disabled {
    background-color: ${getColor('neutral', 50)};
    border: 0.125rem solid ${getColor('neutral', 600)};
    color: ${getColor('neutral', 600)};
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
// For some reason we need to call the props loader instead of loading, reserved word in SC or something.
export const StyledButton = styled('button')<StyledButtonProps>`
  ${defaultStyle}
  ${fluidStyle}
  ${largeStyle}
  ${props =>
    props.large &&
    css`
      height: 4.375rem;
    `}
  ${props =>
    props.fluid &&
    props.hasIcon &&
    css`
      justify-content: space-between;
    `}
  ${props =>
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
    `}
  ${props => props.variant === 'fill' && fillStyle(intentToColor[props.intent] as PaletteNames)};
  ${props => props.variant === 'outline' && outlineStyle(intentToColor[props.intent] as PaletteNames)};
  ${props => props.variant === 'borderless' && borderlessStyle(intentToColor[props.intent] as PaletteNames)};
`;
