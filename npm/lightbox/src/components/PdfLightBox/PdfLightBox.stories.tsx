import React, { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import longLoremText from '@helsenorge/designsystem-react/utils/loremtext';

import PdfLightBox from './PdfLightBox';
import PdfViewer from './PdfViewer';

const meta = {
  title: '@helsenorge/lightbox/PdfLightBox',
  component: PdfLightBox,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av PdfLightBox',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
      page: (): React.JSX.Element => <Docs component={PdfLightBox} />,
    },
  },
  args: {
    ariaLabelCloseButton: 'Lukk PdfLightBox',
    ariaLabelLightBox: 'Bildevisning',
    ariaLabelCloseTextBox: 'Lukk tekstboks',
    ariaLabelOpenTextBox: 'Åpne tekstboks',
    ariaLabelZoomIn: 'Zoom inn',
    ariaLabelZoomOut: 'Zoom ut',
    ariaLabelZoomSlider: 'Zoom',
    testId: 'lightBox',
    onClose: action('Close button clicked'),
    children: (
      <div style={{ width: '800px', height: '1000px', backgroundColor: '#ccc' }}>
        <p style={{ width: '100%', textAlign: 'center', marginTop: '200px' }}>{'Her kommer det en PDF'}</p>
      </div>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof PdfLightBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <PdfLightBox {...args} />,
};

export const LangBildetekst: Story = {
  render: args => <PdfLightBox {...args} />,
};

export const PdfViewerExample: Story = {
  render: () => {
    const [file, setFile] = useState<Blob | null>(null);
    const [lightboxOpen, setLightboxOpen] = React.useState(false);

    return (
      <div>
        <input
          type="file"
          accept="application/pdf"
          onChange={e => {
            const f = e.target.files?.[0];
            if (f) setFile(f);
          }}
        />
        <button onClick={() => setLightboxOpen(true)} id="åpne">
          {'Åpne PdfLightBox over side'}
        </button>
        {file && lightboxOpen && (
          <PdfLightBox
            ariaLabelCloseButton={''}
            ariaLabelCloseTextBox={''}
            ariaLabelLightBox={''}
            ariaLabelOpenTextBox={''}
            ariaLabelZoomIn={''}
            ariaLabelZoomOut={''}
            ariaLabelZoomSlider={''}
            onClose={() => setLightboxOpen(false)}
            file={file}
          ></PdfLightBox>
        )}
      </div>
    );
  },
};

export const PdfViewerWithoutLightboxExample: Story = {
  render: () => {
    const [file, setFile] = useState<Blob | null>(null);
    // const [lightboxOpen, setLightboxOpen] = React.useState(false);

    return (
      <div>
        <input
          type="file"
          accept="application/pdf"
          onChange={e => {
            const f = e.target.files?.[0];
            if (f) setFile(f);
          }}
        />
        {/* <button onClick={() => setLightboxOpen(true)} id="åpne">
          {'Åpne PdfLightBox over side'}
        </button> */}
        {file && (
          <div style={{ height: '800px', overflow: 'auto' }}>
            <PdfViewer file={file} />
          </div>
        )}
      </div>
    );
  },
};

const AapnesOverSideRender = (args: React.ComponentProps<typeof PdfLightBox>): React.ReactElement => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setLightboxOpen(true)} id="åpne">
        {'Åpne PdfLightBox over side'}
      </button>

      <section>{longLoremText}</section>
      <section>{longLoremText}</section>
      <section>{longLoremText}</section>

      <button id="tilfeldig" onClick={() => null}>
        {'Tilfeldig knapp'}
      </button>

      <section>{longLoremText}</section>
      <section>{longLoremText}</section>
      <section>{longLoremText}</section>

      {lightboxOpen && <PdfLightBox {...args} onClose={() => setLightboxOpen(false)} />}
    </div>
  );
};

export const AapnesOverSide: Story = {
  render: args => <AapnesOverSideRender {...args} />,
};
