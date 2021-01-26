import styled, {css} from 'styled-components';
import {ButtonVariants, ButtonIntents, intentToColor} from './Button';
import {screen} from '../../theme/grid';
import {getColor, getHoverColor} from '../../theme/currys/color';
import {palette, PaletteNames} from '../../theme/palette';

interface StyledButtonProps {
  variant: ButtonVariants;
  intent: ButtonIntents;
  inverted: boolean;
  large: boolean;
  fluid: boolean;
  loader: boolean;
  hasIcon: boolean;
  disabled: boolean;
  ellipsis: boolean;
}

const defaultStyle = css`
  padding: 0 1.5rem;
  min-height: 2.5rem;
  font-size: 1.125rem;
  font-family: inherit;
  font-weight: 600;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: 0;
  letter-spacing: unset;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
  }
  @media ${screen.md} {
    min-height: 3.125rem;
    font-size: 1.25rem;
    padding: 0 2.5rem;
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
    min-height: 3.5rem;
    font-size: 1.125rem;
    /* padding: 0 0.5rem; */
    @media ${screen.md} {
      min-height: 4.5rem;
    }
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

export const StyledButtonWrapper = styled('span')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: 100%;
  &:focus {
    border-bottom: 1px solid ${getColor('white')};
  }
`;

export const StyledLeftFluidContent = styled('div')<{hasIcon: boolean}>`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  ${props =>
    !props.hasIcon &&
    css`
      justify-content: center;
    `};
  ${props =>
    props.hasIcon &&
    css`
      text-align: left;
    `};
`;

export const StyledButtonContent = styled('span')`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  white-space: normal;
`;

// TODO: Move hasIcon logic to seperate styling
// TODO: Clean up a lot of this logic into own styling functions
// For some reason we need to call the props loader instead of loading, reserved word in SC or something.

const fillStyle = (color: PaletteNames, inverted?: boolean) => css`
  border-width: 0.125rem;
  border-style: solid;
  background-color: ${inverted ? getColor('white') : getColor(color, 500)};
  border-color: ${inverted ? getColor('white') : getColor(color, 500)};
  color: ${!inverted ? getColor('white') : getColor(color, 500)};
  &:hover,
  :active,
  :focus {
    background-color: ${inverted ? getColor('white') : getColor(color, 700)};
    border-color: transparent;
    box-shadow: 0 0 0 0.25rem ${inverted ? getColor('white') : getColor(color, 700)};
  }
  &:focus {
    ${StyledButtonContent} {
      border-bottom: 1px solid ${!inverted ? getColor('white') : getColor(color, 700)};
    }
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
  color: ${inverted ? 'white' : getColor(color, 600)};
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
  border: 0;
  ${StyledButtonContent} {
    border-bottom: 1px solid transparent;
  }
  color: ${inverted ? 'white' : getColor(color, 600)};
  position: relative;
  padding: 0;
  @media ${screen.md} {
    padding: 0;
  }
  &:hover,
  :active,
  :focus {
    ${StyledButtonContent} {
      border-bottom: 1px solid ${inverted ? 'white' : getColor(color, 700)};
    }
  }
  &:disabled {
    background-color: ${getColor('neutral', 200)};
    border: 0.125rem solid ${getColor('neutral', 200)};
    color: ${getColor('neutral', 600)};
  }
`;

// TODO: Need to refactor the mess at the bottom. Will have to make Icon a StyledComponent.
export const StyledButton = styled('button')<StyledButtonProps>`
  ${defaultStyle}
  ${fluidStyle}
  ${largeStyle}
  ${props => props.variant === 'fill' && fillStyle(intentToColor[props.intent] as PaletteNames, props.inverted)};
  ${props => props.variant === 'outline' && outlineStyle(intentToColor[props.intent] as PaletteNames, props.inverted)};
  ${props =>
    props.variant === 'borderless' && borderlessStyle(intentToColor[props.intent] as PaletteNames, props.inverted)};
  ${props =>
    props.hasIcon &&
    !props.loader &&
    props.variant !== 'borderless' &&
    css`
      padding: 0;
      @media ${screen.md} {
        padding: 0;
      }
      .hnds-style-icon {
        margin: 0 ${props.large ? '0.5rem' : '0.125rem'};
        @media ${screen.md} {
          margin: 0 0.75rem;
        }
      }
      ${StyledButtonContent}:first-child {
        margin-left: ${props.large ? '2.5rem' : '1.5rem'};
      }
      ${StyledButtonContent}:last-child {
        margin-right: ${props.large ? '2.5rem' : '1.5rem'};
      }
      ${props.fluid &&
      css`
        ${StyledButtonContent}:last-child {
          margin-right: 0;
          @media ${screen.md} {
            margin-right: ${props.large ? '2.5rem' : '1.5rem'};
          }
        }
        ${StyledLeftFluidContent}:last-child {
          margin-right: ${props.large ? '2.5rem' : '1.5rem'};
          @media ${screen.md} {
            margin-right: 0;
          }
        }
      `}
    `}
  ${props =>
    props.ellipsis &&
    css`
      max-width: 100%;
      ${StyledButtonContent} {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}
  ${props =>
    props.hasIcon &&
    !props.loader &&
    props.variant === 'borderless' &&
    css`
      .hnds-style-icon:first-child {
        margin-right: ${props.large ? '0.5rem' : '0.125rem'};
        @media ${screen.md} {
          margin-right: 0.75rem;
        }
      }
      .hnds-style-icon:last-child {
        margin-left: ${props.large ? '0.5rem' : '0.125rem'};
        @media ${screen.md} {
          margin-left: 0.75rem;
        }
      }
    `}
`;
