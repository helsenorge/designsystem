import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { TransformWrapper, TransformComponent, useControls, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import { IconSize, ZIndex } from '../../constants';
import { useSize } from '../../hooks/useSize';
import Icon from '../Icon';
import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';
import ChevronsDown from '../Icons/ChevronsDown';
import ChevronsUp from '../Icons/ChevronsUp';
import X from '../Icons/X';

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
  const [zoom, setZoom] = useState(1.0);
  const zoomRef = useRef<ReactZoomPanPinchRef | null>(null);

  useEffect(() => {
    if (zoomRef.current) {
      const positionX = zoomRef.current.state?.positionX;
      const positionY = zoomRef.current.state?.positionY;
      const safeZoom = isNaN(zoom) ? 1.0 : zoom; // Default to 1.0 if zoom is NaN
      positionX && positionY && safeZoom && zoomRef.current.setTransform(positionX, positionY, safeZoom);
    }
  }, [zoom]);

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className={classNames(styles['zoom-buttons'])}>
        <button className={classNames(styles['button'])} onClick={() => zoomIn()}>
          {'+'}
        </button>
        <span className={classNames(styles['slider'])}>{zoom.toFixed(1)}</span>
        <button className={classNames(styles['button'])} onClick={() => zoomOut()}>
          {'-'}
        </button>
        <button className={classNames(styles['button'])} onClick={() => resetTransform()}>
          {'x'}
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (!closeTextAfterSeconds) return;
    const timer = setTimeout(() => {
      setImageTextOpen(false);
    }, closeTextAfterSeconds * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-testid={testId} className={styles.lightBox} style={{ zIndex: ZIndex.OverlayScreen }}>
      <button
        onClick={onClose}
        aria-label={ariaLabelButtonClose}
        data-testid="closeButton"
        className={classNames(styles['button'], styles['close-button'])}
        style={{ zIndex: ZIndex.LightBoxButtons }}
      >
        <Icon svgIcon={X} color="white" size={IconSize.XSmall} />
      </button>
      {onLeftArrowClick && (
        <button
          className={classNames(styles['button'], styles['arrow-button'], styles['arrow-button--left'])}
          onClick={onLeftArrowClick}
          aria-label="Forrige bilde"
          data-testid="leftArrow"
          style={{ zIndex: ZIndex.LightBoxButtons }}
        >
          <Icon svgIcon={ChevronLeft} color="white" size={IconSize.XSmall} />
        </button>
      )}
      {onRightArrowClick && (
        <button
          className={classNames(styles['button'], styles['arrow-button'], styles['arrow-button--right'])}
          onClick={onRightArrowClick}
          aria-label="Neste bilde"
          data-testid="rightarrow"
          style={{ zIndex: ZIndex.LightBoxButtons }}
        >
          <Icon svgIcon={ChevronRight} color="white" size={IconSize.XSmall} />
        </button>
      )}
      {imageText && (
        <div
          className={styles['image-text-box']}
          style={{ bottom: imageTextOpen ? '0' : '-' + textBoxHeight + 'px', transition: '0.5s', zIndex: ZIndex.LightBoxButtons }}
        >
          <button
            className={classNames(styles['button'], styles['image-text-box__button'])}
            onClick={() => setImageTextOpen(!imageTextOpen)}
            style={{ zIndex: ZIndex.LightBoxButtons }}
          >
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
      <TransformWrapper initialScale={1} maxScale={4} onZoom={value => setZoom(value.state.scale)}>
        <Controls />
        <TransformComponent
          wrapperStyle={{
            zIndex: 1,
          }}
        >
          <img src={imageSrc} alt={imageAlt} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default LightBox;
