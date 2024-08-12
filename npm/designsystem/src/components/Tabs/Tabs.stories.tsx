import React, { useRef } from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Tab from './Tab';
import Tabs from './Tabs';
import Docs from '../../docs';
import longLoremText, { mediumLoremText } from '../../utils/loremtext';
import Icon from '../Icon';
import HelpSign from '../Icons/HelpSign';
import PopOver from '../PopOver/PopOver';
import Title from '../Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Tabs',
  component: Tabs,
  subcomponents: { Tab },
  parameters: {
    docs: {
      description: {
        component:
          'Som en innbygger vil jeg kunne velge å skifte mellom å se flere større innholdsområder på siden slik at jeg kan rydde unna innhold og funksjoner som ikke omhandler det jeg ønsker å gjøre.',
      },
      page: (): React.JSX.Element => <Docs component={Tabs} />,
    },
  },
  args: {
    color: 'white',
    type: 'normal',
    sticky: true,
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
    sticky: {
      control: 'boolean',
      description: 'Whether the tab list should be sticky',
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

export const MedInnholdRundt: Story = {
  render: args => {
    const controllerRef = useRef<SVGSVGElement>(null);

    return (
      <>
        <Title>{'Noe annet innhold her '}</Title>
        <br />
        <span>{mediumLoremText}</span>
        <br />
        <br />
        <Tabs {...args} color="white">
          <Tabs.Tab title="Vaksinasjon">
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
          </Tabs.Tab>
          <Tabs.Tab title="Helserelaterte spørsmål">
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
          </Tabs.Tab>
          <Tabs.Tab title="Prøvesvar">
            <p style={{ padding: '1rem' }}>{longLoremText}</p>
          </Tabs.Tab>
        </Tabs>
        <br />
        <br />
        <span>{longLoremText}</span>
        <br />
        <span>{longLoremText}</span>
        <br />
        <br />
        <br />
        <Tabs {...args} color="blueberry" type="framed">
          <Tabs.Tab title="Fane 1">
            <div style={{ position: 'relative', display: 'inline' }}>
              <Icon ref={controllerRef} svgIcon={HelpSign} />
              <PopOver {...args} controllerRef={controllerRef}>
                <div style={{ padding: '0.5rem 1rem' }}>{'Tekst inne i PopOver, så får vi testet z-indeks også!'}</div>
              </PopOver>
            </div>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
          </Tabs.Tab>
          <Tabs.Tab title="Fane 2">
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
          </Tabs.Tab>
          <Tabs.Tab title="Fane 3">
            <p style={{ padding: '1rem' }}>{longLoremText}</p>
          </Tabs.Tab>
        </Tabs>
      </>
    );
  },
};
