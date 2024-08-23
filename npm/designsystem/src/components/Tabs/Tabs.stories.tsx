import React, { useRef } from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Tab from './Tab';
import Tabs from './Tabs';
import Docs from '../../docs';
import longLoremText, { mediumLoremText, shortLoremText } from '../../utils/loremtext';
import Icon from '../Icon';
import HelpSign from '../Icons/HelpSign';
import Panel from '../Panel/Panel';
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
    touchBehaviour: 'swipe',
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
      description: 'Sets the visual type of the tabs. Default: normal',
    },
    activeTab: {
      control: 'number',
      description: 'Sets the active tab on controlled mode. Only use if controlled version is needed.',
    },
    sticky: {
      control: 'boolean',
      description: 'Whether the tab list should be sticky',
    },
    touchBehaviour: {
      control: 'select',
      options: ['swipe', 'none'],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Tabs {...args}>
      <Tabs.Tab title="Vaksinasjon">
        <Panel>
          <div>
            <Title appearance="title2">{'E-resept'}</Title>
            <p style={{ whiteSpace: 'pre-line' }}>
              {`
        Legemiddel: Aerius Mikst 0,5 mg/ml

        Dosering: 1 tablett daglig

        Virkestoff: Cetrizin
        ATC-kode:R06AX27
        Pakningsstørrelse: 120ml


        Antall: 1
        Forskrevet av: Diana Dips, Testsykehuset HF
        Forskrevet dato: 27.09.2020
        Gyldig til: 20.09.2021
        Reiterasjoner: 3 (Det betyr at du kan hente ut forskrevet mengde 4 ganger)
        Antall utlevering: 1 (Se utleveringer på denne resepten)
        Refusjonshjemmel: §5-14 §2 (blå resept)
        Resepten er hentet fra: Reseptformidleren`}
            </p>
          </div>
        </Panel>
        <Panel>
          <div>
            <Title appearance="title2">{'E-resept'}</Title>
            <p style={{ whiteSpace: 'pre-line' }}>
              {`
        Legemiddel: Aerius Mikst 0,5 mg/ml

        Dosering: 1 tablett daglig

        Virkestoff: Cetrizin
        ATC-kode:R06AX27
        Pakningsstørrelse: 120ml


        Antall: 1
        Forskrevet av: Diana Dips, Testsykehuset HF
        Forskrevet dato: 27.09.2020
        Gyldig til: 20.09.2021
        Reiterasjoner: 3 (Det betyr at du kan hente ut forskrevet mengde 4 ganger)
        Antall utlevering: 1 (Se utleveringer på denne resepten)
        Refusjonshjemmel: §5-14 §2 (blå resept)
        Resepten er hentet fra: Reseptformidleren`}
            </p>
          </div>
        </Panel>
        <Panel>
          <div>
            <Title appearance="title2">{'E-resept'}</Title>
            <p style={{ whiteSpace: 'pre-line' }}>
              {`
        Legemiddel: Aerius Mikst 0,5 mg/ml

        Dosering: 1 tablett daglig

        Virkestoff: Cetrizin
        ATC-kode:R06AX27
        Pakningsstørrelse: 120ml


        Antall: 1
        Forskrevet av: Diana Dips, Testsykehuset HF
        Forskrevet dato: 27.09.2020
        Gyldig til: 20.09.2021
        Reiterasjoner: 3 (Det betyr at du kan hente ut forskrevet mengde 4 ganger)
        Antall utlevering: 1 (Se utleveringer på denne resepten)
        Refusjonshjemmel: §5-14 §2 (blå resept)
        Resepten er hentet fra: Reseptformidleren`}
            </p>
          </div>
        </Panel>
        <Panel>
          <div>
            <Title appearance="title2">{'E-resept'}</Title>
            <p style={{ whiteSpace: 'pre-line' }}>
              {`
        Legemiddel: Aerius Mikst 0,5 mg/ml

        Dosering: 1 tablett daglig

        Virkestoff: Cetrizin
        ATC-kode:R06AX27
        Pakningsstørrelse: 120ml


        Antall: 1
        Forskrevet av: Diana Dips, Testsykehuset HF
        Forskrevet dato: 27.09.2020
        Gyldig til: 20.09.2021
        Reiterasjoner: 3 (Det betyr at du kan hente ut forskrevet mengde 4 ganger)
        Antall utlevering: 1 (Se utleveringer på denne resepten)
        Refusjonshjemmel: §5-14 §2 (blå resept)
        Resepten er hentet fra: Reseptformidleren`}
            </p>
          </div>
        </Panel>
        <Panel>
          <div>
            <Title appearance="title2">{'E-resept'}</Title>
            <p style={{ whiteSpace: 'pre-line' }}>
              {`
        Legemiddel: Aerius Mikst 0,5 mg/ml

        Dosering: 1 tablett daglig

        Virkestoff: Cetrizin
        ATC-kode:R06AX27
        Pakningsstørrelse: 120ml


        Antall: 1
        Forskrevet av: Diana Dips, Testsykehuset HF
        Forskrevet dato: 27.09.2020
        Gyldig til: 20.09.2021
        Reiterasjoner: 3 (Det betyr at du kan hente ut forskrevet mengde 4 ganger)
        Antall utlevering: 1 (Se utleveringer på denne resepten)
        Refusjonshjemmel: §5-14 §2 (blå resept)
        Resepten er hentet fra: Reseptformidleren`}
            </p>
          </div>
        </Panel>
        {longLoremText}
        {longLoremText}
        {longLoremText}
        {longLoremText}
        {longLoremText}
      </Tabs.Tab>
      <Tabs.Tab title="Prøvesvar">
        {mediumLoremText}
        {mediumLoremText}
        {mediumLoremText}
        {mediumLoremText}
        {mediumLoremText}
      </Tabs.Tab>
      <Tabs.Tab title="Helserelaterte spørsmål">
        {shortLoremText}
        {shortLoremText}
        {shortLoremText}
        {shortLoremText}
      </Tabs.Tab>
    </Tabs>
  ),
};

