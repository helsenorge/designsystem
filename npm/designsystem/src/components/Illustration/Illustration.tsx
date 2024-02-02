import React from 'react';

import { getIllustration } from './utils';
import { AnalyticsId } from '../../constants';
import { useUuid } from '../../hooks/useUuid';

export type IllustrationColor = 'neutral' | 'cherry' | 'blueberry';

export interface BaseSvgIllustrationProps {
  color: IllustrationColor;
}
export interface SvgIllustrationProps extends BaseSvgIllustrationProps {
  size: number;
}

export type SvgIllustration = React.ComponentType<SvgIllustrationProps>;

export interface BaseIllustrationProps {
  /* aria-label for the <svg> element. Used as <title> tag. */
  ariaLabel?: string;
  /* Changes the size of the illustration. */
  size?: number;
  /* Changes the color of the illustration. */
  color?: IllustrationColor;
  /* Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export interface IllustrationProps extends BaseIllustrationProps {
  /* Sets which illustration should be displayed. */
  illustration: SvgIllustration;
}

export const Illustration = React.forwardRef<SVGSVGElement, IllustrationProps>((props, ref) => {
  const { illustration, ariaLabel, className = '', size = 512, color = 'neutral', testId, ...other } = props;

  const svgElement = React.createElement(illustration, {
    size,
    color,
  });

  const titleId = useUuid();

  const viewBox = getIllustration({ size, medium: '0 0 512 512', small: '0 0 200 200' });

  return (
    <svg
      data-testid={testId}
      data-analyticsid={AnalyticsId.Illustration}
      ref={ref}
      className={className}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-labelledby={ariaLabel ? titleId : undefined}
      focusable={false}
      aria-hidden={ariaLabel ? undefined : true}
      viewBox={viewBox}
      style={{ minWidth: size, minHeight: size }}
      width={size}
      height={size}
      fill={color}
      {...other}
    >
      {ariaLabel && <title id={titleId}>{ariaLabel}</title>}
      {svgElement}
    </svg>
  );
});

Illustration.displayName = 'Illustration';

export default Illustration;
