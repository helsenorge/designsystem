import React, { useEffect } from 'react';

import cn from 'classnames';

import type { IconProps } from '../Icon';

import { ModalSize, ModalVariants } from './constants';
import { AnalyticsId, ZIndex } from '../../constants';
import useFocusTrap from '../../hooks/useFocusTrap';
import { useIsVisible } from '../../hooks/useIsVisible';
import { useReturnFocusOnUnmount } from '../../hooks/useReturnFocusOnUnmount';
import { palette } from '../../theme/palette';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { isComponent } from '../../utils/component';
import { disableBodyScroll, enableBodyScroll } from '../../utils/scroll';
import { uuid } from '../../utils/uuid';
import Button from '../Button';
import Close from '../Close';
import Icon, { IconSize } from '../Icon';
import AlertSignFill from '../Icons/AlertSignFill';
import AlertSignStroke from '../Icons/AlertSignStroke';
import CheckOutline from '../Icons/CheckOutline';
import Portal from '../Portal';
import Title from '../Title/Title';

import styles from './styles.module.scss';

export interface ModalProps {
  /** Title of the modal */
  title: string;
  /** id of the modal title */
  titleId?: string;
  /** Description of the modal. Will not render if the modal has children. */
  description?: string;
  /** Optional footer content that can be rendered instead of default CTA(s) */
  footerContent?: React.ReactNode;
  /** Changes the visual representation of the modal */
  variant?: keyof typeof ModalVariants;
  /** Change width of the modal (default: large) */
  size?: keyof typeof ModalSize;
  /** Icon displayed in title */
  icon?: React.ReactElement;
  /** Hides the close button */
  noCloseButton?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Primary button text */
  primaryButtonText?: string;
  /** Secondary button text */
  secondaryButtonText?: string;
  /** Sets the aria-label of the modal */
  ariaLabel?: string;
  /** Sets the aria-labelledby of the modal */
  ariaLabelledBy?: string;
  /** Close button aria-label */
  ariaLabelCloseBtn?: string;
  /** Alternative component to modal */
  children?: React.ReactNode;
  /** Component shown after title */
  afterTitleChildren?: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Customize the z-index of the modal */
  zIndex?: number;
  /** Function is called when user clicks primary button */
  onSuccess?: () => void;
  /** Function is called when user clicks secondary button, clicks escape or outside the modal */
  onClose?: () => void;
  /** When enabled the component will be rendered in the bottom of document.body */
  printable?: boolean;
  /** If disabled, clicking escape or outside the modal will not close it */
  disableCloseEvents?: boolean;
  /** Aria role used for the Modal. Default is dialog */
  role?: 'dialog' | 'alertdialog';
}

const getVariantIcon = (variant?: ModalProps['variant']): React.JSX.Element | null => {
  if (variant === ModalVariants.error) {
    return <Icon size={IconSize.Small} svgIcon={AlertSignFill} color={palette.cherry500} />;
  } else if (variant === ModalVariants.warning) {
    return <Icon size={IconSize.Small} svgIcon={AlertSignStroke} color={palette.black} />;
  } else if (variant === ModalVariants.success) {
    return <Icon size={IconSize.Small} svgIcon={CheckOutline} color={palette.kiwi900} />;
  }
  return null;
};

const getIcon = (variant?: ModalProps['variant'], icon?: ModalProps['icon']): React.JSX.Element | null => {
  const variantIcon = getVariantIcon(variant);
  if (variantIcon) {
    return <div className={styles.modal__iconWrapper}>{variantIcon}</div>;
  }
  if (icon) {
    return (
      <div className={styles.modal__iconWrapper}>
        {isComponent<IconProps>(icon, Icon) &&
          React.cloneElement(icon, {
            size: IconSize.Small,
          })}
      </div>
    );
  }
  return null;
};

