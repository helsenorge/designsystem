import React, { lazy, Suspense, useMemo } from 'react';

import ErrorBoundary from './ErrorBoundary';
import { useIsServerSide } from '../../hooks/useIsServerSide';
import Icon, { BaseIconProps, IconSize, SvgIcon } from '../Icon';
import { IconName } from '../Icons/IconNames';

export interface LazyIconProps extends BaseIconProps {
  // Navnet på ikonet som skal vises. Tilsvarer filnavnet til ikonet i Icons-mappen
  iconName: IconName;
}

export const lazyLoadIcon = (iconName: IconName): React.LazyExoticComponent<SvgIcon> =>
  lazy<SvgIcon>(() => import(`../Icons/${iconName}.tsx`));

export const LazyIcon: React.FC<LazyIconProps> = ({ iconName, size = IconSize.Small, ...rest }) => {
  const icon = useMemo(() => lazyLoadIcon(iconName), [iconName]);
  const isServerSide = useIsServerSide();

  if (isServerSide) {
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
        <Icon svgIcon={icon} size={size} {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyIcon;
