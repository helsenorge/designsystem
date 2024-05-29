import React from 'react';

import { Title, Subtitle, Description, Primary, ArgTypes, Stories } from '@storybook/addon-docs';
import { StoryObj, Meta } from '@storybook/react';

import Tab from './Tab';
import Tabs from './Tabs';
import { isSupernova } from '../../docs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Som en innbygger vil jeg kunne velge å skifte mellom å se flere større innholdsområder på siden slik at jeg kan rydde unna innhold og funksjoner som ikke omhandler det jeg ønsker å gjøre.',
      },
      page: (): React.JSX.Element => {
        if (isSupernova()) {
          return <ArgTypes of={Tabs} />;
        }

        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <h2>{'Props'}</h2>
            <h3>{'Tabs'}</h3>
            <ArgTypes />
            <h3>{'Tabs.Tab'}</h3>
            <ArgTypes of={Tab} />
            <Stories />
          </>
        );
      },
    },
  },
  args: {
    color: 'white',
    type: 'normal',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['blueberry', 'neutral', 'white'],
      description: 'Sets the color of the tabs. Default: white',
    },
    testId: {
      control: 'text',
      description: 'Sets the data-testid attribute.',
    },
    type: {
      control: 'select',
      options: ['normal', 'framed'],
      describtion: 'Sets the visual type of the tabs. Default: normal',
    },
    activeTab: {
      control: 'number',
      description: 'Sets the active tab on controlled mode. Only use if controlled version is needed.',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Tabs {...args}>
      <Tabs.Tab title="Vaksinasjon">{'Innhold i fane om vaksinasjoner kommer her'}</Tabs.Tab>
      <Tabs.Tab title="Prøvesvar">{'Her finner man litt prøvesvar'}</Tabs.Tab>
      <Tabs.Tab title="Helserelaterte spørsmål">{'Fane om helserelaterte spørsmål kommer her'}</Tabs.Tab>
    </Tabs>
  ),
};

export const WithIcon: Story = {
  render: args => (
    <Tabs {...args}>
      <Tabs.Tab title="Vaksinasjon" icon={'Calendar'}>
        {''}
      </Tabs.Tab>
      <Tabs.Tab title="Prøvesvar" icon={'Calendar'}>
        {''}
      </Tabs.Tab>
      <Tabs.Tab title="Helserelaterte spørsmål" icon={'Calendar'}>
        {''}
      </Tabs.Tab>
    </Tabs>
  ),
};

export const Framed: Story = {
  render: args => (
    <>
      <Tabs {...args} color="white" type="framed">
        <Tabs.Tab title="Vaksinasjon">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
      </Tabs>
      <br />
      <Tabs {...args} color="neutral" type="framed">
        <Tabs.Tab title="Vaksinasjon">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
      </Tabs>
      <br />
      <Tabs {...args} color="blueberry" type="framed">
        <Tabs.Tab title="Vaksinasjon">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">
          <div style={{ height: '200px' }}>{''}</div>
        </Tabs.Tab>
      </Tabs>
    </>
  ),
};

export const Colors: Story = {
  render: args => (
    <>
      <Tabs {...args} color="white">
        <Tabs.Tab title="Vaksinasjon"></Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål"></Tabs.Tab>
        <Tabs.Tab title="Prøvesvar"></Tabs.Tab>
      </Tabs>
      <br />
      <Tabs {...args} color="neutral">
        <Tabs.Tab title="Vaksinasjon"></Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål"></Tabs.Tab>
        <Tabs.Tab title="Prøvesvar"></Tabs.Tab>
      </Tabs>
      <br />
      <Tabs {...args} color="blueberry">
        <Tabs.Tab title="Vaksinasjon"></Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål"></Tabs.Tab>
        <Tabs.Tab title="Prøvesvar"></Tabs.Tab>
      </Tabs>
    </>
  ),
};

export const Controlled: Story = {
  render: args => {
    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabClick = (index: number): void => {
      setActiveTab(index);
    };

    return (
      <>
        <div>{'Active tab: ' + activeTab}</div>
        <Tabs {...args} activeTab={activeTab}>
          <Tabs.Tab title="Fane 0" onTabClick={handleTabClick}>
            <div>{'Innhold i fane 0'}</div>
          </Tabs.Tab>
          <Tabs.Tab title="Fane 1" onTabClick={handleTabClick}>
            <div>{'Innhold i fane 1'}</div>
          </Tabs.Tab>
          <Tabs.Tab title="Fane 2" onTabClick={handleTabClick}>
            <div>{'Innhold i fane 2'}</div>
          </Tabs.Tab>
          <Tabs.Tab title="Fane 3" onTabClick={handleTabClick}>
            <div>{'Innhold i fane 3'}</div>
          </Tabs.Tab>
        </Tabs>
        <button onClick={() => setActiveTab(0)}>{'Sett aktiv tab til nummer 0'}</button>
      </>
    );
  },
};
