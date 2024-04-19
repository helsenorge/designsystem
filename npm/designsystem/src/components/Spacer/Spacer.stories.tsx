import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Spacer from './Spacer';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Spacer',
  component: Spacer,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Spacer} />,
      description: {
        component:
          'Brukes til å legge til luft i layout og mellom komponenter. For mer fleksibilitet med marginer og padding kan getSpacer funksjonen importeres og brukes fra scss ressursene.',
      },
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <p>{'4xs'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'4xs'} />
      </div>
      <p>{'3xs'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'3xs'} />
      </div>
      <p>{'2xs'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'2xs'} />
      </div>
      <p>{'xs'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'xs'} />
      </div>
      <p>{'s'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'s'} />
      </div>
      <p>{'m'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'m'} />
      </div>
      <p>{'l'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'l'} />
      </div>
      <p>{'xl'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'xl'} />
      </div>
      <p>{'2xl'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'2xl'} />
      </div>
      <p>{'3xl'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'3xl'} />
      </div>
      <p>{'4xl'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'4xl'} />
      </div>
      <p>{'5xl'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'5xl'} />
      </div>
      <p>{'6xl'}</p>
      <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
        <Spacer size={'6xl'} />
      </div>
    </>
  ),
};
