import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';
import { AnimatePresence, useAnimate, usePresence } from 'motion/react';

import { getResources } from './resourceHelper';
import { AnalyticsId, KeyboardEventKey, LanguageLocales, ZIndex } from '../../constants';
import useFocusTrap from '../../hooks/useFocusTrap';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { useIsVisible } from '../../hooks/useIsVisible';
import { useKeyboardEvent } from '../../hooks/useKeyboardEvent';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { useReturnFocusOnUnmount } from '../../hooks/useReturnFocusOnUnmount';
import { HNDesignsystemDrawer } from '../../resources/Resources';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { useLanguage } from '../../utils/language';
import { disableBodyScroll, enableBodyScroll } from '../../utils/scroll';
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
  /** @deprecated Close button aria-label */
  ariaLabelCloseBtn?: string;
  /** Sets the style of the Drawer Close button. Meant for use by HelpDrawer */
  closeColor?: 'blueberry' | 'plum';
  /** Direction of the drawer on desktop. Default: left */
  desktopDirection?: DesktopDirections;
  /** Sets the style of the Drawer header */
  headerClasses?: string;
  /** Title to display in the header of the drawer */
  title: string;
  /** id of the drawer title */
  titleId?: string;
  /** Changes the underlying element of the title. Default: h3 */
  titleHtmlMarkup?: TitleTags;
  /** Callback that triggers when clicking on close button or outside the drawer, update isOpen state when this triggers */
  onRequestClose?: () => void;
  /** Optional footer content that can be rendered instead of default CTA(s) */
  footerContent?: React.ReactNode;
  /** Main content of the drawer */
  children?: React.ReactNode;
  /** Hides the close button */
  noCloseButton?: boolean;
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
  /** Resources for component */
  resources?: Partial<HNDesignsystemDrawer>;
  /** Sets mobile styling and animation from outer level Drawer */
  isMobile?: boolean;
}

const Drawer: React.FC<DrawerProps> = props => {
  const { isOpen, ...rest } = props;
  const isMobile = useIsMobileBreakpoint();

  return <AnimatePresence>{isOpen && <InnerDrawer {...rest} isMobile={isMobile} />}</AnimatePresence>;
};

const InnerDrawer: React.FC<InnerDrawerProps> = props => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaLabelCloseBtn,
    children,
    closeColor = 'blueberry',
    desktopDirection = 'left',
    footerContent,
    headerClasses,
    noCloseButton = false,
    onPrimaryAction,
    onRequestClose,
    onSecondaryAction,
    primaryActionText,
    secondaryActionText,
    title,
    titleHtmlMarkup = 'h3',
    titleId = uuid(),
    zIndex = ZIndex.OverlayScreen,
    resources,
    isMobile,
  } = props;

  const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledBy, fallbackId: titleId });
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // topContent and bottomContent are used to detect scroll position for shadow effects
  const topContent = useRef<HTMLDivElement>(null);
  const bottomContent = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [footerHeight, setFooterHeight] = React.useState(0);
  const topContentVisible = useIsVisible(topContent);
  const bottomContentVisible = useIsVisible(bottomContent, 0);
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemDrawer = {
    ...defaultResources,
    ...resources,
    ariaLabelCloseBtn: ariaLabelCloseBtn || resources?.ariaLabelCloseBtn || defaultResources.ariaLabelCloseBtn,
  };

  const contentIsScrollable = contentRef.current && contentRef.current.scrollHeight > contentRef.current.clientHeight;
  const headerStyling = classNames(styles.drawer__header, headerClasses, {
    [styles['drawer__header--no-close-button']]: noCloseButton,
  });
  const hasFooterContent = (typeof footerContent !== 'undefined' && footerContent) || onPrimaryAction || onSecondaryAction;

  useFocusTrap(containerRef, true);
  useReturnFocusOnUnmount(containerRef);
  useOutsideEvent(containerRef, () => {
    if (onRequestClose) onRequestClose();
  });
  useKeyboardEvent(containerRef, () => onRequestClose && onRequestClose(), [KeyboardEventKey.Escape]);

  useEffect(() => {
    containerRef.current?.focus();
    disableBodyScroll();

    return (): void => {
      enableBodyScroll();
    };
  }, []);

  // Measure header and footer heights
  useEffect(() => {
    const updateHeights = (): void => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateHeights();

    // Update heights when content changes
    const resizeObserver = new ResizeObserver(updateHeights);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    return (): void => {
      resizeObserver.disconnect();
    };
  }, [hasFooterContent]);

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
            if (safeToRemove) safeToRemove();
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
            if (safeToRemove) safeToRemove();
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
          <div className={headerStyling} ref={headerRef}>
            <Title id={ariaLabelAttributes?.['aria-labelledby']} htmlMarkup={titleHtmlMarkup} appearance="title3">
              {title}
            </Title>
            {!noCloseButton && onRequestClose != undefined && (
              <Close
                ariaLabel={mergedResources.ariaLabelCloseBtn}
                color={closeColor}
                onClick={onRequestClose}
                className={styles['drawer__header__close-button']}
              />
            )}
          </div>
          <div
            className={classNames(styles['drawer__content__shadow'], styles['drawer__content__shadow--top'])}
            style={{
              opacity: !topContentVisible && contentIsScrollable ? 1 : 0,
              top: headerHeight,
            }}
          />
          <div
            className={styles.drawer__content}
            tabIndex={contentIsScrollable ? 0 : undefined}
            role={contentIsScrollable ? 'region' : undefined}
            {...(contentIsScrollable ? ariaLabelAttributes : {})}
            ref={contentRef}
          >
            <div ref={topContent} />
            <div className={styles['drawer__content__children']}>{children}</div>
            <div ref={bottomContent} style={{ height: '1px' }} />
          </div>
          <div
            className={classNames(styles['drawer__content__shadow'], styles['drawer__content__shadow--bottom'])}
            style={{
              opacity: !bottomContentVisible && contentIsScrollable ? 1 : 0,
              bottom: hasFooterContent ? footerHeight : 0,
            }}
          />
        </div>
        {hasFooterContent && (
          <div className={styles.drawer__footer} ref={footerRef}>
            {footerContent ? (
              footerContent
            ) : (
              <>
                {onPrimaryAction && <Button onClick={() => handleCTA(onPrimaryAction)}>{primaryActionText}</Button>}
                {onSecondaryAction && (
                  <Button variant="borderless" onClick={() => handleCTA(onSecondaryAction)}>
                    {secondaryActionText}
                  </Button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
