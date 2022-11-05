import React, { useEffect } from 'react';
import cn from 'classnames';

import { palette } from '../../theme/palette';
import Button from '../Button';
import Icon, { IconSize } from '../Icons';

import styles from './styles.module.scss';
import AlertSignStroke from '../Icons/AlertSignStroke';
import AlertSignFill from '../Icons/AlertSignFill';
import useFocusTrap from '../../hooks/useFocusTrap';
import { useIsVisible } from '../../hooks/useIsVisible';
import Title from '../Title/Title';
import { uuid } from '../../utils/uuid';
import Close from '../Close';
import CheckOutline from '../Icons/CheckOutline';
import Portal from '../Portal';
import { AnalyticsId, ZIndex } from '../../constants';

export enum ModalVariants {
  normal = 'normal',
  warning = 'warning',
  error = 'error',
  success = 'success',
  image = 'image',
}

export enum ModalSize {
  large = 'large',
  medium = 'medium',
}

export interface ModalProps {
  /** Title of the modal */
  title: string;
  /** id of the modal title */
  titleId?: string;
  /** Description of the modal. Will not render if the modal has children. */
  description?: string;
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
}

const defaultProps = {
  variant: ModalVariants.normal,
  primaryButtonText: 'OK',
  titleId: uuid(),
  className: '',
  size: ModalSize.large,
  zIndex: ZIndex.Modal,
};

const getVariantIcon = (variant?: ModalProps['variant']): JSX.Element | null => {
  if (variant === ModalVariants.error) {
    return <Icon size={IconSize.Small} svgIcon={AlertSignFill} color={palette.cherry500} />;
  } else if (variant === ModalVariants.warning) {
    return <Icon size={IconSize.Small} svgIcon={AlertSignStroke} color={palette.black} />;
  } else if (variant === ModalVariants.success) {
    return <Icon size={IconSize.Small} svgIcon={CheckOutline} color={palette.kiwi900} />;
  }
  return null;
};

const getIcon = (variant?: ModalProps['variant'], icon?: ModalProps['icon']): JSX.Element | null => {
  const variantIcon = getVariantIcon(variant);
  if (variantIcon) {
    return <div className={styles.modal__iconWrapper}>{variantIcon}</div>;
  }
  if (icon) {
    return (
      <div className={styles.modal__iconWrapper}>
        {React.cloneElement(icon, {
          size: IconSize.Small,
        })}
      </div>
    );
  }
  return null;
};

const Modal = (props: ModalProps): JSX.Element => {
  const topContent = React.useRef<HTMLDivElement>(null);
  const modalContentRef = React.useRef<HTMLDivElement>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef, true, true);
  const topContentVisible = useIsVisible(topContent);
  const bottomContent = React.useRef<HTMLDivElement>(null);
  const bottomContentVisible = useIsVisible(bottomContent);
  const contentIsScrollable = modalContentRef.current && modalContentRef.current.scrollHeight > modalContentRef.current.clientHeight;

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

  function disableBodyScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  function enableBodyScroll(): void {
    document.body.style.removeProperty('overflow');
  }

  /* Displays a full window size modal with image */
  const imageView = props.variant === ModalVariants.image;

  const overlayRef = React.useRef<HTMLDivElement>(null);

  const showActions = (props.secondaryButtonText && props.secondaryButtonText?.length > 0) || props.onSuccess;

  // ariaLabelledBy prioriteres over ariaLabel, men dersom ariaLabel brukes trengs ikke ariaLabelledBy
  const ariaLabel = !props.ariaLabelledBy ? props.ariaLabel : undefined;
  const ariaLabelledBy = props.ariaLabelledBy ? props.ariaLabelledBy : !props.ariaLabel ? props.titleId : undefined;

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

  const dialogClasses = cn(
    props.className,
    styles.modal,
    styles[`modal--${props.variant}`],
    styles[`modal--${props.size}`],
    contentIsScrollable && !showActions && styles['modal--no-actions']
  );

  const titleClasses = cn({
    [styles['modal__title--error']]: props.variant === ModalVariants.error,
    [styles['modal__title--success']]: props.variant === ModalVariants.success,
  });

  const Component = (
    <div data-testid="dialog-container">
      <div
        ref={overlayRef}
        className={styles['modal-overlay']}
        data-testid={props.testId}
        data-analyticsid={AnalyticsId.Modal}
        style={{ zIndex: props.zIndex }}
      >
        <div className={styles.align}>
          <div className={dialogClasses} role="dialog" aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} ref={dialogRef}>
            <div
              className={cn(styles['modal__shadow'], styles['modal__shadow--top'], {
                [styles['modal__shadow--show']]: !topContentVisible && contentIsScrollable,
              })}
            />
            <div
              className={cn(styles.modal__contentWrapper, {
                [styles['modal__contentWrapper--image']]: imageView,
              })}
              ref={modalContentRef}
            >
              {!props.noCloseButton && (
                <div className={styles.modal__closeWrapper}>
                  <div className={cn(styles.modal__closeWrapper__close)}>
                    <Close onClick={props.onClose} ariaLabel={props.ariaLabelCloseBtn} />
                  </div>
                </div>
              )}
              <div
                className={cn(styles[`modal__contentWrapper__scroll--${props.size}`], {
                  [styles['modal__contentWrapper__scroll--image']]: imageView,
                })}
              >
                <div ref={topContent} />
                <div className={styles.modal__contentWrapper__title}>
                  {getIcon(props.variant, props.icon)}
                  <Title id={ariaLabelledBy} htmlMarkup="h3" appearance="title3" className={titleClasses}>
                    {props.title}
                  </Title>
                  {props.afterTitleChildren && <div className={styles['modal__afterTitleChildren']}>{props.afterTitleChildren}</div>}
                </div>
                {imageView && (
                  <div>
                    <div className={styles['modal__contentWrapper__imageWrapper']}>{props.children}</div>
                    <span className={styles['modal__contentWrapper__imageDescription']}>{props.description}</span>
                  </div>
                )}
                {!imageView && props.children && <div>{props.children}</div>}
                {!imageView && !props.children && <p className={styles.modal__description}>{props.description}</p>}
                <div ref={bottomContent} />
              </div>
            </div>
            <div
              className={cn(styles['modal__shadow'], styles['modal__shadow--bottom'], {
                [styles['modal__shadow--show']]: !bottomContentVisible && contentIsScrollable,
              })}
            />
            {showActions && (
              <div className={cn(styles['modal__call-to-action'], styles[`modal__call-to-action--${props.size}`])}>
                {props.onSuccess && <Button onClick={props.onSuccess}>{props.primaryButtonText}</Button>}
                {props.secondaryButtonText && props.secondaryButtonText?.length > 0 && (
                  <Button variant="borderless" onClick={props.onClose}>
                    {props.secondaryButtonText}
                  </Button>
                )}
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

Modal.defaultProps = defaultProps;

export default Modal;
