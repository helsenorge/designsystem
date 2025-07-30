import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import Progressbar, { Overlay, ProgressBarMode } from './Progressbar';
import Button from '../Button/Button';
import Title from '../Title/Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Progressbar',
  component: Progressbar,
  parameters: {
    docs: {
      description: {
        component:
          'Progressbar vises i stedet for loader når man skal indikere at en prosess er underveis, og samtidig kan si noe om hvor mye av prosessen som er gjennomført. Progressbar benyttes ved prosesser som tar mer enn 1-2 sekunder å gjennomføre. ',
      },
      page: (): React.JSX.Element => <Docs component={Progressbar} />,
    },
  },
  args: {
    value: 0,
  },
  argTypes: {
    value: {
      control: 'number',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    mode: {
      control: 'select',
      options: ['onlight', 'ondark'],
    },
    ariaLabel: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Progressbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return <Progressbar {...args} />;
  },
};

export const Animated: Story = {
  render: args => {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return <Progressbar {...args} value={progress} />;
  },
};

export const Modes: Story = {
  render: args => {
    return (
      <>
        <Title>{'onLight'}</Title>
        <div style={{ backgroundColor: 'white' }}>
          <Progressbar {...args} mode={ProgressBarMode.onlight} />
        </div>
        <br />
        <Title>{'onDark'}</Title>
        <div style={{ backgroundColor: 'darkgrey' }}>
          <Progressbar {...args} mode={ProgressBarMode.ondark} />
        </div>
      </>
    );
  },
};
export const OverlayScreen: Story = {
  render: args => (
    <div style={{ width: '100%', height: '200vh' }}>
      <Progressbar {...args} overlay={Overlay.screen} />
    </div>
  ),
};

export const OverlayParent: Story = {
  render: args => (
    <div style={{ width: '100%', height: '100vh' }}>
      <div>
        <Title>{'Søknad'}</Title>
        <p style={{ color: 'red' }}>{'Søknad om greier'}</p>
        <Button>{'Lagre'}</Button>
        <Progressbar {...args} overlay={Overlay.parent} />
      </div>
    </div>
  ),
};
