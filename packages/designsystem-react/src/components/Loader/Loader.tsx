import React from 'react';
import {StyledLoader, StyledLoaderDot} from './Loader.styled';
import {PaletteNames} from '../../theme/palette';

export type LoaderColors = PaletteNames;
export type LoaderSizes = 'tiny' | 'small' | 'medium' | 'large';

interface LoaderProps {
  color?: LoaderColors;
  size?: LoaderSizes;
}

const Loader = React.forwardRef((props: LoaderProps, ref: any) => {
  const {color = 'neutral', size = 'small'} = props;
  return (
    <StyledLoader size={size}>
      <StyledLoaderDot color={color} size={size} />
      <StyledLoaderDot color={color} size={size} />
      <StyledLoaderDot color={color} size={size} />
      <StyledLoaderDot color={color} size={size} />
    </StyledLoader>
  );
});

export default Loader;
