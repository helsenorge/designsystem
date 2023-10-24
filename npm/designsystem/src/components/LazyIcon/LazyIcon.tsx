import React, { lazy, Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Icon, { BaseIconProps, IconSize, SvgIcon } from '../Icon';
import { IconName } from '../Icons/IconNames';

export interface LazyIconProps extends BaseIconProps {
  // Navnet på ikonet som skal vises. Tilsvarer filnavnet til ikonet i Icons-mappen
  iconName: IconName;
}

const isServerSide = (): boolean => typeof document === 'undefined';

export const lazyLoadIcon = (iconName: IconName): React.LazyExoticComponent<SvgIcon> =>
  lazy<SvgIcon>(() => import(`../Icons/${iconName}.tsx`));

export const LazyIcon: React.FC<LazyIconProps> = ({ iconName, size = IconSize.Small, ...rest }) => {
  if (isServerSide()) {
    return null;
  }

  const fallback = (
    <svg
      data-testid={'fallback'}
      role={'presentation'}
      focusable={false}
      aria-hidden={true}
      viewBox="0 0 48 48"
      style={{ minWidth: size, minHeight: size }}
      width={size}
      height={size}
    />
  );

  return (
    <ErrorBoundary fallback={fallback} reset={iconName}>
      <Suspense fallback={fallback}>
        <Icon svgIcon={lazyLoadIcon(iconName)} size={size} {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyIcon;
