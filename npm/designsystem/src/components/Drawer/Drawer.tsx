import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';
import { AnimatePresence, useAnimate, usePresence } from 'motion/react';

import { AnalyticsId, KeyboardEventKey, ZIndex } from '../../constants';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import useFocusTrap from '../../hooks/useFocusTrap';
import { useKeyboardEvent } from '../../hooks/useKeyboardEvent';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { useReturnFocusOnUnmount } from '../../hooks/useReturnFocusOnUnmount';
import { breakpoints } from '../../theme/grid';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import uuid from '../../utils/uuid';
import Button from '../Button';
import Close from '../Close';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

type DesktopDirections = 'left' | 'right';

export interface DrawerProps extends InnerDrawerProps {
  /** Opens and closes the drawer */
  isOpen: boolean;
}

export interface InnerDrawerProps {
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
  /** Callback that triggers when clicking on close button or outside the drawer, update isOpen state when this triggers */
  onRequestClose: () => void;
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

const Drawer: React.FC<DrawerProps> = props => {
  const { isOpen, ...rest } = props;

  return <AnimatePresence>{isOpen && <InnerDrawer {...rest} />}</AnimatePresence>;
};

const InnerDrawer: React.FC<InnerDrawerProps> = props => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaLabelCloseBtn,
    children,
    desktopDirection = 'left',
    footerContent,
    onPrimaryAction,
    onRequestClose,
    onSecondaryAction,
    primaryActionText,
    secondaryActionText,
    title,
    titleHtmlMarkup = 'h3',
    titleId = uuid(),
    zIndex = ZIndex.OverlayScreen,
  } = props;

  const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledBy, fallbackId: titleId });
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint < breakpoints.md;
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();
  const contentIsScrollable = contentRef.current && contentRef.current.scrollHeight > contentRef.current.clientHeight;

  useFocusTrap(containerRef, true);
  useReturnFocusOnUnmount(containerRef);
  useOutsideEvent(containerRef, () => {
    onRequestClose && onRequestClose();
  });
  useKeyboardEvent(containerRef, () => onRequestClose && onRequestClose(), [KeyboardEventKey.Escape]);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  // Open animation.
  useEffect(() => {
    if (!overlayRef.current || !containerRef.current) return;

    if (!isPresent) {
      closeDrawer();
      return;
    }

    if (isMobile) {
      animate(containerRef.current, { y: '0' }, { duration: 0.3, ease: 'easeInOut' });
    } else {
      animate(containerRef.current, { x: '0' }, { duration: 0.3, ease: 'easeInOut' });
    }

    animate(overlayRef.current, { opacity: 1, pointerEvents: 'auto' }, { duration: 0.3, ease: 'easeInOut' });
  }, [isPresent]);

  useEffect(() => {}, [isPresent]);

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
          onComplete: () => {
            safeToRemove && safeToRemove();
          },
        }
      );
    } else {
      animate(
        containerRef.current,
        { x: desktopDirection === 'left' ? '-100%' : '100%' },
        {
          duration: 0.3,
          ease: 'easeInOut',
          onComplete: () => {
            safeToRemove && safeToRemove();
          },
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
      <div className={styles.drawer__overlay} ref={overlayRef} aria-hidden="true" />
      <div
        className={classNames(styles.drawer__container, {
          [styles['drawer__container--right']]: desktopDirection === 'right',
        })}
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        {...ariaLabelAttributes}
      >
        <div className={styles.drawer__container__inner}>
          <div className={styles.drawer__header}>
            <Title id={ariaLabelAttributes?.['aria-labelledby']} htmlMarkup={titleHtmlMarkup} appearance="title3">
              {title}
            </Title>
            <Close ariaLabel={ariaLabelCloseBtn} onClick={onRequestClose} small={isMobile} />
          </div>
          <div
            className={styles.drawer__content}
            tabIndex={contentIsScrollable ? 0 : undefined}
            role={contentIsScrollable ? 'region' : undefined}
            {...(contentIsScrollable ? ariaLabelAttributes : {})}
            ref={contentRef}
          >
            {children}
          </div>
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
};

export default Drawer;
