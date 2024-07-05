import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';

import { IconSize, ZIndex } from '../../constants';
import { useSize } from '../../hooks/useSize';
import Close from '../Close';
import Icon from '../Icon';
import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';
import ChevronsDown from '../Icons/ChevronsDown';
import ChevronsUp from '../Icons/ChevronsUp';

import styles from './styles.module.scss';

export interface LightBoxProps {
  /** Aria label for the close button */
  ariaLabelCloseButton: string;
  /** If set the text box closes automatically after the given seconds */
  closeTextAfterSeconds?: number;
  /** Alt text for the image */
  imageAlt: string;
  /** Source of the image that will be shown */
  imageSrc: string;
  /** The text for the image that shows in the textbox */
  imageText?: string;
  /** Function is called when user clicks the close button */
  onClose: () => void;
  /** Function is called when user clicks the left arrow button. If not given the arrow will not show. */
  onLeftArrowClick?: () => void;
  /** Function is called when user clicks the right arrow button. If not given the arrow will not show. */
  onRightArrowClick?: () => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const LightBox: React.FC<LightBoxProps> = ({
  ariaLabelCloseButton: ariaLabelButtonClose,
  closeTextAfterSeconds,
  imageAlt,
  imageSrc,
  imageText,
  onClose,
  onLeftArrowClick,
  onRightArrowClick,
  testId,
}) => {
  const [imageTextOpen, setImageTextOpen] = React.useState(true);
  const textBoxRef = useRef<HTMLParagraphElement>(null);
  const { height: textBoxHeight = 0 } = useSize(textBoxRef) || {};

  useEffect(() => {
    if (!closeTextAfterSeconds) return;
    const timer = setTimeout(() => {
      setImageTextOpen(false);
    }, closeTextAfterSeconds * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-testid={testId} className={styles.lightBox} style={{ zIndex: ZIndex.OverlayScreen }}>
      <Close ariaLabel={ariaLabelButtonClose} onClick={onClose} color="white" className={styles['close-button']} small={true} />
      {onLeftArrowClick && (
        <button
          className={classNames(styles['arrow-button'], styles['arrow-button--left'])}
          onClick={onLeftArrowClick}
          aria-label="Forrige bilde"
          data-testid="leftArrow"
        >
          <Icon svgIcon={ChevronLeft} color="white" size={IconSize.XSmall} />
        </button>
      )}
      {onRightArrowClick && (
        <button
          className={classNames(styles['arrow-button'], styles['arrow-button--right'])}
          onClick={onRightArrowClick}
          aria-label="Neste bilde"
          data-testid="rightarrow"
        >
          <Icon svgIcon={ChevronRight} color="white" size={IconSize.XSmall} />
        </button>
      )}
      {imageText && (
        <div className={styles['image-text-box']} style={{ bottom: imageTextOpen ? '0' : '-' + textBoxHeight + 'px', transition: '0.5s' }}>
          <button className={classNames(styles['image-text-box__button'])} onClick={() => setImageTextOpen(!imageTextOpen)}>
            {imageTextOpen ? (
              <Icon svgIcon={ChevronsDown} color="white" size={IconSize.XSmall} />
            ) : (
              <Icon svgIcon={ChevronsUp} color="white" size={IconSize.XSmall} />
            )}
          </button>
          <p ref={textBoxRef} className={styles['image-text-box__text']}>
            {imageText}
          </p>
        </div>
      )}
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default LightBox;
