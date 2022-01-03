/* istanbul ignore file */
import React, { useState } from 'react';
import Button from '../Button';
import Modal, { ModalProps } from '../Modal/Modal';

interface ModalWithButtonProps extends ModalProps {
  /** Text of the button */
  buttonText: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const ModalWithButton = React.forwardRef(function ModalForwardedRef(props: ModalWithButtonProps, ref: React.ForwardedRef<HTMLElement>) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div data-testid={props.testId}>
      <Button onClick={() => setShowModal(true)}>{props.buttonText}</Button>
      {showModal && <Modal {...props} onClose={() => setShowModal(false)} />}
    </div>
  );
});

export default ModalWithButton;