export const WithIcon: Story = {
  render: args => (
    <Tabs {...args}>
      <Tabs.Tab title="Vaksinasjon" icon={'Calendar'}>
        {longLoremText}
        {longLoremText}
        {longLoremText}
        {longLoremText}
        {longLoremText}
      </Tabs.Tab>
      <Tabs.Tab title="Prøvesvar" icon={'Calendar'}>
        {mediumLoremText}
        {mediumLoremText}
        {mediumLoremText}
        {mediumLoremText}
        {mediumLoremText}
      </Tabs.Tab>
      <Tabs.Tab title="Helserelaterte spørsmål" icon={'Calendar'}>
        {shortLoremText}
        {shortLoremText}
        {shortLoremText}
        {shortLoremText}
      </Tabs.Tab>
    </Tabs>
  ),
};

export const Framed: Story = {
  render: args => (
    <>
      <Tabs {...args} color="white" type="framed">
        <Tabs.Tab title="Vaksinasjon">{longLoremText}</Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">{mediumLoremText}</Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">{shortLoremText}</Tabs.Tab>
      </Tabs>
      <br />
      <Tabs {...args} color="neutral" type="framed">
        <Tabs.Tab title="Vaksinasjon">{longLoremText}</Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">{mediumLoremText}</Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">{shortLoremText}</Tabs.Tab>
      </Tabs>
      <br />
      <Tabs {...args} color="blueberry" type="framed">
        <Tabs.Tab title="Vaksinasjon">{longLoremText}</Tabs.Tab>
        <Tabs.Tab title="Helserelaterte spørsmål">{mediumLoremText}</Tabs.Tab>
        <Tabs.Tab title="Prøvesvar">{shortLoremText}</Tabs.Tab>
      </Tabs>
    </>
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
