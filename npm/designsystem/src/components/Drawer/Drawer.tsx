import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';
import { useAnimate } from 'motion/react';

import { AnalyticsId, ZIndex } from '../../constants';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import useFocusTrap from '../../hooks/useFocusTrap';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { useReturnFocusOnUnmount } from '../../hooks/useReturnFocusOnUnmount';
import { breakpoints } from '../../theme/grid';
import Button from '../Button';
import Close from '../Close';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

type DesktopDirections = 'left' | 'right';

export interface DrawerProps {
  /** Direction of the drawer on desktop. Default: left */
  desktopDirection?: DesktopDirections;
  /** Title to display in the header of the drawer */
  title: string;
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
  /** An optional function that can be used to handle CTA action(s); can also close the drawer */
  onPrimaryAction?: () => void;
  /** Label for primary CTA button if you want a default CTA button rendered (instead of `footerContent`) */
  primaryActionLabel?: string;
  /** Label for secondary CTA button if you want a default CTA button rendered (instead of `footerContent`) */
  secondaryActionLabel?: string;
  /** An optional function for secondary action */
  onSecondaryAction?: () => void;
  /** Customize the z-index of the drawer */
  zIndex?: number;
}

const Drawer: React.FC<DrawerProps> = ({
  desktopDirection = 'left',
  title,
  titleHtmlMarkup = 'h3',
  onClose,
  footerContent,
  children,
  onPrimaryAction,
  onSecondaryAction,
  primaryActionLabel = 'Confirm',
  secondaryActionLabel = 'Cancel',
  zIndex = ZIndex.Modal,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint < breakpoints.md;
  const [scope, animate] = useAnimate();

  useFocusTrap(containerRef, true);
  useReturnFocusOnUnmount();
  useOutsideEvent(containerRef, () => {
    handleClose();
  });

  // TODO: Complete aria
  // ariaLabelledBy prioriteres over ariaLabel, men dersom ariaLabel brukes trengs ikke ariaLabelledBy
  // const ariaLabel = !props.ariaLabelledBy ? props.ariaLabel : undefined;
  // const ariaLabelledBy = props.ariaLabelledBy ? props.ariaLabelledBy : !props.ariaLabel ? titleId : undefined;
  // TODO: Se over props
  // TODO: Fullfør stories (og propsliste der)
  // TODO: Skriv tester

  // Open animation.
  useEffect(() => {
    if (!overlayRef.current || !containerRef.current) return;

    if (isMobile) {
      animate(containerRef.current, { y: '0' }, { duration: 0.3, ease: 'easeInOut' });
    } else {
      animate(containerRef.current, { x: '0' }, { duration: 0.3, ease: 'easeInOut' });
    }

    animate(overlayRef.current, { opacity: 1, pointerEvents: 'auto' }, { duration: 0.3, ease: 'easeInOut' });
  }, [animate]);

  // Close animation, then we call `onClose()`
  const handleClose = (): void => {
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
    handleClose();

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
      >
        <div className={styles.drawer__container__inner}>
          <div className={styles.drawer__header}>
            <Title /* id={ariaLabelledBy} */ htmlMarkup={titleHtmlMarkup} appearance="title3">
              {title}
            </Title>
            <Close onClick={handleClose} small={isMobile} />
          </div>
          <div className={styles.drawer__content}>{children}</div>
        </div>
        <div className={styles.drawer__footer}>
          {footerContent ? (
            footerContent
          ) : (
            <div className={styles['drawer__footer__default-cta']}>
              {primaryActionLabel && <Button onClick={() => handleCTA(onPrimaryAction)}>{primaryActionLabel}</Button>}
              {secondaryActionLabel && (
                <Button variant="borderless" onClick={() => handleCTA(onSecondaryAction)}>
                  {secondaryActionLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
