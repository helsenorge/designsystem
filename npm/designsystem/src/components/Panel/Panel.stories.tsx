import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Panel, { PanelVariant, PanelLayout, PanelStacking, PanelStatus } from './Panel';
import { PanelDocs } from './Paneldocs';
import Badge from '../Badge';
import Icon, { IconSize } from '../Icon';
import PdfFile from '../Icons/PdfFile';
import Input from '../Input';
import Label from '../Label';
import StatusDot from '../StatusDot';
import Title from '../Title/Title';
import Toggle from '../Toggle';
import {
  Dokumentliste,
  DokumentlisteDeling,
  Helsekontakter,
  MedisinskFødselsregister,
  NyMelding,
  PasientReiser,
  TimeAvtale,
} from './PanelExamples';

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
  args: {
    buttonBottomOnClick: () => action('Clicked CTA'),
  },
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
    buttonBottomAriaLabel: {
      control: 'text',
    },
    buttonBottomText: {
      control: 'text',
    },
    highlightText: {
      control: 'text',
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
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: ` 
<Panel {...args}>
  <Panel.PreContainer>
    <PreviewContainer>{'Precontainer'}</PreviewContainer>
  </Panel.PreContainer>
  <Panel.A>
    <PreviewContainer>{'Content A'}</PreviewContainer>
  </Panel.A>
  <Panel.B>
    <PreviewContainer>{'Content B'}</PreviewContainer>
  </Panel.B>
  <Panel.C>
    <PreviewContainer>{'Content C'}</PreviewContainer>
  </Panel.C>
</Panel>`,
      },
    },
  },
  render: args => (
    <Panel {...args}>
      <Panel.PreContainer>
        <PreviewContainer>{'Precontainer'}</PreviewContainer>
      </Panel.PreContainer>
      <Panel.A>
        <PreviewContainer>{'Content A'}</PreviewContainer>
      </Panel.A>
      <Panel.B>
        <PreviewContainer>{'Content B'}</PreviewContainer>
      </Panel.B>
      <Panel.C>
        <PreviewContainer>{'Content C'}</PreviewContainer>
      </Panel.C>
    </Panel>
  ),
};

export const WithTitle: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: ` 
<Panel>
  <Panel.PreContainer>
    <StatusDot text="Godkjent" variant="success" />
  </Panel.PreContainer>
  <Panel.Title title={'Tittel'} icon={<Icon svgIcon={PdfFile} />} badge={<Badge>{'Ny'}</Badge>} />
  <Panel.A>
    <PreviewContainer>{'Content A'}</PreviewContainer>
  </Panel.A>
  <Panel.B>
    <PreviewContainer>{'Content B'}</PreviewContainer>
  </Panel.B>
  <Panel.C>
    <PreviewContainer>{'Content C'}</PreviewContainer>
  </Panel.C>
</Panel>`,
      },
    },
  },
  render: args => (
    <Panel {...args}>
      <Panel.PreContainer>
        <StatusDot text="Godkjent" variant="success" />
      </Panel.PreContainer>
      <Panel.Title title={'Tittel'} icon={<Icon svgIcon={PdfFile} />} badge={<Badge>{'Ny'}</Badge>} />
      <Panel.A>
        <PreviewContainer>{'Content A'}</PreviewContainer>
      </Panel.A>
      <Panel.B>
        <PreviewContainer>{'Content B'}</PreviewContainer>
      </Panel.B>
      <Panel.C>
        <PreviewContainer>{'Content C'}</PreviewContainer>
      </Panel.C>
    </Panel>
  ),
};

export const Variants: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<div>
  <Panel {...args} variant={PanelVariant.fill}>
    <Panel.Title title={'Tittel'} icon={<Icon svgIcon={PdfFile} />} />
    <Panel.A>
      <PreviewContainer>{'Content A'}</PreviewContainer>
    </Panel.A>
    <Panel.B>
      <PreviewContainer>{'Content B'}</PreviewContainer>
    </Panel.B>
    <Panel.C>
      <PreviewContainer>{'Content C'}</PreviewContainer>
    </Panel.C>
  </Panel>
  <br />

  <Panel {...args} variant={PanelVariant.outline}>
    <Panel.Title title={'Tittel'} icon={<Icon svgIcon={PdfFile} />} />
    <Panel.A>
      <PreviewContainer>{'Content A'}</PreviewContainer>
    </Panel.A>
    <Panel.B>
      <PreviewContainer>{'Content B'}</PreviewContainer>
    </Panel.B>
    <Panel.C>
      <PreviewContainer>{'Content C'}</PreviewContainer>
    </Panel.C>
  </Panel>
  <br />

  <Panel {...args} variant={PanelVariant.line}>
    <Panel.Title title={'Tittel'} icon={<Icon svgIcon={PdfFile} />} />
    <Panel.A>
      <PreviewContainer>{'Content A'}</PreviewContainer>
    </Panel.A>
    <Panel.B>
      <PreviewContainer>{'Content B'}</PreviewContainer>
    </Panel.B>
    <Panel.C>
      <PreviewContainer>{'Content C'}</PreviewContainer>
    </Panel.C>
  </Panel>
