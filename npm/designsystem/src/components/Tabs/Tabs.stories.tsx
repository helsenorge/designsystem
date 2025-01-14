import React, { useRef } from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Tab from './Tab';
import Tabs from './Tabs';
import longLoremText, { mediumLoremText, shortLoremText } from '../../utils/loremtext';
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
    onColor: 'onwhite',
    sticky: true,
    touchBehaviour: 'swipe',
    ariaLabelLeftButton: 'Scroll left',
    ariaLabelRightButton: 'Scroll right',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['blueberry', 'neutral', 'white'],
      description: 'Sets the color of the tabs. Default: white',
    },
    containerBreakout: {
      control: 'boolean',
      description: 'Sets wether the component should use the container-breakout class. Default: true ',
    },
    onColor: {
      control: 'select',
      options: ['onwhite', 'onblueberry', 'onneutral'],
      description: 'Sets the background color of the tabs. Can only be used when the color is set to white. Default: onwhite',
    },
    testId: {
      control: 'text',
      description: 'Sets the data-testid attribute.',
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
      <Tabs.Tab title="Vaksinasjon">{longLoremText}</Tabs.Tab>
      <Tabs.Tab title="Prøvesvar">{mediumLoremText}</Tabs.Tab>
      <Tabs.Tab title="Helserelaterte spørsmål">{shortLoremText}</Tabs.Tab>
    </Tabs>
  ),
};

export const WithIcon: Story = {
  render: args => (
    <Tabs {...args}>
      <Tabs.Tab title="Vaksinasjon" icon={'Calendar'}>
        {longLoremText}
      </Tabs.Tab>
      <Tabs.Tab title="Prøvesvar" icon={'Calendar'}>
        {mediumLoremText}
      </Tabs.Tab>
      <Tabs.Tab title="Helserelaterte spørsmål" icon={'Calendar'}>
        {shortLoremText}
      </Tabs.Tab>
    </Tabs>
  ),
};

export const Colors: Story = {
  render: args => (
    <>
      <Tabs {...args} color="white">
        <Tabs.Tab title="Vaksinasjon">{longLoremText}</Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">{mediumLoremText}</Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">{shortLoremText}</Tabs.Tab>
      </Tabs>
      <br />
      <Tabs {...args} color="neutral">
        <Tabs.Tab title="Vaksinasjon">{longLoremText}</Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">{mediumLoremText}</Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">{shortLoremText}</Tabs.Tab>
      </Tabs>
      <br />
      <Tabs {...args} color="blueberry">
        <Tabs.Tab title="Vaksinasjon">{longLoremText}</Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">{mediumLoremText}</Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">{shortLoremText}</Tabs.Tab>
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
        <Tabs {...args} color="blueberry">
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

export const ControlledMedInnholdRundt: Story = {
  render: args => {
    const controllerRef = useRef<SVGSVGElement>(null);
    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabClick = (index: number): void => {
      setActiveTab(index);
    };

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
        <button onClick={() => setActiveTab(1)}>{'Sett aktiv tab til nummer 2'}</button>
        <br />
        <span>{longLoremText}</span>
        <br />
        <span>{longLoremText}</span>
        <br />
        <br />
        <br />
        <Tabs {...args} color="blueberry" activeTab={activeTab}>
          <Tabs.Tab title="Fane 1" onTabClick={handleTabClick}>
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
          <Tabs.Tab title="Fane 2" onTabClick={handleTabClick}>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
            <p style={{ padding: '1rem' }}>{mediumLoremText}</p>
          </Tabs.Tab>
          <Tabs.Tab title="Fane 3" onTabClick={handleTabClick}>
            <p style={{ padding: '1rem' }}>{longLoremText}</p>
          </Tabs.Tab>
        </Tabs>
      </>
    );
  },
};
