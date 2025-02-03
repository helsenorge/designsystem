import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

import classNames from 'classnames';
import { useAnimate } from 'motion/react';

import { AnalyticsId, ZIndex } from '../../constants';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import useFocusTrap from '../../hooks/useFocusTrap';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { useReturnFocusOnUnmount } from '../../hooks/useReturnFocusOnUnmount';
import { breakpoints } from '../../theme/grid';
import uuid from '../../utils/uuid';
import Button from '../Button';
import Close from '../Close';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

type DesktopDirections = 'left' | 'right';

export interface DrawerProps {
  /** Sets the aria-label of the drawer */
  ariaLabel?: string;
  /** Sets the aria-labelledby of the drawer */
  ariaLabelledBy?: string;
  /** Close button aria-label */
  ariaLabelCloseBtn?: string;
  /** Direction of the drawer on desktop. Default: left */
  desktopDirection?: DesktopDirections;
  /** Title to display in the header of the drawer */
  title: string;
  /** id of the drawer title */
  titleId?: string;
  /** Changes the underlying element of the title. Default: h3 */
  titleHtmlMarkup?: TitleTags;
  /**
   * Callback to handle closing of the drawer.
   * Called **after** the out-animation finishes.
   * The parent can unmount this component once onClose is called.
   */
  onClose: () => void;
  /** Optional footer content that can be rendered instead of default CTA(s) */
  footerContent?: React.ReactNode;
  /** Main content of the drawer */
  children?: React.ReactNode;
  /** Primary CTA callback */
  onPrimaryAction?: () => void;
  /** Text for primary CTA button if you want a default CTA button rendered (instead of `footerContent`) */
  primaryActionText?: string;
  /** Text for secondary CTA button if you want a default CTA button rendered (instead of `footerContent`) */
  secondaryActionText?: string;
  /** Secondary CTA callback */
  onSecondaryAction?: () => void;
  /** Customize the z-index of the drawer */
  zIndex?: number;
}

export interface DrawerHandle {
  closeDrawer: () => void;
}

const Drawer = forwardRef<DrawerHandle, DrawerProps>(
  (
    {
      ariaLabel,
      ariaLabelledBy,
      ariaLabelCloseBtn,
      desktopDirection = 'left',
      title,
      titleHtmlMarkup = 'h3',
      titleId = uuid(),
      onClose,
      footerContent,
      children,
      onPrimaryAction,
      onSecondaryAction,
      primaryActionText,
      secondaryActionText,
      zIndex = ZIndex.Modal,
    },
    ref
  ) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint < breakpoints.md;
    const [scope, animate] = useAnimate();

    // ariaLabelledBy prioriteres over ariaLabel.
    const containerAriaLabel = !ariaLabelledBy ? ariaLabel : undefined;
    const containerAriaLabelledBy = ariaLabelledBy ? ariaLabelledBy : !ariaLabel ? titleId : undefined;

    // Exponer handleClose til parent via ref
    useImperativeHandle(ref, () => ({
      closeDrawer,
    }));
    useFocusTrap(containerRef, true);
    useReturnFocusOnUnmount();
    useOutsideEvent(containerRef, () => {
      closeDrawer();
    });

    // Open animation.
    useEffect(() => {
      if (!overlayRef.current || !containerRef.current) return;

      if (isMobile) {
        animate(containerRef.current, { y: '0' }, { duration: 0.3, ease: 'easeInOut' });
      } else {
        animate(containerRef.current, { x: '0' }, { duration: 0.3, ease: 'easeInOut' });
      }

      animate(overlayRef.current, { opacity: 1, pointerEvents: 'auto' }, { duration: 0.3, ease: 'easeInOut' });
    }, [animate, isMobile]);

    // Close animasjon, vi kaller `onClose()` til slutt
    const closeDrawer = (): void => {
      if (!overlayRef.current || !containerRef.current) return;

      animate(overlayRef.current, { opacity: 0, pointerEvents: 'none' }, { duration: 0.3, ease: 'easeInOut' });

      if (isMobile) {
        animate(
          containerRef.current,
          { y: '100%' },
          {
            duration: 0.3,
            ease: 'easeInOut',
            onComplete: () => onClose(),
          }
        );
      } else {
        animate(
          containerRef.current,
          { x: desktopDirection === 'left' ? '-100%' : '100%' },
          {
            duration: 0.3,
            ease: 'easeInOut',
            onComplete: () => onClose(),
          }
        );
      }
    };

    const handleCTA = (callback?: () => void): void => {
      if (callback) {
        callback();
      }
    };

    return (
      <div className={styles.drawer} ref={scope} style={{ zIndex }} data-analyticsid={AnalyticsId.Drawer}>
        <div className={styles.drawer__overlay} ref={overlayRef} />
        <div
          className={classNames(styles.drawer__container, {
            [styles['drawer__container--right']]: desktopDirection === 'right',
          })}
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          aria-labelledby={containerAriaLabelledBy}
          aria-label={containerAriaLabel}
        >
          <div className={styles.drawer__container__inner}>
            <div className={styles.drawer__header}>
              <Title id={titleId} htmlMarkup={titleHtmlMarkup} appearance="title3">
                {title}
              </Title>
              <Close ariaLabel={ariaLabelCloseBtn} onClick={closeDrawer} small={isMobile} />
            </div>
            <div className={styles.drawer__content}>{children}</div>
          </div>
          <div className={styles.drawer__footer}>
            {footerContent ? (
              footerContent
            ) : (
              <>
                {primaryActionText && <Button onClick={() => handleCTA(onPrimaryAction)}>{primaryActionText}</Button>}
                {secondaryActionText && (
                  <Button variant="borderless" onClick={() => handleCTA(onSecondaryAction)}>
                    {secondaryActionText}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
