import { useEffect, useRef } from 'react';

import { KeyboardEventKey } from '../../constants';
import { useKeyboardEvent } from '../../hooks/useKeyboardEvent';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import Button from '../Button';

import styles from './styles.module.scss';

interface TestDrawerProps {
  title: string;
  withBackButton: boolean;
  previousViewTitle?: string;
  onBackButton?: () => void;
  children: React.ReactNode;
  isOpen: boolean;
  onCloseButton?: () => void;
}

const TestDrawer = (props: TestDrawerProps): React.ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const openDialog = (): void => {
    dialogRef.current?.showModal();
  };

  const closeDialog = (): void => {
    dialogRef.current?.requestClose();
  };

  useEffect(() => {
    titleRef.current?.focus();
  }, [props.children]);

  useEffect(() => {
    if (props.isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [props.isOpen]);

  useOutsideEvent(dialogRef, () => {
    props.onCloseButton?.();
  });
  useKeyboardEvent(dialogRef, () => props.onCloseButton?.(), [KeyboardEventKey.Escape]);

  return (
    <dialog aria-labelledby="tittel" ref={dialogRef} className={styles['dialog']}>
      <h2 id="tittel" ref={titleRef} tabIndex={-1}>
        {props.title}
      </h2>
      {props.withBackButton && <Button onClick={props.onBackButton}>{`Tilbake til ${props.previousViewTitle ?? 'forrige side'}`}</Button>}
      <Button onClick={() => props.onCloseButton?.()} id="close-btn">
        {'Lukk'}
      </Button>
      {props.children}
    </dialog>
  );
};

export default TestDrawer;
