import * as React from './node_modules/react';
import {LightBox} from '../../molecules/lightbox_deprecated';

export interface ConfirmboxProps {
  /** Hva som skal skje hvis brukeren ikke bekrefter */
  onClose?: (event?: React.FormEvent<{}>) => void;
  /** Tekst i avbryt knappen */
  closeText?: string;
  /** Hva som skal skje hvis brukeren bekrefter */
  onConfirm: (event?: React.FormEvent<{}>) => void;
  /** Tekst i bekreft knappen */
  confirmText?: string;
  confirmedText?: string;
  /**  Kun bekreft knappen vises */
  noCloseButton?: boolean;
  /** Rendre komponent i bunn av body-tag */
  energize?: boolean;
  onCancel?: (event?: React.FormEvent<{}>) => void;
  wrapperClassName?: string;
  useSecondaryButton?: boolean;
  internal?: boolean;
  focus?: boolean;
  small?: boolean;
  medium?: boolean;
}

/**
 * Dette er en lightbox som hvor noe kan enten bekreftes eller avbrytes.
 */
export const ConfirmBox: React.SFC<ConfirmboxProps> = props => {
  let cancel: JSX.Element | null = null;

  const {
    onClose,
    closeText,
    onConfirm,
    confirmText,
    confirmedText,
    noCloseButton,
    energize,
    children,
    onCancel,
    wrapperClassName,
    useSecondaryButton,
    internal,
    focus,
    ...other
  } = props;

  if (!noCloseButton) {
    const onClick = onCancel || onClose;
    cancel = (
      <button type="button" className="cancelbutton" onClick={onClick}>
        {closeText}
      </button>
    );
  }

  const confirmButtonClasses = useSecondaryButton ? 'atom_secondarybutton sub' : 'actionbutton';
  const confirmedButtonClasses = 'atom_functionactionbutton timen-bekreftet';
  const buttonClasses = confirmedText ? confirmedButtonClasses : confirmButtonClasses;
  const onConfirmClick: () => void = confirmedText ? () => null : onConfirm;
  const confirmButtonText = confirmedText || confirmText;

  const confirmButton: JSX.Element | null = confirmText ? (
    <div className="mol_actionconfirmationprompt">
      <button type="button" className={buttonClasses} onClick={onConfirmClick}>
        {confirmButtonText}
      </button>
      {cancel}
    </div>
  ) : null;

  return (
    <LightBox
      isVisible
      onClose={onClose}
      noCloseButton
      energize={energize}
      wrapperClassName={wrapperClassName}
      {...other}>
      {children}
      {confirmButton}
    </LightBox>
  );
};
