import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Panel from '../Panel';
import { PanelVariant, PanelLayout, PanelStacking, PanelStatus } from './PanelBase';
import { PanelDocs } from './Paneldocs';
import Toggle from '../Toggle';
import ExpandablePanel from './ExpandablePanel';
import PanelTitle from './PanelTitle';
import Badge from '../Badge';
import Icon, { IconSize } from '../Icon';
import PdfFile from '../Icons/PdfFile';
import StatusDot from '../StatusDot';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Panel',
  component: Panel,
  tags: ['new'],
  parameters: {
    docs: {
      description: {
        component: 'Panel benyttes for å vise formaterte data på et avgrenset område, og gjør det scanbart og tilgjengelig for innbygger.',
      },
      page: (): React.JSX.Element => <PanelDocs />,
    },
  },
  args: {},
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(PanelVariant),
    },
    color: {
      control: 'select',
      options: ['neutral', 'white'],
    },
    layout: {
      control: 'select',
      options: Object.values(PanelLayout),
    },
    stacking: {
      control: 'select',
      options: Object.values(PanelStacking),
    },
    status: {
      control: 'select',
      options: Object.values(PanelStatus),
    },
  },
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof meta>;

const PreviewContainer = ({ children }): JSX.Element => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#BD10E040', border: '1px #BD10E0 dotted', color: '#BD10E0' }}>
      {children}
    </div>
  );
};

export const Default: Story = {
  args: {},
  render: args => {
    const [showA, setShowA] = React.useState(true);
    const [showB, setShowB] = React.useState(true);
    const [showC, setShowC] = React.useState(true);
    const [showIcon, setShowIcon] = React.useState(true);
    const [showExpandableVersion, setShowExpandableVersion] = React.useState(false);

    return (
      <div>
        <div>
          <Toggle {...args} onColor={'onwhite'} checked={showA} onChange={() => setShowA(!showA)} label={[{ text: 'Vis content A' }]} />
          <Toggle {...args} onColor={'onwhite'} checked={showB} onChange={() => setShowB(!showB)} label={[{ text: 'Vis content B' }]} />
          <Toggle {...args} onColor={'onwhite'} checked={showC} onChange={() => setShowC(!showC)} label={[{ text: 'Vis content C' }]} />
          <Toggle {...args} onColor={'onwhite'} checked={showIcon} onChange={() => setShowIcon(!showIcon)} label={[{ text: 'Vis ikon' }]} />
          <Toggle
            {...args}
            onColor={'onwhite'}
            checked={showExpandableVersion}
            onChange={() => setShowExpandableVersion(!showExpandableVersion)}
            label={[{ text: 'Vis med expander' }]}
          />
        </div>
        {showExpandableVersion ? (
          <ExpandablePanel {...args}>
            <ExpandablePanel.PreContainer>
              <PanelTitle
                icon={showIcon && <Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
                title={'Tittel'}
                badge={<Badge>{'Ny'}</Badge>}
                statusDot={<StatusDot variant="info" text="Status" />}
              />
            </ExpandablePanel.PreContainer>
            {showA && (
              <ExpandablePanel.A>
                <PreviewContainer>{'Content A'}</PreviewContainer>
              </ExpandablePanel.A>
            )}
            {showB && (
              <ExpandablePanel.B>
                <PreviewContainer>{'Content B'}</PreviewContainer>
              </ExpandablePanel.B>
            )}
            {showC && (
              <ExpandablePanel.C>
                <PreviewContainer>{'Content C'}</PreviewContainer>
              </ExpandablePanel.C>
            )}
            <ExpandablePanel.ExpandedContent>{'Expanded content'}</ExpandablePanel.ExpandedContent>
          </ExpandablePanel>
        ) : (
          <Panel {...args}>
            <Panel.PreContainer>
              <PanelTitle
                icon={showIcon && <Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
                title={'Tittel'}
                badge={<Badge>{'Ny'}</Badge>}
                statusDot={<StatusDot variant="info" text="Status" />}
              />
            </Panel.PreContainer>
            {showA && (
              <Panel.A>
                <PreviewContainer>{'Content A'}</PreviewContainer>
              </Panel.A>
            )}
            {showB && (
              <Panel.B>
                <PreviewContainer>{'Content B'}</PreviewContainer>
              </Panel.B>
            )}
            {showC && (
              <Panel.C>
                <PreviewContainer>{'Content C'}</PreviewContainer>
              </Panel.C>
            )}
          </Panel>
        )}
      </div>
    );
  },
};
