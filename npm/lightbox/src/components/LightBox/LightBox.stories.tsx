import React, { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import Button from '@helsenorge/designsystem-react/components/Button';
import Dropdown from '@helsenorge/designsystem-react/components/Dropdown';
import Globe from '@helsenorge/designsystem-react/components/Icons/Globe';
import Spacer from '@helsenorge/designsystem-react/components/Spacer';
import LanguageProvider from '@helsenorge/designsystem-react/utils/language';
import longLoremText from '@helsenorge/designsystem-react/utils/loremtext';

import { LanguageLocales } from '@helsenorge/designsystem-react';

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

const AapnesOverSideRender = (args: React.ComponentProps<typeof LightBox>): React.ReactElement => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setLightboxOpen(true)} id="åpne">
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
          onClose={() => setLightboxOpen(false)}
          imageText="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          closeTextAfterSeconds={undefined}
        />
      )}
    </div>
  );
};

export const ÅpnesOverSide: Story = {
  render: args => <AapnesOverSideRender {...args} />,
};

export const EgetOppsettPåTekst: Story = {
  args: {
    closeTextAfterSeconds: undefined,
  },
  render: args => (
    <LightBox
      {...args}
      imageText={
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{'Tekst over flere'}</span>
          <span>
            {'linjer og med '}
            <strong>{'styling'}</strong>
          </span>
        </div>
      }
    />
  ),
};

export const WithLanguageProvider: Story = {
  render: args => {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.NORWEGIAN);

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <Dropdown svgIcon={Globe} triggerText="Velg språk">
          <Dropdown.SingleSelectItem text={'English'} asChild>
            <button onClick={() => setLanguage(LanguageLocales.ENGLISH)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Samisk'} asChild>
            <button onClick={() => setLanguage(LanguageLocales.SAMI_NORTHERN)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Nynorsk'} asChild>
            <button onClick={() => setLanguage(LanguageLocales.NORWEGIAN_NYNORSK)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Bokmål'} asChild defaultSelected>
            <button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)} />
          </Dropdown.SingleSelectItem>
        </Dropdown>
        <Spacer />
        <Button onClick={() => setLightboxOpen(true)} id="åpne">
          {'Åpne LightBox'}
        </Button>
        {lightboxOpen && <LightBox {...args} onClose={() => setLightboxOpen(false)} />}
      </LanguageProvider>
    );
  },
};
