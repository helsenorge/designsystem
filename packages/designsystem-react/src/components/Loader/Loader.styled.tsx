import styled, {keyframes} from 'styled-components';
import {LoaderColors, LoaderSizes} from './Loader';
import {getColor} from '../../theme/currys';

const loaderDot1 = keyframes`
    0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const loaderDot2 = (distance: string) => keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(${distance}, 0);
  }
`;

const loaderDot3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const dotSizes = {
  tiny: 8,
  small: 12,
  medium: 18,
  large: 24,
};

export const StyledLoaderDot = styled('div')<{color: LoaderColors; size: LoaderSizes}>`
  position: absolute;
  width: ${props => `${dotSizes[props.size]}px`};
  height: ${props => `${dotSizes[props.size]}px`};
  border-radius: 50%;
  background-color: ${props => getColor(props.color, 500)};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  &:nth-child(1) {
    animation: ${loaderDot1} 0.6s infinite;
  }
  &:nth-child(2) {
    animation: ${props => loaderDot2(`${dotSizes[props.size] * 2}px`)} 0.6s infinite;
  }
  &:nth-child(3) {
    left: ${props => `${dotSizes[props.size] * 2}px`};
    animation: ${props => loaderDot2(`${dotSizes[props.size] * 2}px`)} 0.6s infinite;
  }
  &:nth-child(4) {
    left: ${props => `${dotSizes[props.size] * 4}px`};
    animation: ${loaderDot3} 0.6s infinite;
  }
`;

export const StyledLoader = styled('div')<{size: LoaderSizes}>`
  display: inline-block;
  position: relative;
  width: ${props => `${dotSizes[props.size] * 5}px`};
  height: ${props => `${dotSizes[props.size]}px`};
`;
