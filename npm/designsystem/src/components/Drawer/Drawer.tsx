import React, { useEffect, useRef } from 'react';

import { useAnimate } from 'motion/react';

import { AnalyticsId, ZIndex } from '../../constants';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import useFocusTrap from '../../hooks/useFocusTrap';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { breakpoints } from '../../theme/grid';
import Button from '../Button';
import Close from '../Close';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

export interface DrawerProps {
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

  useOutsideEvent(containerRef, () => {
    handleClose();
  });

  // TODO: 400% zoom, skal vi gjøre noe med padding? JA, kommer skisser. Tittel og innhold scroller sammen
  // TODO: Har vi en token for overlayet bak drawer? Burde sikkert hatt det, frankenweekly

  // TODO: Return focus after closing logic (mangler vi eksempel for dette i modal?)
  // TODO: Se over props
  // TODO: Complete aria
  // ariaLabelledBy prioriteres over ariaLabel, men dersom ariaLabel brukes trengs ikke ariaLabelledBy
  // const ariaLabel = !props.ariaLabelledBy ? props.ariaLabel : undefined;
  // const ariaLabelledBy = props.ariaLabelledBy ? props.ariaLabelledBy : !props.ariaLabel ? titleId : undefined;
  // TODO: Fullfør stories (og propsliste der)
  // TODO: Skriv tester

  /**
   * Animate the drawer IN on mount.
   */
  useEffect(() => {
    if (!overlayRef.current || !containerRef.current) return;

    animate(containerRef.current, { y: '0' }, { duration: 0.3, ease: 'easeInOut' });
    animate(overlayRef.current, { opacity: 1, pointerEvents: 'auto' }, { duration: 0.3, ease: 'easeInOut' });
  }, [animate]);

  /**
   * Animate the drawer OUT, then call `onClose()`
   * so the parent can unmount us after the animation finishes.
   */
  const handleClose = (): void => {
    if (!overlayRef.current || !containerRef.current) return;

    animate(overlayRef.current, { opacity: 0, pointerEvents: 'none' }, { duration: 0.3, ease: 'easeInOut' });
    animate(
      containerRef.current,
      { y: '100%' },
      {
        duration: 0.3,
        ease: 'easeInOut',
        onComplete: () => onClose(),
      }
    );
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
      <div className={styles.drawer__container} ref={containerRef}>
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
