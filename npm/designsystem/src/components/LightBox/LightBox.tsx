import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef, useTransformComponent } from 'react-zoom-pan-pinch';

import MiniSlider from './miniSlider';
import { IconSize, ZIndex } from '../../constants';
import { useSize } from '../../hooks/useSize';
import { debounce } from '../../utils/debounce';
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
  /** Aria label for the left arrow button */
  ariaLabelLeftArrow: string;
  /** Aria label for the right arrow button */
  ariaLabelRightArrow: string;
  /** Aria label for the text box button when its open */
  ariaLabelCloseTextBox: string;
  /** Aria label for the text box button when its closed */
  ariaLabelOpenTextBox: string;
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
  ariaLabelCloseButton,
  ariaLabelLeftArrow,
  ariaLabelRightArrow,
  ariaLabelCloseTextBox,
  ariaLabelOpenTextBox,
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

  const updateStates = (newZoom: number): void => {
    if (zoom === newZoom) return;
    setZoom(newZoom);
  };

  const Controls = ({ transform }: { transform: (newPositionX: number, newPositionY: number, newScale: number) => void }): JSX.Element => {
    useTransformComponent(({ state }) => {
      updateStates(state.scale);
    });

    const adjustZoom = (newScale: number | undefined): void => {
      if (newScale === undefined) return;
      const element = document.getElementsByClassName('react-transform-component')[0];
      const style = window.getComputedStyle(element);
      const matrix = new WebKitCSSMatrix(style.transform);

      const ratio = (newScale - zoom) / zoom + 1;
      const x = (matrix.m41 - (window.innerWidth / 2) * (1 - zoom / newScale)) * ratio;
      const y = (matrix.m42 - (window.innerHeight / 2) * (1 - zoom / newScale)) * ratio;

      transform(x, y, newScale);
    };
    const [debouncedAdjustZoom] = debounce(adjustZoom, 50);

    return (
      <div className={classNames(styles['zoom-buttons'])}>
        <span className={classNames(styles['slider'])}>{'zoom:' + zoom.toFixed(1)}</span>
        <button className={classNames(styles['button'])} onClick={() => adjustZoom(2)}>
          {'2'}
        </button>
        <MiniSlider minValue={1} maxValue={4} onChange={debouncedAdjustZoom} value={zoom} />
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
        aria-label={ariaLabelCloseButton}
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
          aria-label={ariaLabelLeftArrow}
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
          aria-label={ariaLabelRightArrow}
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
            aria-label={imageTextOpen ? ariaLabelCloseTextBox : ariaLabelOpenTextBox}
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
      <TransformWrapper initialScale={1} maxScale={4} ref={zoomRef} doubleClick={{ mode: 'toggle' }}>
        {({ setTransform }) => (
          <>
            <Controls transform={setTransform} />
            <TransformComponent
              wrapperStyle={{
                zIndex: 1,
              }}
            >
              <img src={imageSrc} alt={imageAlt} />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default LightBox;
