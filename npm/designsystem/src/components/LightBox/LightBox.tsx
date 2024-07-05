import React from 'react';

import { ZIndex } from '../../constants';
import Close from '../Close';

import styles from './styles.module.scss';

export interface LightBoxProps {
  /** Aria label for the close button */
  ariaLabelCloseButton: string;
  /** Alt text for the image */
  imageAlt: string;
  /** Source of the image that will be shown */
  imageSrc: string;
  /** Function is called when user clicks the close button */
  onClose: () => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const LightBox: React.FC<LightBoxProps> = ({ ariaLabelCloseButton: ariaLabelButtonClose, imageAlt, imageSrc, onClose, testId }) => {
  return (
    <div data-testid={testId} className={styles.lightBox} style={{ zIndex: ZIndex.OverlayScreen }}>
      <Close ariaLabel={ariaLabelButtonClose} onClick={onClose} color="white" className={styles.closeButton} />
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default LightBox;
