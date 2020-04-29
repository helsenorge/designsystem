import styled, {css} from 'styled-components';
import {NotificationPanelVariants, variantToColorMap} from './NotificationPanel';
import {getColor, getHoverColor} from '../../theme/currys';
import {PaletteNames, PaletteDepths} from '../../theme/palette';
import {typography} from '../../theme/typography';
import {breakpoints} from '../../theme/grid';

interface StyledNotificationPanelProps {
  variant: NotificationPanelVariants;
  label?: boolean;
  shadow: boolean;
}

const StyledNotificationPanel = styled('div')<StyledNotificationPanelProps>`
  display: grid;
  padding: 1rem;
  grid-template-areas: 'icon' 'content' 'action';
  grid-template-columns: 48px auto 3rem;
  grid-template-rows: 1fr;
  max-width: ${`${breakpoints.lg}px`};
  width: 100%;
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
            text-decoration-color: white;
            color: white;
          }
          :focus {
            background-color: white;
            color: black;
            text-decoration-color: white;
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
  cursor: pointer;
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
    color: ${getColor('blueberry', 600)};
    text-decoration: underline;
    text-decoration-color: ${getColor('neutral', 300)};
    outline: none;
    &:hover {
      color: ${getColor('blueberry', 700)};
      text-decoration-color: ${getColor('blueberry', 700)};
    }
    &:focus {
      background-color: ${getHoverColor('blueberry')};
      color: ${getColor('blueberry', 700)};
      text-decoration-color: ${getColor('blueberry', 700)};
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
