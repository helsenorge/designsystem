import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { TransformWrapper, TransformComponent, useTransformComponent, useControls } from 'react-zoom-pan-pinch';

import Icon from '@helsenorge/designsystem-react/components/Icon';
import ChevronLeft from '@helsenorge/designsystem-react/components/Icons/ChevronLeft';
import ChevronRight from '@helsenorge/designsystem-react/components/Icons/ChevronRight';
import ChevronsDown from '@helsenorge/designsystem-react/components/Icons/ChevronsDown';
import ChevronsUp from '@helsenorge/designsystem-react/components/Icons/ChevronsUp';
import Minus from '@helsenorge/designsystem-react/components/Icons/Minus';
import PlusSmall from '@helsenorge/designsystem-react/components/Icons/PlusSmall';
import X from '@helsenorge/designsystem-react/components/Icons/X';
import { IconSize, KeyboardEventKey, ZIndex } from '@helsenorge/designsystem-react/constants';
import { useFocusTrap } from '@helsenorge/designsystem-react/hooks/useFocusTrap';
import { useReturnFocusOnUnmount } from '@helsenorge/designsystem-react/hooks/useReturnFocusOnUnmount';
import { useSize } from '@helsenorge/designsystem-react/hooks/useSize';
import { disableBodyScroll, enableBodyScroll } from '@helsenorge/designsystem-react/utils/scroll';

import { useKeyboardEvent } from '@helsenorge/designsystem-react';

import MiniSlider from './MiniSlider';

import styles from './styles.module.scss';

export interface LightBoxProps {
  /** Aria label for the close button */
  ariaLabelCloseButton: string;
  /** Aria label for the text box button when its open */
  ariaLabelCloseTextBox: string;
  /** Aria label for the left arrow button */
  ariaLabelLeftArrow?: string;
  /** Aria label for the full modal describing what the modal contains */
  ariaLabelLightBox: string;
  /** Aria label for the right arrow button */
  ariaLabelRightArrow?: string;
  /** Aria label for the text box button when its closed */
  ariaLabelOpenTextBox: string;
  /** Aria label for the zoom in button */
  ariaLabelZoomIn: string;
  /** Aria label for the zoom out button */
  ariaLabelZoomOut: string;
  /** Aria label for the slider input component */
  ariaLabelZoomSlider: string;
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
  ariaLabelLightBox,
  ariaLabelRightArrow,
  ariaLabelCloseTextBox,
  ariaLabelOpenTextBox,
  ariaLabelZoomIn,
  ariaLabelZoomOut,
  ariaLabelZoomSlider,
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
  const lightBoxRef = useRef<HTMLDivElement>(null);
  const textBoxRef = useRef<HTMLParagraphElement>(null);
  const { height: textBoxHeight = 0 } = useSize(textBoxRef) || {};
  const [zoom, setZoom] = useState(1.0);
  useFocusTrap(lightBoxRef, true);
  useReturnFocusOnUnmount(lightBoxRef);

  useKeyboardEvent(lightBoxRef, onClose, [KeyboardEventKey.Escape]);

  const updateStates = (newZoom: number): void => {
    if (zoom === newZoom) return;
    setZoom(newZoom);
  };

  useEffect(() => {
    if (!closeTextAfterSeconds) return;
    const timer = setTimeout(() => {
      setImageTextOpen(false);
    }, closeTextAfterSeconds * 1000);
    return (): void => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    lightBoxRef.current?.focus();
  }, []);

