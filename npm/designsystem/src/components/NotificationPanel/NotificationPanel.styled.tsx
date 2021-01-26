import styled, {css} from 'styled-components';
import {NotificationPanelVariants, variantToColorMap, NotificationPanelSizes} from './NotificationPanel';
import {getColor, getHoverColor} from '../../theme/currys';
import {PaletteNames, PaletteDepths} from '../../theme/palette';
import {typography} from '../../theme/typography';
import {breakpoints} from '../../theme/grid';

interface StyledNotificationPanelProps {
  variant: NotificationPanelVariants;
  size?: NotificationPanelSizes;
  label?: boolean;
  shadow: boolean;
}

const sizeToWidthMap = {
  small: `${breakpoints.sm}px`,
  medium: `${breakpoints.md}px`,
  large: `${breakpoints.lg}px`,
};

const StyledNotificationPanel = styled('div')<StyledNotificationPanelProps>`
  display: grid;
  padding: 1rem;
  grid-template-areas: 'icon' 'content' 'action';
  grid-template-columns: 48px auto 48px;
  grid-template-rows: 1fr;
  max-width: ${props => props.size && sizeToWidthMap[props.size]};
  width: inherit;
  background-color: ${props =>
    getColor(
      variantToColorMap[props.variant].color as PaletteNames,
      variantToColorMap[props.variant].depth as PaletteDepths,
    )};
  ${props =>
    props.variant === 'crisis' &&
    css`
      ${StyledNotificationPanelContent} {
        color: ${getColor('banana', 200)};
        a {
          color: white;
          :hover {
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
          }
          :focus {
            background-color: white;
            color: black;
          }
          &[target='_blank'] {
            /* white icon */
            &:after {
              content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38px' height='38px' viewBox='0 0 48 48' fill='%23bdbab9'><polygon points='33.305,14.659,33.305,29.205,32.005,29.205,32.005,16.948,15.804,33.149,14.885,32.229,31.155,15.959,18.761,15.96,18.761,14.659' /></svg>");
            }
          }
        }
      }
    `}
  ${props =>
    props.shadow &&
    css`
      box-shadow: 0 0.3rem 0.6rem -0.1rem rgba(0, 0, 0, 0.16);
    `}
    ${props =>
    props.label &&
    css`
      padding: 2rem 1rem;
      ${StyledNotificationPanelContent} {
        ${props.variant === 'alert' &&
        css`
          color: ${getColor('cherry', 500)};
        `};
        display: flex;
        align-items: center;
        margin: 0 1rem;
      }
    `}
`;

const StyledCloseButton = styled('button')`
  border: 0.125rem solid ${getColor('blueberry', 600)};
  background: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  position: relative;
  outline: none;
  cursor: pointer;
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
    background-color: ${getHoverColor('blueberry')};
    border-color: transparent;
    &:before {
      border: 0.125rem solid ${getHoverColor('blueberry')};
    }
    &:after {
      border: 0.125rem solid ${getColor('blueberry', 700)};
    }
  }
`;

const StyledNotificationPanelIconColumn = styled('span')`
  grid-area: 'icon';
`;

const StyledNotificationPanelContent = styled('div')`
  grid-area: 'content';
  margin: 0.5rem 1.5rem;
  & p {
    margin: 0;
  }
  & a {
    outline: none;
    padding-bottom: 0.15rem;
    color: ${getColor('blueberry', 600)};
    border-bottom: 1px solid ${getColor('neutral', 300)};
    text-decoration: none;
    &:focus {
      outline: none;
      background-color: rgba(8, 102, 124, 0.05); /* Dette er blueberry 700 med 5% opacity*/
      border-color: ${getColor('neutral', 300)};
    }
    &:hover {
      cursor: pointer;
      border-color: ${getColor('blueberry', 700)};
    }
    &[target='_blank'] {
      &:after {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38px' height='38px' viewBox='0 0 48 48' fill='%2308667c'><polygon points='33.305,14.659,33.305,29.205,32.005,29.205,32.005,16.948,15.804,33.149,14.885,32.229,31.155,15.959,18.761,15.96,18.761,14.659' /></svg>");
        display: inline-block;
        width: 38px;
        height: 38px;
        vertical-align: bottom;
        margin-bottom: -0.25rem;
      }
    }
  }
`;

const StyledNotificationPanelActionColumn = styled('span')`
  grid-area: 'action';
`;

const StyledLabel = styled('h1')`
  ${typography.label}
  margin: 0;
`;

const StyledNotificationPanelFluidWrapper = styled('div')<StyledNotificationPanelProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props =>
    getColor(
      variantToColorMap[props.variant].color as PaletteNames,
      variantToColorMap[props.variant].depth as PaletteDepths,
    )};
  ${props =>
    props.shadow &&
    css`
      box-shadow: 0 0.3rem 0.6rem -0.1rem rgba(0, 0, 0, 0.16);
    `}
`;

export {
  StyledNotificationPanel,
  StyledNotificationPanelActionColumn,
  StyledNotificationPanelContent,
  StyledNotificationPanelFluidWrapper,
  StyledNotificationPanelIconColumn,
  StyledLabel,
  StyledCloseButton,
};
