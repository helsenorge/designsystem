import styled, {css} from 'styled-components';
import {CommonButtonVariants} from '.';
import {color} from '../../../theme';

const primaryStyle = css`
  border: 0;
  background-color: ${color('surgical500')};
  color: white;
  position: relative;
  transition: all 200ms;
  &:hover,
  :active,
  :focus {
    background-color: ${color('surgical400')};
    box-shadow: 0 0 0 0.25rem ${color('surgical400')};
  }
  &:disabled {
    pointer-events: none;
    background-color: ${color('scalpel')};
    color: ${color('scab')};
  }
`;

// TODO: Consider moving all the border hacks to a generic function across all buttons
const secondaryStyle = css`
  background-color: transparent;
  border: 0.125rem solid ${color('surgical500')};
  color: ${color('surgical500')};
  position: relative;
  padding: 0 2.375rem;
  transition: background-color 200ms;
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
    background-color: ${color('surgical400', {translucent: true})};
    border: 0.125rem solid transparent;
    color: ${color('surgical400')};
    box-shadow: none;
    &:before {
      border: 0.125rem solid ${color('surgical400')};
    }
    &:after {
      border: 0.125rem solid ${color('surgical400')};
      transition: border 200ms;
    }
  }
  &:disabled {
    pointer-events: none;
    background-color: transparent;
    border: 0.125rem solid ${color('waitingRoom')};
    color: ${color('scab')};
  }
`;

const tertiaryStyle = css`
  background-color: transparent;
  border: 0.125rem solid transparent;
  color: ${color('surgical500')};
  position: relative;
  padding: 0 2.375rem;
  transition: background-color 200ms;
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
    background-color: ${color('surgical400', {translucent: true})};
    border: 0.125rem solid transparent;
    color: ${color('surgical400')};
    box-shadow: none;
    &:before {
      border: 0.125rem solid ${color('surgical400')};
    }
    &:after {
      border: 0.125rem solid ${color('surgical400')};
      transition: border 200ms;
    }
  }
  &:disabled {
    pointer-events: none;
    background-color: transparent;
    border: 0.125rem solid ${color('waitingRoom')};
    color: ${color('scab')};
  }
`;

// TODO: Consider wrapping all icons as styled components so we can manipulate them by component name
const iconStyle = css`
  padding-left: 0.375rem;
  padding-right: 1.5rem;
  & > svg {
    padding-right: 0.375rem;
  }
`;

export const StyledCommonButton = styled('button')<{
  variant: CommonButtonVariants;
  hasIcon: boolean;
  disabled: boolean;
}>`
  outline: none;
  height: 3.125rem;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  font-family: inherit;
  text-decoration: none;
  ${props => props.variant === 'primary' && primaryStyle};
  ${props => props.variant === 'secondary' && secondaryStyle};
  ${props => props.variant === 'tertiary' && tertiaryStyle};
  ${props => props.hasIcon && iconStyle};
`;