</div>
        `,
      },
    },
  },
  render: args => (
    <div>
      <Panel {...args} variant={PanelVariant.fill}>
        <Panel.Title title={'Tittel'} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <PreviewContainer>{'Content A'}</PreviewContainer>
        </Panel.A>
        <Panel.B>
          <PreviewContainer>{'Content B'}</PreviewContainer>
        </Panel.B>
        <Panel.C>
          <PreviewContainer>{'Content C'}</PreviewContainer>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args} variant={PanelVariant.outline}>
        <Panel.Title title={'Tittel'} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <PreviewContainer>{'Content A'}</PreviewContainer>
        </Panel.A>
        <Panel.B>
          <PreviewContainer>{'Content B'}</PreviewContainer>
        </Panel.B>
        <Panel.C>
          <PreviewContainer>{'Content C'}</PreviewContainer>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args} variant={PanelVariant.line}>
        <Panel.Title title={'Tittel'} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <PreviewContainer>{'Content A'}</PreviewContainer>
        </Panel.A>
        <Panel.B>
          <PreviewContainer>{'Content B'}</PreviewContainer>
        </Panel.B>
        <Panel.C>
          <PreviewContainer>{'Content C'}</PreviewContainer>
        </Panel.C>
      </Panel>
    </div>
  ),
};

export const Layouts: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<div>
  <Panel {...args} layout={PanelLayout.horizontal}>
    <Panel.PreContainer>
      <PreviewContainer>{'Precontainer'}</PreviewContainer>
    </Panel.PreContainer>
    <Panel.Title title={'Horizontal'} />
    <Panel.A>
      <PreviewContainer>{'Content A'}</PreviewContainer>
    </Panel.A>
    <Panel.B>
      <PreviewContainer>{'Content B'}</PreviewContainer>
    </Panel.B>
    <Panel.C>
      <PreviewContainer>{'Content C'}</PreviewContainer>
    </Panel.C>
  </Panel>
  <br />

  <Panel {...args} layout={PanelLayout.vertical}>
    <Panel.PreContainer>
      <PreviewContainer>{'Precontainer'}</PreviewContainer>
    </Panel.PreContainer>
    <Panel.Title title={'Vertical'} />
    <Panel.A>
      <PreviewContainer>{'Content A'}</PreviewContainer>
    </Panel.A>
    <Panel.B>
      <PreviewContainer>{'Content B'}</PreviewContainer>
    </Panel.B>
    <Panel.C>
      <PreviewContainer>{'Content C'}</PreviewContainer>
    </Panel.C>
  </Panel>
  <br />

  <Panel {...args} layout={PanelLayout.combined}>
    <Panel.PreContainer>
      <PreviewContainer>{'Precontainer'}</PreviewContainer>
    </Panel.PreContainer>
    <Panel.Title title={'Combined'} />
    <Panel.A>
      <PreviewContainer>{'Content A'}</PreviewContainer>
    </Panel.A>
    <Panel.B>
      <PreviewContainer>{'Content B'}</PreviewContainer>
    </Panel.B>
    <Panel.C>
      <PreviewContainer>{'Content C'}</PreviewContainer>
    </Panel.C>
  </Panel>
  <br />

  <Panel {...args} layout={PanelLayout.bAsRightCol}>
    <Panel.PreContainer>
      <PreviewContainer>{'Precontainer'}</PreviewContainer>
    </Panel.PreContainer>
    <Panel.Title title={'B as right column'} />
    <Panel.A>
      <PreviewContainer>{'Content A'}</PreviewContainer>
    </Panel.A>
    <Panel.B>
      <PreviewContainer>{'Content B'}</PreviewContainer>
    </Panel.B>
    <Panel.C>
      <PreviewContainer>{'Content C'}</PreviewContainer>
    </Panel.C>
  </Panel>
</div>
        `,
      },
    },
  },
  render: args => (
    <div>
      <Panel {...args} layout={PanelLayout.horizontal}>
        <Panel.PreContainer>
          <PreviewContainer>{'Precontainer'}</PreviewContainer>
        </Panel.PreContainer>
        <Panel.Title title={'Horizontal'} />
        <Panel.A>
          <PreviewContainer>{'Content A'}</PreviewContainer>
        </Panel.A>
        <Panel.B>
          <PreviewContainer>{'Content B'}</PreviewContainer>
        </Panel.B>
        <Panel.C>
          <PreviewContainer>{'Content C'}</PreviewContainer>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args} layout={PanelLayout.vertical}>
        <Panel.PreContainer>
          <PreviewContainer>{'Precontainer'}</PreviewContainer>
        </Panel.PreContainer>
        <Panel.Title title={'Vertical'} />
        <Panel.A>
          <PreviewContainer>{'Content A'}</PreviewContainer>
        </Panel.A>
        <Panel.B>
          <PreviewContainer>{'Content B'}</PreviewContainer>
        </Panel.B>
        <Panel.C>
          <PreviewContainer>{'Content C'}</PreviewContainer>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args} layout={PanelLayout.combined}>
        <Panel.PreContainer>
          <PreviewContainer>{'Precontainer'}</PreviewContainer>
        </Panel.PreContainer>
        <Panel.Title title={'Combined'} />
        <Panel.A>
          <PreviewContainer>{'Content A'}</PreviewContainer>
        </Panel.A>
        <Panel.B>
          <PreviewContainer>{'Content B'}</PreviewContainer>
        </Panel.B>
        <Panel.C>
          <PreviewContainer>{'Content C'}</PreviewContainer>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args} layout={PanelLayout.bAsRightCol}>
        <Panel.PreContainer>
          <PreviewContainer>{'Precontainer'}</PreviewContainer>
        </Panel.PreContainer>
        <Panel.Title title={'B as right column'} />
        <Panel.A>
          <PreviewContainer>{'Content A'}</PreviewContainer>
        </Panel.A>
        <Panel.B>
          <PreviewContainer>{'Content B'}</PreviewContainer>
        </Panel.B>
        <Panel.C>
          <PreviewContainer>{'Content C'}</PreviewContainer>
        </Panel.C>
      </Panel>
    </div>
  ),
};

