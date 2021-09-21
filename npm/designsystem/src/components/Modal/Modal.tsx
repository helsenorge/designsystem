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
import Title from '../Title/Title';

export enum ModalVariants {
  normal = 'normal',
  warning = 'warning',
  error = 'error',
}

export interface ModalProps {
  /** Title of the modal */
  title: string;
  /** Description of the modal */
  description?: string;
  /** Changes the visual representation of the modal. Description will not render if children prop is provided */
  variant?: ModalVariants;
  /** Displays a large modal */
  large?: boolean;
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
  children?: React.ReactNode;
  /** Function is called when user clicks primary button */
  onSuccess?: () => void;
  /** Function is called when user clicks secondary button */
  onClose?: () => void;
}

const defaultProps = {
  variant: ModalVariants.normal,
  primaryButtonText: 'OK',
  ariaLabel: 'Dialog',
  large: false,
};

const Lukkekryss = (props: { onClick?: () => void; ariaLabel?: string }) => (
  <button className={styles.lukkekryss} aria-label={props.ariaLabel || 'Lukk'} onClick={props.onClick} autoFocus role="button">
    <Icon svgIcon={X} color={palette.blueberry600} size={42} />
  </button>
);

const getIcon = (variant: ModalVariants) => {
  if (variant === ModalVariants.error) {
    return (
      <div>
        <Icon svgIcon={AlertSignFill} color={palette.cherry500} hoverColor={palette.cherry500} />
      </div>
    );
  } else if (variant === ModalVariants.warning) {
    return (
      <div>
        <Icon svgIcon={AlertSignStroke} color={palette.black} hoverColor={palette.black} />
      </div>
    );
  }
  return null;
};

const Modal = React.forwardRef(function ModalForwardedRef(props: ModalProps, ref: React.Ref<HTMLLIElement>) {
  function keyListener(e: KeyboardEvent) {
    if (e.key === 'Escape' && props.onClose) {
      e.stopPropagation();
      props.onClose();
    }
  }

  function handleClick(event: MouseEvent) {
    if (event.target && overlayRef.current === event.target && props.onClose) {
      event.stopPropagation();
      props.onClose();
    }
  }

  function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableBodyScroll() {
    document.body.style.removeProperty('overflow');
  }

  const containerRef = React.useRef(null);
  const overlayRef = React.useRef(null);
  const showActions = (props.secondaryButtonText && props.secondaryButtonText?.length > 0) || props.onSuccess;

  useEffect(() => {
    const containerElement = (containerRef.current as unknown) as HTMLElement;
    const overlayElement = (overlayRef.current as unknown) as HTMLElement;
    disableBodyScroll();
    if (containerElement) {
      containerElement.addEventListener('keydown', keyListener);
      overlayElement.addEventListener('click', handleClick);
    }
    return () => {
      enableBodyScroll();
      containerElement.removeEventListener('keydown', keyListener);
      overlayElement.removeEventListener('click', handleClick);
    };
  });

  return (
    <div ref={containerRef} data-testid="dialog-container">
      <div ref={overlayRef} className={styles['modal-overlay']} data-testid={props.testId}>
        <div className={styles.align} ref={FocusTrap()}>
          <div
            className={cn(styles.modal, styles[props.variant as string], props.large ? styles.large : '')}
            role="dialog"
            aria-label={props.ariaLabel}
            aria-labelledby={props.ariaLabelledBy}
          >
            <div className={styles.close}>
              <Lukkekryss onClick={props.onClose} ariaLabel={props.ariaLabelCloseBtn} />
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.title}>
                {props.variant && getIcon(props.variant)}
                <div>
                  <Title htmlMarkup="h3" appearance="title3">
                    {props.title}
                  </Title>
                </div>
              </div>
              <div className={styles.content}>
                {props.children && <div>{props.children}</div>}
                {props.description && !props.children && <p className={styles.description}>{props.description}</p>}
              </div>
              {showActions && (
                <div className={styles.actions}>
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
    </div>
  );
});

Modal.defaultProps = defaultProps;

export default Modal;
