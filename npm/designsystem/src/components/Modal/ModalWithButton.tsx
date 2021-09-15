/* istanbul ignore file */
import React, { useState } from 'react';
import Button from '../Button';
import Modal, { ModalProps } from './Modal';

interface ModalWithButtonProps extends ModalProps {
  /** Text of the button */
  buttonText: string;
}

const ModalWithButton = React.forwardRef(function ModalForwardedRef(props: ModalWithButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>{props.buttonText}</Button>
      {showModal && <Modal {...props} onClose={() => setShowModal(false)} />}
    </div>
  );
});

export default ModalWithButton;