export const Status: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<div>
  <Panel {...args} status={PanelStatus.new}>
    <Panel.Title title={'New'} icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} />
    <Panel.A>
      <span>{'Lorem ipsum dolor sit amet.'}</span>
    </Panel.A>
    <Panel.ExpandedContent>
      <span>{'Detaljer.'}</span>
    </Panel.ExpandedContent>
  </Panel>
  <br />

  <Panel {...args} status={PanelStatus.error}>
    <Panel.Title title={'Error'} icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} />
    <Panel.A>
      <span>{'Lorem ipsum dolor sit amet.'}</span>
    </Panel.A>
    <Panel.ExpandedContent>
      <span>{'Detaljer.'}</span>
    </Panel.ExpandedContent>
  </Panel>
  <br />

  <Panel {...args} status={PanelStatus.draft}>
    <Panel.Title title={'Draft'} icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} />
    <Panel.A>
      <span>{'Lorem ipsum dolor sit amet.'}</span>
    </Panel.A>
    <Panel.ExpandedContent>
      <span>{'Detaljer.'}</span>
    </Panel.ExpandedContent>
  </Panel>
  <br />
</div>
        `,
      },
    },
  },
  render: args => (
    <div>
      <Panel {...args} status={PanelStatus.new}>
        <Panel.Title title={'New'} icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} />
        <Panel.A>
          <span>{'Lorem ipsum dolor sit amet.'}</span>
        </Panel.A>
        <Panel.ExpandedContent>
          <span>{'Detaljer.'}</span>
        </Panel.ExpandedContent>
      </Panel>
      <br />

      <Panel {...args} status={PanelStatus.error}>
        <Panel.Title title={'Error'} icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} />
        <Panel.A>
          <span>{'Lorem ipsum dolor sit amet.'}</span>
        </Panel.A>
        <Panel.ExpandedContent>
          <span>{'Detaljer.'}</span>
        </Panel.ExpandedContent>
      </Panel>
      <br />

      <Panel {...args} status={PanelStatus.draft}>
        <Panel.Title title={'Draft'} icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} />
        <Panel.A>
          <span>{'Lorem ipsum dolor sit amet.'}</span>
        </Panel.A>
        <Panel.ExpandedContent>
          <span>{'Detaljer.'}</span>
        </Panel.ExpandedContent>
      </Panel>
      <br />
    </div>
  ),
};

export const WithCTA: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: ` 
<Panel buttonBottomOnClick={() => action('Clicked CTA')} buttonBottomText={'Call to action'}>
  <Panel.Title title={'Panel med CTA'} />
  <Panel.A>
    <span>{'Prop buttonBottomOnClick og buttonBottomText gir en knapp som legges under alle content boxes.'}</span>
  </Panel.A>
  <Panel.B>
    <span>{'Denne knappen kan kun brukes dersom Panel ikke er ekspanderbart. Om man bruker ExpandedContent vises ikke knappen.'}</span>
  </Panel.B>
