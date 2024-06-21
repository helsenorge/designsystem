import React from 'react';

import { getIllustration } from './utils';
import { AnalyticsId } from '../../constants';
import { useUuid } from '../../hooks/useUuid';

export type IllustrationColor = 'neutral' | 'cherry' | 'blueberry';

export enum ViewBoxSize {
  Medium = '0 0 512 512',
  Small = '0 0 200 200',
}

export interface BaseSvgIllustrationProps {
  color: IllustrationColor;
  svgProperties: React.SVGProps<SVGSVGElement>;
  title: React.ReactNode;
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

  const titleId = useUuid();
  const viewBox = getIllustration({ size, medium: ViewBoxSize.Medium, small: ViewBoxSize.Small });

  const svgProperties = {
    'data-testid': testId,
    'data-analyticsid': AnalyticsId.Illustration,
    ref,
    className,
    role: ariaLabel ? 'img' : 'presentation',
    'aria-labelledby': ariaLabel ? titleId : undefined,
    focusable: false,
    'aria-hidden': ariaLabel ? undefined : true,
    viewBox,
    style: { minWidth: size, minHeight: size },
    width: size,
    height: size,
    fill: color,
    ...other,
  };

  const svgElement = React.createElement(illustration, {
    size,
    color,
    svgProperties: svgProperties,
    title: ariaLabel && <title id={titleId}>{ariaLabel}</title>,
  });

  return svgElement;
});

Illustration.displayName = 'Illustration';

export default Illustration;
