import React, { useRef } from 'react';
import classNames from 'classnames';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './styles.module.scss';

// Scrolle-indikator vises/skjules når det er x px igjen til venstre eller høyre side
const ROOT_MARGIN_OFFSET = '3px';

export const HorizontalScroll: React.FC = ({ children }) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftIsVisible = useIsVisible(leftRef, 1, { root: viewportRef?.current, rootMargin: ROOT_MARGIN_OFFSET }, true);
  const rightIsVisible = useIsVisible(rightRef, 1, { root: viewportRef?.current, rootMargin: ROOT_MARGIN_OFFSET }, true);

  return (
    <div className={styles.horizontalscroll}>
      <div className={styles.horizontalscroll__viewport} ref={viewportRef}>
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
