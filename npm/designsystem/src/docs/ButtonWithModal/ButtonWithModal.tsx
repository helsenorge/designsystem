import React, { useState } from 'react';

import Button from '../../components/Button';
import Modal, { ModalProps } from '../../components/Modal';

interface ModalWithButtonProps extends ModalProps {
  /** Text of the button */
  buttonText: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const ModalWithButton: React.FC<ModalWithButtonProps> = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div data-testid={props.testId}>
      <Button onClick={() => setShowModal(true)}>{props.buttonText}</Button>
      {showModal && <Modal {...props} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ModalWithButton;
