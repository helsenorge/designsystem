import React, { useEffect } from 'react';
import cn from 'classnames';

import { palette } from '../../theme/palette';
import Button from '../Button';
import Icon from '../Icons';
import X from '../Icons/X';

import styles from './styles.module.scss';
import AlertSignStroke from '../Icons/AlertSignStroke';
import AlertSignFill from '../Icons/AlertSignFill';
import FocusTrap from '../../hooks/useFocusTrap';
import { useIsVisible } from '../../hooks/useVisibility';
import Title from '../Title/Title';
import uuid from '../../utils/uuid';

export enum ModalVariants {
  normal = 'normal',
  warning = 'warning',
  error = 'error',
  image = 'image',
}

export enum ModalSize {
  large = 'large',
  medium = 'medium',
}

export interface ModalProps {
  /** Title of the modal */
  title: string;
  /** Title of the modal */
  titleId?: string;
  /** Description of the modal */
  description?: string;
  /** Changes the visual representation of the modal. Description will not render if children prop is provided */
  variant?: keyof typeof ModalVariants;
  /** Change width of the modal (default: large) */
  size?: keyof typeof ModalSize;
  /** Hides the close button */
  noCloseButton?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
  /**Primary button text */
  primaryButtonText?: string;
  /**Secondary button text */
  secondaryButtonText?: string;
  /** Sets the aria-label of the modal */
  ariaLabel?: string;
  /** Sets the aria-labelledby of the modal */
  ariaLabelledBy?: string;
  /** Close button aria-label */
  ariaLabelCloseBtn?: string;
  /** Alternative component to modal */
  children?: JSX.Element;
  /** Adds custom classes to the element. */
  className?: string;
  /** Function is called when user clicks primary button */
  onSuccess?: () => void;
  /** Function is called when user clicks secondary button */
  onClose?: () => void;
}

const defaultProps = {
  variant: ModalVariants.normal,
  primaryButtonText: 'OK',
  large: false,
  className: '',
  size: ModalSize.large,
};

const Lukkekryss = (props: { onClick?: () => void; ariaLabel?: string }): JSX.Element | null => (
  <button className={styles.modal__lukkekryss} aria-label={props.ariaLabel || 'Lukk'} onClick={props.onClick} role="button">
    <Icon svgIcon={X} color={palette.blueberry600} size={42} />
  </button>
);

const getIcon = (variant: keyof typeof ModalVariants): JSX.Element | null => {
  let icon;

  if (variant === ModalVariants.error) {
    icon = <Icon svgIcon={AlertSignFill} color={palette.cherry500} hoverColor={palette.cherry500} />;
  } else if (variant === ModalVariants.warning) {
    icon = <Icon svgIcon={AlertSignStroke} color={palette.black} hoverColor={palette.black} />;
  } else {
    return null;
  }
  return <div className={styles.modal__iconWrapper}>{icon}</div>;
};

const Modal = (props: ModalProps): JSX.Element => {
  const [uniqueTitleId] = React.useState(uuid());
  const topContent = React.useRef<HTMLDivElement>(null);
  const modalContentRef = React.useRef<HTMLDivElement>(null);
  const topContentVisible = useIsVisible(topContent);
  const bottomContent = React.useRef<HTMLDivElement>(null);
  const bottomContentVisible = useIsVisible(bottomContent);
  const contentIsScrollable = modalContentRef.current && modalContentRef.current.scrollHeight > modalContentRef.current.clientHeight;

  function keyListener(e: KeyboardEvent): void {
    if (e.key === 'Escape' && props.onClose) {
      e.stopPropagation();
      props.onClose();
    }
  }

  function handleClick(event: MouseEvent): void {
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
  const imageView = props.variant === ModalVariants.image || props.children?.type === 'img';

  const titleId = props.titleId ?? uniqueTitleId;
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const showActions = (props.secondaryButtonText && props.secondaryButtonText?.length > 0) || props.onSuccess;

  // AriaLabelledBy prioriteres, og AriaLabel prioriteres over fallback til AriaLabelledBy
  const ariaLabel = !props.ariaLabelledBy ? props.ariaLabel : undefined;
  const ariaLabelledBy = props.ariaLabelledBy ? props.ariaLabelledBy : !props.ariaLabel ? titleId : undefined;

  useEffect(() => {
    const overlayElement = overlayRef.current;
    disableBodyScroll();
    if (overlayElement && !showActions) {
      overlayElement.addEventListener('keydown', keyListener);
      overlayElement.addEventListener('click', handleClick);
    }
    return (): void => {
      enableBodyScroll();
      if (overlayElement && !showActions) {
        overlayElement.removeEventListener('keydown', keyListener);
        overlayElement.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div data-testid="dialog-container">
      <div ref={overlayRef} className={styles['modal-overlay']} data-testid={props.testId}>
        <div className={styles.align} ref={FocusTrap()}>
          <div
            className={cn(props.className, styles.modal, styles[`modal--${props.variant}`], styles[`modal--${props.size}`])}
            role="dialog"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
          >
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
                    <Lukkekryss onClick={props.onClose} ariaLabel={props.ariaLabelCloseBtn} />
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
                  {props.variant && getIcon(props.variant)}
                  <div className={props.variant === ModalVariants.error ? styles['modal__title--error'] : ''}>
                    <Title id={titleId} htmlMarkup="h3" appearance="title3">
                      {props.title}
                    </Title>
                  </div>
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
};

Modal.defaultProps = defaultProps;

export default Modal;
