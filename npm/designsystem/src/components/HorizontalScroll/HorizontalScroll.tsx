import { useRef } from 'react';

import classNames from 'classnames';

import type { AriaLabelAttributes } from '../../utils/accessibility';

import { useIsVisible } from '../../hooks/useIsVisible';
import { useStopPropagation } from '../../hooks/usestopPropagation';

import styles from './styles.module.scss';

// Scrolle-indikator vises/skjules når det er x px igjen til venstre eller høyre side
const ROOT_MARGIN_OFFSET = '3px';

interface HorizontalScrollProps {
  children?: React.ReactNode;
  /**
   * Bredden på elementet som potensielt vil scrolle horisontalt i px
   */
  childWidth: number;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps & AriaLabelAttributes> = ({
  children,
  testId,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftIsVisible = useIsVisible(leftRef, 1, { root: viewportRef?.current, rootMargin: ROOT_MARGIN_OFFSET }, true);
  const rightIsVisible = useIsVisible(rightRef, 1, { root: viewportRef?.current, rootMargin: ROOT_MARGIN_OFFSET }, true);
  const hasAriaAttributes = ariaLabel || ariaLabelledBy;

  useStopPropagation(viewportRef, ['touchstart', 'touchmove']);

  return (
    <div className={styles.horizontalscroll} data-testid={testId}>
      {/* viewport-diven må ta tabIndex for å løse et annet UU-problem, at div med overflow: scroll må kunne navigeres med keyboard. */}
      {/* Enten aria-label eller aria-labelledbyid må settes */}
      <div
        className={styles.horizontalscroll__viewport}
        ref={viewportRef}
        tabIndex={hasAriaAttributes ? 0 : undefined}
        role={hasAriaAttributes ? 'region' : undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        <div
          className={classNames(
            styles.horizontalscroll__indicator,
            styles['horizontalscroll__indicator--left'],
            !leftIsVisible && styles['horizontalscroll__indicator--visible']
          )}
        />
        <div
          className={classNames(
            styles.horizontalscroll__indicator,
            styles['horizontalscroll__indicator--right'],
            !rightIsVisible && styles['horizontalscroll__indicator--visible']
          )}
        />
        <div ref={leftRef} />
        {children}
        <div ref={rightRef} />
      </div>
    </div>
  );
};

export default HorizontalScroll;
