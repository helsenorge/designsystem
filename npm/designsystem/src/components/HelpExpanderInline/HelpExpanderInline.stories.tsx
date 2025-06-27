import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';
import { useArgs } from 'storybook/internal/preview-api';

import HelpExpanderInline, { HelpExpanderInlineProps } from './HelpExpanderInline';
import { mediumLoremText } from '../../utils/loremtext';
import Checkbox from '../Checkbox';
import HelpTriggerIcon from '../HelpTriggerIcon';
import HelpTriggerInline from '../HelpTriggerInline/HelpTriggerInline';
import Label from '../Label';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpExpanderInline',
  component: HelpExpanderInline,
  parameters: {
    docs: {
      description: {
        component:
          'HelpExpanderInline tilbyr et felt med kontekstuell informasjon som opptrer mellom andre elementer. I motsetning til HelpBubble og HelpTooltip vises informasjonen direkte i flaten, ikke over som en popup. HelpExpanderInline benyttes for å gi innbygger en utdypet forklaring eller hjelp i slutten av en tekst eller ved siden av et element.',
      },
      page: (): React.JSX.Element => <Docs component={HelpExpanderInline} />,
    },
  },
  args: {
    children: mediumLoremText,
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof HelpExpanderInline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const controllerRef = React.useRef<HTMLButtonElement>(null);
    const [{ expanded = true }, setExpanded] = useArgs<HelpExpanderInlineProps>();

    return (
      <>
        <HelpTriggerIcon
          size={'inherit'}
          aria-expanded={expanded}
          ariaLabel={'Help text'}
          ref={controllerRef}
          onClick={() => setExpanded({ expanded: !expanded })}
        />
        <HelpExpanderInline {...args} expanded={expanded} controllerRef={controllerRef} onExpand={action('Expander toggled')} />
      </>
    );
  },
};

export const Triggers: Story = {
  render: args => {
    const controllerRef = React.useRef<HTMLButtonElement>(null);
    const [expanded, setExpanded] = React.useState(false);
    const controllerRef2 = React.useRef<HTMLButtonElement>(null);
    const [expanded2, setExpanded2] = React.useState(false);

    return (
      <>
        <HelpTriggerIcon
          size={'inherit'}
          aria-expanded={expanded}
          ariaLabel={'Help text'}
          ref={controllerRef}
          onClick={() => setExpanded(!expanded)}
        />
        <HelpExpanderInline {...args} expanded={expanded} controllerRef={controllerRef} onExpand={action('Expander toggled')} />
        <br />
        <p style={{ fontSize: '20px' }}>
          <HelpTriggerInline
            aria-expanded={expanded2}
            ariaLabel={'Help text'}
            ref={controllerRef2}
            onClick={() => setExpanded2(!expanded2)}
          >
            {'Trigger text'}
          </HelpTriggerInline>
          <HelpExpanderInline {...args} expanded={expanded2} controllerRef={controllerRef2} onExpand={action('Expander toggled')} />
        </p>
      </>
    );
  },
};

export const NextToElements: Story = {
  render: args => {
    const controllerRef = React.useRef<HTMLButtonElement>(null);
    const [expanded, setExpanded] = React.useState(false);
    const controllerRef2 = React.useRef<HTMLButtonElement>(null);
    const [expanded2, setExpanded2] = React.useState(false);
    const controllerRef3 = React.useRef<HTMLButtonElement>(null);
    const [expanded3, setExpanded3] = React.useState(false);

    return (
      <>
        <ul>
          <li>{'Test 1'}</li>
          <li>
            {'Test 2 '}
            <HelpTriggerIcon
              size={'inherit'}
              aria-expanded={expanded}
              ariaLabel={'Help text'}
              ref={controllerRef}
              onClick={() => setExpanded(!expanded)}
            />
            <HelpExpanderInline {...args} expanded={expanded} controllerRef={controllerRef} onExpand={action('Expander toggled')} />
          </li>
          <li>{'Test 3'}</li>
        </ul>
        <p>
          {mediumLoremText}
          <HelpTriggerInline
            aria-expanded={expanded2}
            ariaLabel={'Help text'}
            ref={controllerRef2}
            onClick={() => setExpanded2(!expanded2)}
          >
            {'Help text'}
          </HelpTriggerInline>
          <HelpExpanderInline {...args} expanded={expanded2} controllerRef={controllerRef2} onExpand={action('Expander toggled')} />
        </p>
        <p>{mediumLoremText}</p>
        <Checkbox
          label={
            <Label
              labelTexts={[{ text: 'test', type: 'subdued' }]}
              afterLabelChildren={
                <HelpTriggerIcon
                  size={'inherit'}
                  aria-expanded={expanded3}
                  ariaLabel={'Help text'}
                  ref={controllerRef3}
                  onClick={() => setExpanded3(!expanded3)}
                />
              }
            />
          }
        />
        <HelpExpanderInline {...args} expanded={expanded3} controllerRef={controllerRef3} onExpand={action('Expander toggled')} />
      </>
    );
  },
};