  return (
    <div
      data-testid={testId}
      className={styles.lightBox}
      style={{ zIndex: ZIndex.OverlayScreen }}
      role="dialog"
      aria-modal={true}
      tabIndex={-1}
      aria-label={ariaLabelLightBox}
      ref={lightBoxRef}
    >
      <button
        onClick={onClose}
        aria-label={ariaLabelCloseButton}
        data-testid="closeButton"
        className={classNames(styles.button, styles['close-button'])}
        style={{ zIndex: ZIndex.LightBoxButtons }}
      >
        <Icon svgIcon={X} color="white" size={IconSize.XSmall} />
      </button>
      {onLeftArrowClick && (
        <button
          className={classNames(styles.button, styles['arrow-button'], styles['arrow-button--left'])}
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
          className={classNames(styles.button, styles['arrow-button'], styles['arrow-button--right'])}
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
            className={classNames(styles.button, styles['image-text-box__button'])}
            onClick={() => setImageTextOpen(!imageTextOpen)}
            style={{ zIndex: ZIndex.LightBoxButtons }}
            aria-label={imageTextOpen ? ariaLabelCloseTextBox : ariaLabelOpenTextBox}
            aria-expanded={imageTextOpen}
          >
            {imageTextOpen ? (
              <Icon svgIcon={ChevronsDown} color="white" size={IconSize.XSmall} />
            ) : (
              <Icon svgIcon={ChevronsUp} color="white" size={IconSize.XSmall} />
            )}
          </button>
          <div>
            <p ref={textBoxRef} className={styles['image-text-box__text']}>
              {imageText}
            </p>
            <div className={styles['image-text-box__overflow-border']}></div>
          </div>
        </div>
      )}
      <TransformWrapper smooth={false} initialScale={1} maxScale={4} doubleClick={{ mode: 'toggle', step: 4 }}>
        {({ setTransform }) => (
          <>
            <Controls
              transform={setTransform}
              updateStates={updateStates}
              zoom={zoom}
              ariaLabelZoomIn={ariaLabelZoomIn}
              ariaLabelZoomOut={ariaLabelZoomOut}
              ariaLabelZoomSlider={ariaLabelZoomSlider}
            />
            <TransformComponent
              wrapperStyle={{
                zIndex: 1,
                width: '100%',
                height: '100%',
              }}
              contentStyle={{
                width: '100%',
                height: '100%',
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

const Controls = ({
  transform,
  updateStates,
  zoom,
  ariaLabelZoomIn,
  ariaLabelZoomOut,
  ariaLabelZoomSlider,
}: {
  transform: (newPositionX: number, newPositionY: number, newScale: number, animationTime?: number | undefined) => void;
  updateStates: (newZoom: number) => void;
  zoom: number;
  ariaLabelZoomIn: string;
  ariaLabelZoomOut: string;
  ariaLabelZoomSlider: string;
}): React.JSX.Element => {
  useTransformComponent(({ state }) => {
    updateStates(state.scale);
  });
  const { zoomIn, zoomOut, centerView } = useControls();
  let centerTimeout: number;

  const calculateZoomCenter = (newScale: number): number[] => {
    const element = document.getElementsByClassName('react-transform-component')[0];
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    const ratio = (newScale - zoom) / zoom + 1;
    const x = (matrix.m41 - (window.innerWidth / 2) * (1 - zoom / newScale)) * ratio;
    const y = (matrix.m42 - (window.innerHeight / 2) * (1 - zoom / newScale)) * ratio;
    return [x, y];
  };
  const adjustZoom = (newScale: number | undefined): void => {
    if (newScale === undefined || newScale === zoom) return;
    if (newScale < 1) newScale = 1;
    if (newScale > 4) newScale = 4;
    const [x, y] = calculateZoomCenter(newScale);
    transform(x, y, newScale, 1);

    if (centerTimeout) {
      clearTimeout(centerTimeout);
    }

    // Starter sentrering timeout hvis det zoomes ut
    if (newScale - zoom < 0) {
      centerTimeout = window.setTimeout(() => {
        centerView();
      }, 160);
    }
  };

  useEffect(() => {
    disableBodyScroll();
    return (): void => {
      enableBodyScroll();
    };
  }, []);

  return (
    <div className={classNames(styles['zoom-buttons'])} style={{ zIndex: ZIndex.LightBoxButtons }}>
      <button className={classNames(styles.button)} onClick={() => zoomOut()} aria-label={ariaLabelZoomOut}>
        <Icon svgIcon={Minus} color="white" size={IconSize.XSmall} />
      </button>
      <MiniSlider minValue={1} maxValue={4} onChange={adjustZoom} value={zoom} ariaLabel={ariaLabelZoomSlider} />
      <button className={classNames(styles.button)} onClick={() => zoomIn()} aria-label={ariaLabelZoomIn}>
        <Icon svgIcon={PlusSmall} color="white" size={IconSize.XSmall} />
      </button>
    </div>
  );
};

export default LightBox;
