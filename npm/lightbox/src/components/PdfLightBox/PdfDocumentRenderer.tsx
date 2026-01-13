import { useState } from 'react';

import { Document, Page } from 'react-pdf';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import { useStopPropagation } from '@helsenorge/designsystem-react/hooks/usestopPropagation';

import { PdfViewerFile } from './PdfViewer';
import { useWidth } from './useWidth';

import styles from './styles.module.scss';

const MAX_WIDTH = 800;

export interface PdfDocumentRendererProps {
  file: PdfViewerFile;
  scale: number;
  onLoadSuccess: () => void;
  onError: (error: Error) => void;
  loader: React.ReactNode;
  error: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

const PdfDocumentRenderer: React.FC<PdfDocumentRendererProps> = ({
  file,
  scale,
  onLoadSuccess,
  onError,
  loader,
  error,
  ariaLabel,
  ariaLabelledBy,
}) => {
  const [numPages, setNumPages] = useState<number>();
  const { ref: containerRef, width: containerWidth } = useWidth<HTMLDivElement>({ debounceMs: 300 });

  const hasAriaAttributes = ariaLabel || ariaLabelledBy;

  // @todo: Fjern denne assertion etter oppdatering i designsystem-react
  useStopPropagation(containerRef as React.RefObject<HTMLElement>, ['touchstart', 'touchmove']);

  const handleLoadSuccess = (document: { numPages: number }): void => {
    setNumPages(document.numPages);
    onLoadSuccess();
  };

  return (
    <div
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      ref={containerRef}
      role={hasAriaAttributes ? 'region' : undefined}
      tabIndex={hasAriaAttributes ? 0 : undefined}
      className={styles['pdf-viewer']}
    >
      <TransformWrapper smooth={false} initialScale={1} maxScale={4} doubleClick={{ mode: 'toggle', step: 4 }} wheel={{ disabled: true }}>
        {() => (
          <>
            {/* <Controls
              transform={setTransform}
              updateStates={updateStates}
              zoom={zoom}
              ariaLabelZoomIn={ariaLabelZoomIn}
              ariaLabelZoomOut={ariaLabelZoomOut}
              ariaLabelZoomSlider={ariaLabelZoomSlider}
            /> */}
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
              <Document
                error={error}
                className={styles['pdf-viewer__document']}
                file={file}
                loading={loader}
                onError={onError}
                onLoadError={onError}
                onLoadSuccess={handleLoadSuccess}
                onSourceError={onError}
              >
                {numPages &&
                  Array.from({ length: numPages }, (_, i) => i + 1).map(pageNumber => (
                    <Page
                      canvasBackground={'white'}
                      key={pageNumber}
                      error={error}
                      loading={loader}
                      onError={onError}
                      onLoadError={onError}
                      onRenderError={onError}
                      pageNumber={pageNumber}
                      scale={scale}
                      className={styles['pdf-viewer__page']}
                      width={containerWidth ? Math.min(containerWidth, MAX_WIDTH) : MAX_WIDTH}
                    />
                  ))}
              </Document>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default PdfDocumentRenderer;
