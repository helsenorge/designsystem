import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import longLoremText from '@helsenorge/designsystem-react/utils/loremtext';

import LightBox from './LightBox';

const meta = {
  title: '@helsenorge/lightbox/LightBox',
  component: LightBox,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av LightBox',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
      page: (): React.JSX.Element => <Docs component={LightBox} />,
    },
  },
  args: {
    ariaLabelCloseButton: 'Lukk Lightbox',
    ariaLabelLeftArrow: 'Forrige bilde',
    ariaLabelLightBox: 'Bildevisning',
    ariaLabelRightArrow: 'Neste bilde',
    ariaLabelCloseTextBox: 'Lukk tekstboks',
    ariaLabelOpenTextBox: 'Åpne tekstboks',
    ariaLabelZoomIn: 'Zoom inn',
    ariaLabelZoomOut: 'Zoom ut',
    ariaLabelZoomSlider: 'Zoom',
    closeTextAfterSeconds: 3,
    imageAlt: 'A random cat',
    imageSrc: 'https://placehold.co/640x480',
    testId: 'lightBox',
    imageText: 'En søt pus eller kanskje flere',
    onClose: action('Close button clicked'),
    onLeftArrowClick: action('Left arrow clicked'),
    onRightArrowClick: action('Right arrow clicked'),
  },
  argTypes: {},
} satisfies Meta<typeof LightBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <LightBox {...args} />,
};

export const LangBildetekst: Story = {
  render: args => (
    <LightBox
      {...args}
      imageText={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis posuere, dignissim ex at, interdum metus. Etiam efficitur ut lectus et condimentum. Suspendisse ornare suscipit metus sit amet luctus. Quisque risus orci, molestie sit amet tempus non, semper a ligula. Etiam volutpat scelerisque magna vel feugiat. Sed ac venenatis justo. Aliquam iaculis ante a eros sagittis, id gravida felis placerat. Cras luctus mi quam, non venenatis lorem condimentum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla sem, placerat non blandit ac, interdum vel augue. Nulla fermentum orci non augue pulvinar, sed posuere neque scelerisque. Aenean pulvinar commodo lorem vel consectetur. Nam augue lectus, tempus vitae finibus id, dignissim id eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar commodo lorem vel consectetur. Nam augue lectus, tempus vitae finibus id, dignissim id eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
      closeTextAfterSeconds={undefined}
    />
  ),
};

export const ÅpnesOverSide: Story = {
  render: args => {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);

    return (
      <div>
        <button
          onClick={(): void => {
            setLightboxOpen(true);
          }}
          id="åpne"
        >
          {'Åpne LightBox over side'}
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
        {lightboxOpen && (
          <LightBox
            {...args}
            onClose={(): void => {
              setLightboxOpen(false);
            }}
            imageText={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis posuere, dignissim ex at, interdum metus. Etiam efficitur ut lectus et condimentum. Suspendisse ornare suscipit metus sit amet luctus. Quisque risus orci, molestie sit amet tempus non, semper a ligula. Etiam volutpat scelerisque magna vel feugiat. Sed ac venenatis justo. Aliquam iaculis ante a eros sagittis, id gravida felis placerat. Cras luctus mi quam, non venenatis lorem condimentum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla sem, placerat non blandit ac, interdum vel augue. Nulla fermentum orci non augue pulvinar, sed posuere neque scelerisque. Aenean pulvinar commodo lorem vel consectetur. Nam augue lectus, tempus vitae finibus id, dignissim id eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar commodo lorem vel consectetur. Nam augue lectus, tempus vitae finibus id, dignissim id eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
            closeTextAfterSeconds={undefined}
          />
        )}
      </div>
    );
  },
};
