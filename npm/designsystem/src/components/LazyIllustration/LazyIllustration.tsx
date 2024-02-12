import React, { lazy, Suspense, useMemo } from 'react';

import { getIllustration } from '../../utils/illustration';
import Illustration, { BaseIllustrationProps, SvgIllustration } from '../Illustration';
import { IllustrationName, IllustrationSizeList } from '../Illustrations/IllustrationNames';
import ErrorBoundary from '../LazyIcon/ErrorBoundary';
import { isServerSide } from '../LazyIcon/utils';

export interface LazyIllustrationProps extends BaseIllustrationProps {
  // Navnet på illustrasjonen som skal vises. Tilsvarer filnavnet til illustrasjonen i Icons-mappen
  illustrationName: IllustrationName;
}

export const lazyLoadIllustration = (illustrationName: IllustrationName, size: number): React.LazyExoticComponent<SvgIllustration> => {
  const sizes = IllustrationSizeList[illustrationName];
  const illustrationFileName = getIllustration({ size, ...sizes });

  return lazy<SvgIllustration>(() => import(`../Illustrations/${illustrationFileName}.tsx`));
};

export const LazyIllustration: React.FC<LazyIllustrationProps> = ({ illustrationName, size = 512, ...rest }) => {
  const illustration = useMemo(() => lazyLoadIllustration(illustrationName, size), [illustrationName, size]);

  if (isServerSide()) {
    return null;
  }

  const fallback = (
    <svg
      data-testid={'fallback'}
      role={'presentation'}
      focusable={false}
      aria-hidden={true}
      viewBox="0 0 512 512"
      style={{ minWidth: size, minHeight: size }}
      width={size}
      height={size}
    />
  );

  return (
    <ErrorBoundary fallback={fallback} reset={illustrationName}>
      <Suspense fallback={fallback}>
        <Illustration illustration={illustration} size={size} {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyIllustration;
