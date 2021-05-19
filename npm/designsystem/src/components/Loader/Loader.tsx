import React from 'react';
import { StyledLoader, StyledLoaderDot } from './Loader.styled';
import { PaletteNames } from '../../theme/palette';

export type LoaderColors = PaletteNames;
export type LoaderSizes = 'tiny' | 'small' | 'medium' | 'large';

interface LoaderProps {
  /** Sets the color of the loader */
  color?: LoaderColors;
  /**	Adds custom classes to the element. */
  className?: string;
  /** Changes the size of the loader. */
  size?: LoaderSizes;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Loader = React.forwardRef(function LoaderForwardedRef(props: LoaderProps, ref: React.ForwardedRef<HTMLElement>) {
  const { color = 'neutral', size = 'small', className = '', testId = '' } = props;
  return (
    <StyledLoader data-testid={testId} className={className} size={size}>
      <StyledLoaderDot color={color} size={size} />
      <StyledLoaderDot color={color} size={size} />
      <StyledLoaderDot color={color} size={size} />
      <StyledLoaderDot color={color} size={size} />
    </StyledLoader>
  );
});

export default Loader;
