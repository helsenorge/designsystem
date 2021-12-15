import React from 'react';
import classNames from 'classnames';
import { uuid } from '../../utils/uuid';

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
  /**  Individual id for loading icon (aria-labelledby).  */
  ariaLabelledById?: string;
  /**  String that labels the current loading element  */
  ariaLabel?: string;
}

const Loader = React.forwardRef(function LoaderForwardedRef(props: LoaderProps, ref: React.ForwardedRef<HTMLElement>) {
  const {
    overlay,
    color = overlay ? 'black' : 'neutral',
    size = 'small',
    className = '',
    testId = '',
    center,
    ariaLabelledById,
    ariaLabel = 'Laster inn',
  } = props;
  const isSmall = size === 'small';
  const isMedium = size === 'medium';
  const isLarge = size === 'large';

  const loaderWrapperClasses = classNames(loaderStyles['loader-wrapper'], {
    [loaderStyles['loader-wrapper--center']]: center,
    [loaderStyles['loader-wrapper--overlay']]: overlay,
  });
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

  const uniqueId = `loader${uuid()}`;

  return (
    <div role="progressbar" className={loaderWrapperClasses}>
      <div data-testid={testId} aria-labelledby={ariaLabelledById || uniqueId} className={loaderClasses}>
        <div className={loaderDotClasses} />
        <div className={loaderDotClasses} />
        <div className={loaderDotClasses} />
        <div className={loaderDotClasses} />
        {!ariaLabelledById && (
          <span id={uniqueId} className={loaderStyles['loader__hidden-text']}>
            {ariaLabel}
          </span>
        )}
      </div>
    </div>
  );
});

export default Loader;
