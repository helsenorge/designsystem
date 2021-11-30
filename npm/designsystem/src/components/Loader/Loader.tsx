import React from 'react';
import classNames from 'classnames';

import { PaletteNames } from '../../theme/palette';

import loaderStyles from './styles.module.scss';

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
  /** Centers the loader in a container */
  center?: boolean;
  /** Loader is displayed with grey background covering the entire screen */
  overlay?: boolean;
  /** aria-label */
  ariaLabel?: string;
}

const Loader = React.forwardRef(function LoaderForwardedRef(props: LoaderProps, ref: React.ForwardedRef<HTMLElement>) {
  const { color = 'neutral', size = 'small', className = '', testId = '', center, overlay, ariaLabel = 'Laster inn..' } = props;
  const isSmall = size === 'small';
  const isMedium = size === 'medium';
  const isLarge = size === 'large';
  const loaderClasses = classNames(
    loaderStyles.loader,
    {
      [loaderStyles['loader--small']]: isSmall,
      [loaderStyles['loader--medium']]: isMedium,
      [loaderStyles['loader--large']]: isLarge,
    },
    className
  );
  const loaderDotClasses = classNames(loaderStyles.loader__dot, {
    [loaderStyles['loader__dot--small']]: isSmall,
    [loaderStyles['loader__dot--medium']]: isMedium,
    [loaderStyles['loader__dot--large']]: isLarge,
    [loaderStyles['loader__dot--banana']]: color === 'banana',
    [loaderStyles['loader__dot--cherry']]: color === 'cherry',
    [loaderStyles['loader__dot--kiwi']]: color === 'kiwi',
    [loaderStyles['loader__dot--neutral']]: color === 'neutral',
    [loaderStyles['loader__dot--plum']]: color === 'plum',
    [loaderStyles['loader__dot--black']]: color === 'black',
    [loaderStyles['loader__dot--white']]: color === 'white',
  });

  const LoaderComponent = (
    <div data-testid={testId} className={loaderClasses}>
      <span></span>
      <div className={loaderDotClasses} />
      <div className={loaderDotClasses} />
      <div className={loaderDotClasses} />
      <div className={loaderDotClasses} />
    </div>
  );

  if (overlay) {
    return (
      <div role="progressbar" className={loaderStyles.overlay}>
        {LoaderComponent}
      </div>
    );
  }

  if (center) {
    return <div className={loaderStyles.center}>{LoaderComponent}</div>;
  }

  return LoaderComponent;
});

export default Loader;
