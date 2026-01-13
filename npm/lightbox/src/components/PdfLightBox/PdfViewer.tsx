import { useMemo, useState } from 'react';

import { pdfjs } from 'react-pdf';

import Loader from '@helsenorge/designsystem-react/components/Loader';
import NotificationPanel from '@helsenorge/designsystem-react/components/NotificationPanel';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import PdfDocumentRenderer from './PdfDocumentRenderer';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

export type PdfViewerFile = string | ArrayBuffer | Blob | null;

export interface PdfViewerProps {
  /** PDF-dokument som skal vises */
  file: PdfViewerFile;
  /** Navn på PDF-filen ved nedlasting av fil i Blob eller ArrayBuffer-format */
  fileName?: string;
  // Callback i tilfelle feil
  onError?: (error: Error) => void;
  // Callback når PDF er lastet inn
  onLoadSuccess?: () => void;
  // ID til element som skal brukes som beskrivende tekst for container som viser PDFen. Har forrang foran ressoursteksten documentAriaLabel.
  documentAriaLabelledBy?: string;
  // Komponenter som skal vises i Toolbar
  toolbarChildren?: React.ReactNode;
  scale?: number;
}

const PdfViewer: React.FC<PdfViewerProps> = (props: PdfViewerProps) => {
  //   const [scale, setScale] = useState<number>(1);
  const [error, setError] = useState<string>();
  // Etter anbefaling fra react-pdf
  const memoizedFile = useMemo(() => props.file, [props.file]);

  const handleError = (error: Error): void => {
    setError('Error error error');

    if (props.onError) {
      props.onError(error);
    }
  };

  const onLoadSuccess = (): void => {
    if (props.onLoadSuccess) {
      props.onLoadSuccess();
    }
  };

  return (
    <PdfDocumentRenderer
      file={memoizedFile}
      scale={props.scale ?? 1}
      onLoadSuccess={onLoadSuccess}
      onError={handleError}
      loader={<Loader ariaLabel={'Laster'} center />}
      error={<NotificationPanel variant="error">{error}</NotificationPanel>}
      ariaLabel={!props.documentAriaLabelledBy ? 'Dokument' : undefined}
      ariaLabelledBy={props.documentAriaLabelledBy}
    />
  );
};

export default PdfViewer;
