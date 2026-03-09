import { useEffect, useRef } from 'react';

import Button from '../Button';
import './test.css';

interface TestDrawerProps {
  title: string;
  withBackButton: boolean;
  previousViewTitle?: string;
  onBackButton?: () => void;
  children: React.ReactNode;
}

const TestDrawer = (props: TestDrawerProps) => {
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

  return (
    <>
      <button onClick={openDialog}>{'Open drawer'}</button>
      <dialog aria-labelledby="tittel" ref={dialogRef}>
        <h2 id="tittel" ref={titleRef} tabIndex={-1}>
          {props.title}
        </h2>
        {props.withBackButton && <Button onClick={props.onBackButton}>{`Tilbake til ${props.previousViewTitle ?? 'forrige side'}`}</Button>}
        <Button onClick={closeDialog} id="close-btn">
          {'Lukk'}
        </Button>
        {props.children}
      </dialog>
    </>
  );
};

export default TestDrawer;