</Panel>`,
      },
    },
  },
  render: args => (
    <Panel {...args} buttonBottomOnClick={() => action('Clicked CTA')} buttonBottomText={'Call to action'}>
      <Panel.Title title={'Panel med CTA'} />
      <Panel.A>
        <span>{'Prop buttonBottomOnClick og buttonBottomText gir en knapp som legges under alle content boxes.'}</span>
      </Panel.A>
      <Panel.B>
        <span>{'Denne knappen kan kun brukes dersom Panel ikke er ekspanderbart. Om man bruker ExpandedContent vises ikke knappen.'}</span>
      </Panel.B>
    </Panel>
  ),
};

export const TestPanel: Story = {
  args: {},
  render: args => {
    const [titleText, setTitleText] = React.useState('Tittel');
    const [showTitle, setShowTitle] = React.useState(true);
    const [showPre, setShowPre] = React.useState(true);
    const [showA, setShowA] = React.useState(true);
    const [showB, setShowB] = React.useState(true);
    const [showC, setShowC] = React.useState(true);
    const [showIcon, setShowIcon] = React.useState(true);
    const [showExpandableVersion, setShowExpandableVersion] = React.useState(false);
    const [showCTA, setShowCTA] = React.useState(false);

    return (
      <div>
        <div>
          <Input
            value={titleText}
            onChange={e => {
              setTitleText(e.currentTarget.value);
            }}
            label={<Label labelTexts={[{ text: 'Tittel tekst' }]} />}
          />
          <Toggle
            {...args}
            onColor={'onwhite'}
            checked={showTitle}
            onChange={() => setShowTitle(!showTitle)}
            label={[{ text: 'Vis tittel' }]}
          />
          <br />
          <Toggle
            {...args}
            onColor={'onwhite'}
            checked={showPre}
            onChange={() => setShowPre(!showPre)}
            label={[{ text: 'Vis PreContainer' }]}
          />
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
          <Toggle {...args} onColor={'onwhite'} checked={showCTA} onChange={() => setShowCTA(!showCTA)} label={[{ text: 'Vis CTA' }]} />
        </div>
        <br />
        <Panel {...args} buttonBottomOnClick={() => action('Clicked CTA')} buttonBottomText={showCTA ? 'Call to action' : undefined}>
          {showPre && (
            <Panel.PreContainer>
              <PreviewContainer>{'Precontainer'}</PreviewContainer>
            </Panel.PreContainer>
          )}
          {showTitle && (
            <Panel.Title
              icon={showIcon && <Icon svgIcon={PdfFile} size={IconSize.Small} />}
              title={titleText}
              badge={<Badge>{'Ny'}</Badge>}
            />
          )}
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
          {showExpandableVersion && <Panel.ExpandedContent>{'Expanded content'}</Panel.ExpandedContent>}
        </Panel>
      </div>
    );
  },
};

export const WithPanelTitles: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<div>
  <Panel {...args}>
    <Panel.Title icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} title={'Tittel'} badge={<Badge>{'Ny'}</Badge>} />
    <Panel.PreContainer>
      <StatusDot variant="info" text="Status" />
    </Panel.PreContainer>
    <Panel.A>
      <span>
        {
          'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
        }
      </span>
    </Panel.A>
  </Panel>
  <br />

  <Panel {...args}>
    <Panel.PreContainer>
      <StatusDot variant="info" text="Status" />
    </Panel.PreContainer>
    <Panel.Title title={'Uten ikon'} badge={<Badge>{'Ny'}</Badge>} />
    <Panel.A>
      <span>
        {
          'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
        }
      </span>
    </Panel.A>
  </Panel>
  <br />

  <Panel {...args}>
    <Panel.PreContainer>
      <StatusDot variant="info" text="Status" />
    </Panel.PreContainer>
    <Panel.Title title={'Uten badge'} icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} />
    <Panel.A>
      <span>
        {
          'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
        }
      </span>
    </Panel.A>
  </Panel>
  <br />

  <Panel {...args}>
    <Panel.Title
      icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />}
      title={'Uten statusdot men med skikkelig lang titteltekst'}
      badge={<Badge>{'Ny'}</Badge>}
    />
    <Panel.A>
      <span>
        {
          'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
        }
      </span>
    </Panel.A>
  </Panel>
  <br />

  <Panel {...args}>
    <Panel.PreContainer>
      <StatusDot variant="alert" text="Status" />
    </Panel.PreContainer>
    <Panel.Title
      icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />}
      title={'Med markup som h2'}
      badge={<Badge>{'Ny'}</Badge>}
      titleMarkup="h2"
    />
    <Panel.A>
      <span>
        {
          'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
        }
      </span>
    </Panel.A>
  </Panel>
  <br />

  <Panel {...args}>
    <Panel.PreContainer>
      <StatusDot variant="alert" text="Status" />
    </Panel.PreContainer>
    <Panel.Title
      icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />}
      title={'Med alle komponenter og også med skikkelig lang titteltekst'}
      badge={<Badge>{'Ny'}</Badge>}
    />
    <Panel.A>
      <span>
        {
          'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
        }
      </span>
    </Panel.A>
  </Panel>
</div>
        `,
      },
    },
  },
  render: args => (
    <div>
      <Panel {...args}>
        <Panel.Title icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} title={'Tittel'} badge={<Badge>{'Ny'}</Badge>} />
        <Panel.PreContainer>
          <StatusDot variant="info" text="Status" />
        </Panel.PreContainer>
        <Panel.A>
          <span>
            {
              'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
            }
          </span>
        </Panel.A>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.PreContainer>
          <StatusDot variant="info" text="Status" />
        </Panel.PreContainer>
        <Panel.Title title={'Uten ikon'} badge={<Badge>{'Ny'}</Badge>} />
        <Panel.A>
          <span>
            {
              'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
            }
          </span>
        </Panel.A>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.PreContainer>
          <StatusDot variant="info" text="Status" />
        </Panel.PreContainer>
        <Panel.Title title={'Uten badge'} icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />} />
        <Panel.A>
          <span>
            {
              'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
            }
          </span>
        </Panel.A>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.Title
          icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />}
          title={'Uten statusdot men med skikkelig lang titteltekst'}
          badge={<Badge>{'Ny'}</Badge>}
        />
        <Panel.A>
          <span>
            {
              'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
            }
          </span>
        </Panel.A>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.PreContainer>
          <StatusDot variant="alert" text="Status" />
        </Panel.PreContainer>
        <Panel.Title
          icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />}
          title={'Med markup som h2'}
          badge={<Badge>{'Ny'}</Badge>}
          titleMarkup="h2"
        />
        <Panel.A>
          <span>
            {
              'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
            }
          </span>
        </Panel.A>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.PreContainer>
          <StatusDot variant="alert" text="Status" />
        </Panel.PreContainer>
        <Panel.Title
          icon={<Icon svgIcon={PdfFile} size={IconSize.Small} />}
          title={'Med alle komponenter og også med skikkelig lang titteltekst'}
          badge={<Badge>{'Ny'}</Badge>}
        />
        <Panel.A>
          <span>
            {
              'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
            }
          </span>
        </Panel.A>
      </Panel>
    </div>
  ),
};

