import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Label, { LabelText } from './Label';
import { Sublabel } from './SubLabel';
import { allLabelTags } from '../../../.storybook/knobs';
import { IconSize } from '../../constants';
import { getColor } from '../../theme/currys';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import HelpSign from '../Icons/HelpSign';
import Input from '../Input';
import RadioButton from '../RadioButton/RadioButton';
import Select from '../Select';
import StatusDot from '../StatusDot';
import Textarea from '../Textarea';

type LabelWithAndCustomArgs = React.ComponentProps<typeof Label> & {
  showIcon: boolean;
};

const meta = {
  title: '@helsenorge/designsystem-react/Components/Label',
  component: Label,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Label} />,
      description: {
        component:
          'Som en innbygger vil jeg kunne se flere dataelementer gruppert i en og samme label på en konsistent måte slik at jeg mer effektivt kan scanne og forstå valgene jeg skal kunne gjøre. \n\n <b>For å sette opp aria-label riktig med Label komponentet:</b> \n\n Gi input feltet sin id til id propen til Label. Gi Input feltet sin aria-describedby prop eventuelle sublabel/statusdot id(er). Du kan skjule bestemte label/sublabel tekster for skjermlesere ved hjelp av hideFromScreenReader property per tekst.',
      },
    },
  },
  argTypes: {
    htmlMarkup: {
      control: 'select',
      options: allLabelTags,
    },
  },
} satisfies Meta<LabelWithAndCustomArgs>;

export default meta;

type Story = StoryObj<LabelWithAndCustomArgs>;

export const Default: Story = {
  render: args => <Input {...args} label={<Label {...args} labelTexts={[{ text: 'Label' }]} />} />,
};

export const AllVariants: Story = {
  render: args => {
    const sublabelId1 = 'sublabel-testid1';
    const statusDotId1 = 'statusdot-testid1';
    const sublabelId2 = 'sublabel-testid2';
    const statusDotId2 = 'statusdot-testid2';
    const sublabelId3 = 'sublabel-testid3';
    const statusDotId3 = 'statusdot-testid3';

    const sublabelTexts: LabelText[] = [
      { text: 'This is a normal sublabel', type: 'normal' },
      { text: 'Semibold sublabel - hidden from screen reader', type: 'semibold', hideFromScreenReader: true },
    ];

    return (
      <>
        <Input
          label={
            <Label
              {...args}
              labelTexts={[
                { text: 'Semibold label', type: 'semibold' },
                { text: 'normal label' },
                { text: 'semibold returns', type: 'semibold' },
                { text: 'this is hidden from screen readers', hideFromScreenReader: true },
              ]}
              sublabel={<Sublabel id={sublabelId1} sublabelTexts={sublabelTexts} />}
              statusDot={<StatusDot id={statusDotId1} text={'Statusdot text'} variant={'alert'} />}
            />
          }
          aria-describedby={sublabelId1 + ' ' + statusDotId1}
        />
        <Checkbox
          label={
            <Label
              {...args}
              labelTexts={[
                { text: 'Semibold label', type: 'semibold' },
                { text: 'normal label' },
                { text: 'semibold returns', type: 'semibold' },
              ]}
              sublabel={<Sublabel id={sublabelId2} sublabelTexts={sublabelTexts} />}
              statusDot={<StatusDot id={statusDotId2} text={'Statusdot text'} variant={'alert'} />}
            />
          }
          aria-describedby={sublabelId2 + ' ' + statusDotId2}
        />
        <RadioButton
          label={
            <Label
              {...args}
              labelTexts={[
                { text: 'Semibold label', type: 'semibold' },
                { text: 'normal label' },
                { text: 'semibold returns', type: 'semibold' },
              ]}
              sublabel={<Sublabel id={sublabelId3} sublabelTexts={sublabelTexts} />}
              statusDot={<StatusDot id={statusDotId3} text={'Statusdot text'} variant={'alert'} />}
            />
          }
          aria-describedby={sublabelId3 + ' ' + statusDotId3}
        />
      </>
    );
  },
};

export const OnDark: Story = {
  render: args => {
    const sublabelId = 'sublabel-testid';
    const sublabelTexts: LabelText[] = [
      { text: 'normal sublabel with a pretty long text', type: 'normal' },
      { text: 'Semibold sublabel', type: 'semibold' },
    ];
    const statusDotId = 'statusdot-testid';

    return (
      <div style={{ padding: '3rem', backgroundColor: getColor('blueberry', 500) }}>
        <Input
          label={
            <Label
              {...args}
              labelTexts={[
                { text: 'Semibold label', type: 'semibold' },
                { text: 'normal label', type: 'normal' },
                { text: 'semibold returns', type: 'semibold' },
                { text: 'another normal label', type: 'normal' },
              ]}
              sublabel={<Sublabel id={sublabelId} sublabelTexts={sublabelTexts} />}
              statusDot={<StatusDot id={statusDotId} text={'Statusdot text'} variant={'alert'} />}
            />
          }
          onColor={'ondark'}
          aria-describedby={sublabelId + ' ' + statusDotId}
        />
      </div>
    );
  },
};

export const ChildrenAfterLabel: Story = {
  render: args => (
    <Input
      {...args}
      label={
        <Label
          labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]}
          afterLabelChildren={<Icon size={IconSize.XSmall} svgIcon={HelpSign} />}
        />
      }
    />
  ),
};

export const LabelAsString: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ showIcon, ...rest }) => (
    <>
      <Input {...rest} label={'Test label'} />
      <Textarea {...rest} label={'Test label'} />
      <Select {...rest} label={'Test label'}>
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
      <Checkbox {...rest} label={'Test label'} />
      <RadioButton {...rest} label={'Test label'} />
    </>
  ),
};

export const LabelWithChildren: Story = {
  render: args => (
    <Input
      {...args}
      aria-describedby={'sublabelid'}
      label={
        <Label
          sublabel={
            <Sublabel id={'sublabelid'}>
              <span>{'Sublabel child'}</span>
            </Sublabel>
          }
        >
          {<span>{'Label child'}</span>}
        </Label>
      }
    />
  ),
};

export const PureComponentStory: Story = {
  render: args => <Label {...args} labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />,
};
