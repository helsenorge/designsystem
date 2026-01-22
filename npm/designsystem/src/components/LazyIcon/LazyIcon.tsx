import type React from 'react';
import { lazy, Suspense, useMemo } from 'react';

import type { BaseIconProps, SvgIcon } from '../Icon';
import type { IconName } from '../Icons/IconNames';

import ErrorBoundary from './ErrorBoundary';
import { useIsServerSide } from '../../hooks/useIsServerSide';
import Icon, { IconSize } from '../Icon';

export interface LazyIconProps extends BaseIconProps {
  // Navnet på ikonet som skal vises. Tilsvarer filnavnet til ikonet i Icons-mappen
  iconName: IconName;
}

export const LazyIcon: React.FC<LazyIconProps> = ({ iconName, size = IconSize.Small, ...rest }) => {
  const lazyLoadIcon = (iconName: IconName): React.LazyExoticComponent<SvgIcon> => lazy<SvgIcon>(() => import(`../Icons/${iconName}.tsx`));

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
