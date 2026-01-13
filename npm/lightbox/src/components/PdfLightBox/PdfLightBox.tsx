import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { TransformWrapper, TransformComponent, useTransformComponent, useControls } from 'react-zoom-pan-pinch';

import Icon from '@helsenorge/designsystem-react/components/Icon';
import Minus from '@helsenorge/designsystem-react/components/Icons/Minus';
import PlusSmall from '@helsenorge/designsystem-react/components/Icons/PlusSmall';
import X from '@helsenorge/designsystem-react/components/Icons/X';
import { IconSize, KeyboardEventKey, ZIndex } from '@helsenorge/designsystem-react/constants';
import { useFocusTrap } from '@helsenorge/designsystem-react/hooks/useFocusTrap';
import { useReturnFocusOnUnmount } from '@helsenorge/designsystem-react/hooks/useReturnFocusOnUnmount';
import { disableBodyScroll, enableBodyScroll } from '@helsenorge/designsystem-react/utils/scroll';

import { useKeyboardEvent } from '@helsenorge/designsystem-react';

import MiniSlider from './MiniSlider';
import PdfViewer, { PdfViewerFile } from './PdfViewer';

import styles from './styles.module.scss';

// @todo: test ut react-pdf for visning av PDF-filer i lightboxen

export interface PdfLightBoxProps {
  /** Aria label for the close button */
  ariaLabelCloseButton: string;
  /** Aria label for the text box button when its open */
  ariaLabelCloseTextBox: string;
  /** Aria label for the full modal describing what the modal contains */
  ariaLabelLightBox: string;
  /** Aria label for the text box button when its closed */
  ariaLabelOpenTextBox: string;
  /** Aria label for the zoom in button */
  ariaLabelZoomIn: string;
  /** Aria label for the zoom out button */
  ariaLabelZoomOut: string;
  /** Aria label for the slider input component */
  ariaLabelZoomSlider: string;
  /** The content rendered inside the lightbox wrapper */
  children?: React.ReactNode;
  /** PDF-dokument som skal vises */
  file: PdfViewerFile;
  /** Function is called when user clicks the close button */
  onClose: () => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const PdfLightBox: React.FC<PdfLightBoxProps> = ({
  ariaLabelCloseButton,
  ariaLabelLightBox,
  ariaLabelZoomIn,
  ariaLabelZoomOut,
  ariaLabelZoomSlider,
  // children,
  onClose,
  testId,
  file,
}) => {
  const lightBoxRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1.0);
  useFocusTrap(lightBoxRef, true);
  useReturnFocusOnUnmount(lightBoxRef);

  useKeyboardEvent(lightBoxRef, onClose, [KeyboardEventKey.Escape]);

  const updateStates = (newZoom: number): void => {
    if (zoom === newZoom) return;
    setZoom(newZoom);
  };

  useEffect(() => {
    lightBoxRef.current?.focus();
  }, []);

  return (
    <div
      data-testid={testId}
      // className={styles.lightBox}
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
      {/* <div className={styles['pdf-container']}>
        <TransformWrapper smooth={false} initialScale={1} maxScale={4} doubleClick={{ mode: 'toggle', step: 4 }} wheel={{ disabled: true }}>
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
                <PdfViewer file={file} scale={zoom} />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div> */}
      <div className={styles['pdf-container']}>
        <TransformWrapper smooth={false} initialScale={1} maxScale={4} doubleClick={{ mode: 'toggle', step: 4 }} wheel={{ disabled: true }}>
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
                <PdfViewer file={file} scale={zoom} />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
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

export default PdfLightBox;