export const Expandable: Story = {
  args: {
    layout: PanelLayout.vertical,
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<Panel {...args}>
  <Panel.Title title="Denne har en knapp og skjult innhold" />
  <Panel.PreContainer></Panel.PreContainer>
  <Panel.A>
    <span>{'Noe innhold'}</span>
  </Panel.A>
  <Panel.ExpandedContent>
    <Title appearance="title4" htmlMarkup="h4">
      {'Dette er skjult'}
    </Title>
    <p>{'Men når man åpner expanderen vil det vises'}</p>
  </Panel.ExpandedContent>
</Panel>
        `,
      },
    },
  },
  render: args => {
    return (
      <Panel {...args}>
        <Panel.Title title="Denne har en knapp og skjult innhold" />
        <Panel.PreContainer></Panel.PreContainer>
        <Panel.A>
          <span>{'Noe innhold'}</span>
        </Panel.A>
        <Panel.ExpandedContent>
          <Title appearance="title4" htmlMarkup="h4">
            {'Dette er skjult'}
          </Title>
          <p>{'Men når man åpner expanderen vil det vises'}</p>
        </Panel.ExpandedContent>
      </Panel>
    );
  },
};

export const LangExpandedContent: Story = {
  args: {
    layout: PanelLayout.vertical,
  },
  render: args => {
    return (
      <>
        <Panel {...args}>
          <Panel.PreContainer>
            <PreviewContainer>{'Precontainer'}</PreviewContainer>
          </Panel.PreContainer>
          <Panel.A>
            <PreviewContainer>{'Content A'}</PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>{'Content B'}</PreviewContainer>
          </Panel.B>
          <Panel.C>
            <PreviewContainer>{'Content C'}</PreviewContainer>
          </Panel.C>
        </Panel>
        <br />
        <Panel {...args}>
          <Panel.PreContainer>
            <PreviewContainer>{'Precontainer'}</PreviewContainer>
          </Panel.PreContainer>
          <Panel.A>
            <PreviewContainer>{'Content A'}</PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>{'Content B'}</PreviewContainer>
          </Panel.B>
          <Panel.C>
            <PreviewContainer>{'Content C'}</PreviewContainer>
          </Panel.C>
        </Panel>
        <br />
        <Panel {...args}>
          <Panel.Title title="Denne har en knapp og skjult innhold" />
          <Panel.PreContainer></Panel.PreContainer>
          <Panel.A>
            <span>{'Noe innhold'}</span>
          </Panel.A>
          <Panel.ExpandedContent>
            <div>
              <Title appearance="title4">{'Fullmakt til å bruke tjenester på Helsenorge'}</Title>
              <p>
                {
                  'Den som gir fullmakt, kan bruke tjenester på Helsenorge på vegne av personen som gir fullmakt. Det er ikke mulig å gi fullmakt til mer enn man selv har tilgang til.'
                }
              </p>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Opprettet: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig fra: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig til: '}</span>
                <span>{'Ubegrenset'}</span>
              </div>

              <Title appearance="title4">{'Fullmakt til å bruke tjenester på Helsenorge'}</Title>
              <p>
                {
                  'Den som gir fullmakt, kan bruke tjenester på Helsenorge på vegne av personen som gir fullmakt. Det er ikke mulig å gi fullmakt til mer enn man selv har tilgang til.'
                }
              </p>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Opprettet: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig fra: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig til: '}</span>
                <span>{'Ubegrenset'}</span>
              </div>

              <Title appearance="title4">{'Fullmakt til å bruke tjenester på Helsenorge'}</Title>
              <p>
                {
                  'Den som gir fullmakt, kan bruke tjenester på Helsenorge på vegne av personen som gir fullmakt. Det er ikke mulig å gi fullmakt til mer enn man selv har tilgang til.'
                }
              </p>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Opprettet: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig fra: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig til: '}</span>
                <span>{'Ubegrenset'}</span>
              </div>
            </div>
          </Panel.ExpandedContent>
        </Panel>
        <br />

        <Panel {...args}>
          <Panel.PreContainer>
            <PreviewContainer>{'Precontainer'}</PreviewContainer>
          </Panel.PreContainer>
          <Panel.A>
            <PreviewContainer>{'Content A'}</PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>{'Content B'}</PreviewContainer>
          </Panel.B>
          <Panel.C>
            <PreviewContainer>{'Content C'}</PreviewContainer>
          </Panel.C>
        </Panel>
        <br />
        <Panel {...args}>
          <Panel.PreContainer>
            <PreviewContainer>{'Precontainer'}</PreviewContainer>
          </Panel.PreContainer>
          <Panel.A>
            <PreviewContainer>{'Content A'}</PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>{'Content B'}</PreviewContainer>
          </Panel.B>
          <Panel.C>
            <PreviewContainer>{'Content C'}</PreviewContainer>
          </Panel.C>
        </Panel>
      </>
    );
  },
};

export const Examples: Story = {
  args: {},
  render: () => (
    <div>
      <MedisinskFødselsregister />
      <br />
      <TimeAvtale />
      <br />
      <PasientReiser />
      <br />
      <Helsekontakter />
      <br />
      <Dokumentliste />
      <br />
      <DokumentlisteDeling />
      <br />
      <NyMelding />
      <br />
    </div>
  ),
};
