import React, { useRef } from 'react';

import classNames from 'classnames';

import { useIsVisible } from '../../hooks/useIsVisible';
import { useSize } from '../../hooks/useSize';
import { AriaLabelAttributes } from '../../utils/accessibility';

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

export const HorizontalScroll: React.FC<HorizontalScrollProps & AriaLabelAttributes> = ({ children, childWidth, testId, ...rest }) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftIsVisible = useIsVisible(leftRef, 1, { root: viewportRef?.current, rootMargin: ROOT_MARGIN_OFFSET }, true);
  const rightIsVisible = useIsVisible(rightRef, 1, { root: viewportRef?.current, rootMargin: ROOT_MARGIN_OFFSET }, true);
  const { width: viewPortWidth = 0 } = useSize(viewportRef) || {};

  const isOverflowing = childWidth > viewPortWidth;
  const viewportClasses = classNames(styles.horizontalscroll__viewport, isOverflowing && styles['horizontalscroll__viewport--overflow']);
  const hasAriaAttributes = rest['aria-label'] || rest['aria-labelledby'];

  return (
    <div className={styles.horizontalscroll} data-testid={testId}>
      {/* viewport-diven må ta tabIndex for å løse et annet UU-problem, at div med overflow: scroll må kunne navigeres med keyboard. */}
      {/* Enten aria-label eller aria-labelledbyid må settes */}
      <div
        className={viewportClasses}
        ref={viewportRef}
        tabIndex={hasAriaAttributes ? 0 : undefined}
        role={hasAriaAttributes ? 'region' : undefined}
        {...rest}
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
