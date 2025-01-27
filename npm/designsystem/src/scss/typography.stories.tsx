import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import LabelComponent from '../components/Label';
import Title from '../components/Title';

import designsystemtypography from './typography.module.scss';

const meta = {
  title: '@helsenorge/designsystem-react/scss/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Typografi-klasser tilgjengeliggjort til bruk utenfor React-komponentene.',
      },
    },
  },
  args: {
    tekst: 'Tekst',
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleFeature: Story = {
  render: args => <div className={designsystemtypography['title-feature']}>{args.tekst}</div>,
};

export const Title1: Story = {
  render: args => <div className={designsystemtypography.title1}>{args.tekst}</div>,
};

export const Title2: Story = {
  render: args => <div className={designsystemtypography.title2}>{args.tekst}</div>,
};

export const Title3: Story = {
  render: args => <div className={designsystemtypography.title3}>{args.tekst}</div>,
};

export const Title4: Story = {
  render: args => <div className={designsystemtypography.title4}>{args.tekst}</div>,
};

export const Title5: Story = {
  render: args => <div className={designsystemtypography.title5}>{args.tekst}</div>,
};

export const Title6: Story = {
  render: args => <div className={designsystemtypography.title6}>{args.tekst}</div>,
};

export const Preamble: Story = {
  render: args => <div className={designsystemtypography.preamble}>{args.tekst}</div>,
};

export const Legend: Story = {
  render: args => <div className={designsystemtypography.legend}>{args.tekst}</div>,
};

export const Label: Story = {
  render: args => <div className={designsystemtypography.label}>{args.tekst}</div>,
};

export const CompactData: Story = {
  render: args => <div className={designsystemtypography['compact-data']}>{args.tekst}</div>,
};

export const TableCell: Story = {
  render: args => <div className={designsystemtypography['table-cell']}>{args.tekst}</div>,
};

export const Strong: Story = {
  render: args => <div className={designsystemtypography.strong}>{args.tekst}</div>,
};

export const ImageCaption: Story = {
  render: args => <div className={designsystemtypography['image-caption']}>{args.tekst}</div>,
};

export const ImageCredit: Story = {
  render: args => <div className={designsystemtypography['image-credit']}>{args.tekst}</div>,
};

export const StatusTimestamp: Story = {
  render: args => <div className={designsystemtypography['status-timestamp']}>{args.tekst}</div>,
};

export const InputText: Story = {
  render: args => <div className={designsystemtypography['input-text']}>{args.tekst}</div>,
};

export const InputTextLarge: Story = {
  render: args => <div className={designsystemtypography['input-text-large']}>{args.tekst}</div>,
};

export const AnchorlinkWrapper: Story = {
  render: args => (
    <div className={designsystemtypography['anchorlink-wrapper']}>
      <a href="www.helsenorge.no">{args.tekst}</a>
      <a href="www.helsenorge.no" target="_blank">
        {args.tekst}
      </a>
    </div>
  ),
};

export const ClassExamplesWithComponents: Story = {
  render: () => {
    const padding = '10px';
    return (
      <>
        <table style={{}}>
          <tr>
            <th style={{ padding }}>Class Example</th>
            <th style={{ padding }}>Component Example</th>
          </tr>
          <tr>
            <td style={{ padding }}>
              <div className={designsystemtypography.title2}>{'Title2'}</div>
            </td>
            <td style={{ padding }}>
              <Title appearance="title2">{'Title2'}</Title>
            </td>
          </tr>
          <tr>
            <td style={{ padding }}>
              <div className={designsystemtypography.title3}>{'Title3'}</div>
            </td>
            <td style={{ padding }}>
              <Title appearance="title3">{'Title3'}</Title>
            </td>
          </tr>
          <tr>
            <td style={{ padding }}>
              <div className={designsystemtypography.title4}>{'Title4'}</div>
            </td>
            <td style={{ padding }}>
              <Title appearance="title4">{'Title4'}</Title>
            </td>
          </tr>
          <tr>
            <td style={{ padding }}>
              <div className={designsystemtypography.title5}>{'Title5'}</div>
            </td>
            <td style={{ padding }}>
              <Title appearance="title5">{'Title5'}</Title>
            </td>
          </tr>
          <tr>
            <td style={{ padding }}>
              <div className={designsystemtypography['title-feature']}>{'Title Feature'}</div>
            </td>
            <td style={{ padding }}>
              <Title appearance="titleFeature">{'Title Feature'}</Title>
            </td>
          </tr>
          <tr>
            <td style={{ padding }}>
              <div className={designsystemtypography.label}>{'Label'}</div>
            </td>
            <td style={{ padding }}>
              <LabelComponent labelTexts={[{ text: 'Label' }]} />
            </td>
          </tr>
        </table>
      </>
    );
  },
};