const Modal: React.FC<ModalProps> = props => {
  const {
    footerContent,
    variant = ModalVariants.normal,
    primaryButtonText = 'OK',
    titleId = uuid(),
    className = '',
    size = ModalSize.large,
    zIndex = ZIndex.OverlayScreen,
    role = 'dialog',
  } = props;

  const topContent = React.useRef<HTMLDivElement>(null);
  const modalContentRef = React.useRef<HTMLDivElement>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef, true);
  const topContentVisible = useIsVisible(topContent);
  const bottomContent = React.useRef<HTMLDivElement>(null);
  const bottomContentVisible = useIsVisible(bottomContent);
  const contentIsScrollable = modalContentRef.current && modalContentRef.current.scrollHeight > modalContentRef.current.clientHeight;
  useReturnFocusOnUnmount(dialogRef);

  function handleKeyboardEvent(e: KeyboardEvent): void {
    if (e.key === 'Escape' && props.onClose) {
      e.stopPropagation();
      props.onClose();
    }
  }

  function handleClickEvent(event: MouseEvent): void {
    if (event.target && overlayRef.current === event.target && props.onClose) {
      event.stopPropagation();
      props.onClose();
    }
  }

  const overlayRef = React.useRef<HTMLDivElement>(null);

  const showActions = (props.secondaryButtonText && props.secondaryButtonText?.length > 0) || props.onSuccess || footerContent;

  const ariaLabelAttributes = getAriaLabelAttributes({ label: props.ariaLabel, id: props.ariaLabelledBy, fallbackId: titleId });

  useEffect(() => {
    const overlayElement = overlayRef.current;
    disableBodyScroll();
    if (!props.disableCloseEvents && overlayElement) {
      overlayElement.addEventListener('keydown', handleKeyboardEvent);
      overlayElement.addEventListener('click', handleClickEvent);
    }
    return (): void => {
      enableBodyScroll();
      if (!props.disableCloseEvents && overlayElement) {
        overlayElement.removeEventListener('keydown', handleKeyboardEvent);
        overlayElement.removeEventListener('click', handleClickEvent);
      }
    };
  }, [props.disableCloseEvents]);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  const dialogClasses = cn(
    className,
    styles.modal,
    variant && styles[`modal--${variant}`],
    size && styles[`modal--${size}`],
    contentIsScrollable && !showActions && styles['modal--no-actions']
  );

  const titleClasses = cn({
    [styles['modal__title--error']]: variant === ModalVariants.error,
    [styles['modal__title--success']]: variant === ModalVariants.success,
  });

  const Component = (
    <div data-testid="dialog-container">
      <div
        ref={overlayRef}
        className={styles['modal-overlay']}
        data-testid={props.testId}
        data-analyticsid={AnalyticsId.Modal}
        style={{ zIndex }}
      >
        <div className={styles.align}>
          <div className={dialogClasses} role={role} aria-modal="true" tabIndex={-1} {...ariaLabelAttributes} ref={dialogRef}>
            <div
              className={cn(styles['modal__shadow'], styles['modal__shadow--top'], {
                [styles['modal__shadow--show']]: !topContentVisible && contentIsScrollable,
              })}
            />
            <div
              className={cn(styles.modal__contentWrapper)}
              tabIndex={contentIsScrollable ? 0 : undefined}
              role={contentIsScrollable ? 'region' : undefined}
              {...(contentIsScrollable ? ariaLabelAttributes : {})}
              ref={modalContentRef}
            >
              {!props.noCloseButton && (
                <div className={styles.modal__closeWrapper}>
                  <div className={cn(styles.modal__closeWrapper__close)}>
                    <Close onClick={props.onClose} ariaLabel={props.ariaLabelCloseBtn} />
                  </div>
                </div>
              )}
              <div className={cn(size && styles[`modal__contentWrapper__scroll--${size}`])}>
                <div ref={topContent} />
                <div className={styles.modal__contentWrapper__title}>
                  {getIcon(variant, props.icon)}
                  <Title id={ariaLabelAttributes?.['aria-labelledby']} htmlMarkup="h3" appearance="title3" className={titleClasses}>
                    {props.title}
                  </Title>
                  {props.afterTitleChildren && <div className={styles['modal__afterTitleChildren']}>{props.afterTitleChildren}</div>}
                </div>
                {props.children && <div>{props.children}</div>}
                {!props.children && <p className={styles.modal__description}>{props.description}</p>}
                <div ref={bottomContent} />
              </div>
            </div>
            <div
              className={cn(styles['modal__shadow'], styles['modal__shadow--bottom'], {
                [styles['modal__shadow--show']]: !bottomContentVisible && contentIsScrollable,
              })}
            />
            {showActions && (
              <div className={cn(styles['modal__call-to-action'], size && styles[`modal__call-to-action--${size}`])}>
                {props.onSuccess && primaryButtonText && <Button onClick={props.onSuccess}>{primaryButtonText}</Button>}
                {props.secondaryButtonText && props.secondaryButtonText?.length > 0 && (
                  <Button variant="borderless" onClick={props.onClose}>
                    {props.secondaryButtonText}
                  </Button>
                )}
                {footerContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (props.printable) {
    const printModal = 'print-modal';
    return (
      <Portal className={printModal} testId="print-modal">
        <style media="print">{`body > *:not(.${printModal}) {display: none;}`}</style>
        {Component}
      </Portal>
    );
  }

  return Component;
};

export default Modal;
