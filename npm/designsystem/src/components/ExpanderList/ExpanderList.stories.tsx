import React, { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import ExpanderList from './ExpanderList';
import AvatarComponent from '../Avatar';
import Badge from '../Badge';
import ElementHeader from '../ElementHeader';
import Icon from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import Avatar from '../Icons/Avatar';
import PaperPlane from '../Icons/PaperPlane';
import LazyIcon from '../LazyIcon';
import LinkList from '../LinkList';
import StatusDot, { StatusDotVariant } from '../StatusDot';
import Title from '../Title/Title';
import Toggle from '../Toggle';

const meta = {
  title: '@helsenorge/designsystem-react/Components/ExpanderList',
  component: ExpanderList,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={ExpanderList}
          supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/expander-list/bruk-HenkgcrB"
        />
      ),
      description: {
        component:
          'ExpanderList er en liste av elementer som skjuler detaljinformasjon når den ikke trengs, og gjør den lett tilgjengelig i kontekst når den trengs.',
      },
    },
  },
  args: {
    children: 'Dummyinnhold for bruk i ekspandere. Her kan du legge inn det du ønsker.',
    renderChildrenWhenClosed: false,
    accordion: false,
    childPadding: true,
    color: 'white',
    large: false,
  },
  argTypes: {
    renderChildrenWhenClosed: {
      control: 'boolean',
    },
    accordion: {
      control: 'boolean',
    },
    childPadding: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['white', 'blueberry', 'cherry', 'neutral'],
    },
    large: {
      control: 'boolean',
    },
    highlightText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ExpanderList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <>
      <ExpanderList {...args}>
        <ExpanderList.Expander title="Her skrives en kort overskrift. Helst ikke gå over en linje.">{args.children}</ExpanderList.Expander>
        <ExpanderList.Expander title="Her skrives en kort overskrift. Helst ikke gå over en linje.">{args.children}</ExpanderList.Expander>
      </ExpanderList>
    </>
  ),
};

export const WithLongText: Story = {
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander title="Kognitiv terapi">
        {
          'Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.'
        }
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Hypokondri">
        {
          'Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og fremadskridende somatiske lidelser».'
        }
      </ExpanderList.Expander>
      <ExpanderList.Expander title="En hjerneskade er en skade opstået i hjernen, med vedvarende funktionsnedsættelse til følge (Ekstra lang tekst for wrapping)">
        {
          'De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.'
        }
      </ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const VariantLine: Story = {
  args: {
    variant: 'line',
  },
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander title={'Variant: line'}>{'test'}</ExpanderList.Expander>
      <ExpanderList.Expander title={'Gives the ExpanderList lines'}>{'test'}</ExpanderList.Expander>
    </ExpanderList>
  ),
};
export const VariantOutline: Story = {
  args: {
    variant: 'outline',
    color: 'blueberry',
  },
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander title={'Variant: Outline'}>{'test'}</ExpanderList.Expander>
      <ExpanderList.Expander title={'Gives the ExpanderList outline'}>{'test'}</ExpanderList.Expander>
    </ExpanderList>
  ),
};
export const VariantFill: Story = {
  args: {
    variant: 'fill',
    color: 'blueberry',
  },
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander title={'Variant: fill'}>{'test'}</ExpanderList.Expander>
      <ExpanderList.Expander title={'Gives the listelements fill'}>{'Gives the ExpanderList fill'}</ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const VariantFillNegative: Story = {
  args: {
    variant: 'fill-negative',
    color: 'blueberry',
  },
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander title={'Variant: fill negative'}>{'test'}</ExpanderList.Expander>
      <ExpanderList.Expander title={'Gives the listelements negative fill'}>{'Gives the ExpanderList negative fill'}</ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const WithElementHeaderComp: Story = {
  render: args => {
    const elementHeader = (
      <ElementHeader>
        <ElementHeader.Text firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
        <ElementHeader.Text subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
        <ElementHeader.Text subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
        <StatusDot text="Statusdot" variant={StatusDotVariant.alert} />
      </ElementHeader>
    );

    return (
      <ExpanderList {...args}>
        <ExpanderList.Expander title={elementHeader} icon={<Icon svgIcon={AlarmClock} />}>
          {'test'}
        </ExpanderList.Expander>
      </ExpanderList>
    );
  },
};
export const WithAvatarAndBadge: Story = {
  render: args => {
    const elementHeader = (
      <ElementHeader>
        <ElementHeader.Text firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
        <AvatarComponent>{'Line Danser'}</AvatarComponent>
        <Badge color="blueberry">{'10000'}</Badge>
      </ElementHeader>
    );

    const elementHeader2 = (
      <ElementHeader titleHtmlMarkup="span">
        {'ExpanderListText'}
        <Badge color="blueberry">{'Ny'}</Badge>
        <AvatarComponent>{'Line Danser'}</AvatarComponent>
      </ElementHeader>
    );

    return (
      <ExpanderList {...args}>
        <ExpanderList.Expander title={elementHeader}>{'test'}</ExpanderList.Expander>
        <ExpanderList.Expander title={elementHeader2}>{'test'}</ExpanderList.Expander>
      </ExpanderList>
    );
  },
};

export const MultipleOpenExpanders: Story = {
  render: args => {
    return (
      <ExpanderList {...args}>
        <ExpanderList.Expander title="Kognitiv terapi" expanded>
          {
            'Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.'
          }
        </ExpanderList.Expander>
        <ExpanderList.Expander title="Hypokondri" expanded>
          {
            'Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og fremadskridende somatiske lidelser».'
          }
        </ExpanderList.Expander>
        <ExpanderList.Expander title="En hjerneskade er en skade opstået i hjernen, med vedvarende funktionsnedsættelse til følge (Ekstra lang tekst for wrapping)">
          {
            'De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.'
          }
        </ExpanderList.Expander>
      </ExpanderList>
    );
  },
};

export const WithIcon: Story = {
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander icon={<Icon svgIcon={Avatar} />} title="Kognitiv terapi">
        {
          'Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.'
        }
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon svgIcon={PaperPlane} />} title="Hypokondri">
        {
          'Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og fremadskridende somatiske lidelser».'
        }
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon svgIcon={AlarmClock} />} title="Hjerneskade">
        {
          'De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.'
        }
      </ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const WithLazyIcon: Story = {
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander icon={<LazyIcon iconName="Avatar" />} title="Kognitiv terapi">
        {
          'Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.'
        }
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<LazyIcon iconName="PaperPlane" />} title="Hypokondri">
        {
          'Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og fremadskridende somatiske lidelser».'
        }
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<LazyIcon iconName="AlarmClock" />} title="Hjerneskade">
        {
          'De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.'
        }
      </ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const WithLinkList: Story = {
  render: args => (
    <ExpanderList {...args} highlightText="kog">
      <ExpanderList.Expander title="Kognitiv terapi" highlightText="-">
        <LinkList color="cherry">
          <LinkList.Link href="/kognitivterapi1">{'Første lenke'}</LinkList.Link>
          <LinkList.Link href="/kognitivterapi2">{'Andre lenke'}</LinkList.Link>
          <LinkList.Link href="/kognitivterapi3">{'Tredje lenke'}</LinkList.Link>
        </LinkList>
      </ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const AsAccordion: Story = {
  args: {
    accordion: true,
  },
  render: args => (
    <>
      <p>
        {
          'Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.'
        }
      </p>
      <p>
        {
          'Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å beskytte mot slike hendelser.'
        }
      </p>
      <p>
        {
          'Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.'
        }
      </p>
      <ExpanderList {...args}>
        <ExpanderList.Expander title="Influensa">
          <p>
            {
              'Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.'
            }
          </p>
          <p>
            {
              'Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å beskytte mot slike hendelser.'
            }
          </p>
          <p>
            {
              'Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.'
            }
          </p>
        </ExpanderList.Expander>
        <ExpanderList.Expander title="Disse bør ta influensavaksinen">
          <p>
            {
              'Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.'
            }
          </p>
          <p>
            {
              'Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å beskytte mot slike hendelser.'
            }
          </p>
          <p>
            {
              'Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.'
            }
          </p>
        </ExpanderList.Expander>
        <ExpanderList.Expander title="Beskytter mot flere influensavirus, men må tas årlig">
          <p>
            {
              'Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.'
            }
          </p>
          <p>
            {
              'Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å beskytte mot slike hendelser.'
            }
          </p>
          <p>
            {
              'Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.'
            }
          </p>
        </ExpanderList.Expander>
        <ExpanderList.Expander title="Bivirkninger av influensavaksinen">
          <p>
            {
              'Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.'
            }
          </p>
          <p>
            {
              'Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å beskytte mot slike hendelser.'
            }
          </p>
          <p>
            {
              'Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.'
            }
          </p>
        </ExpanderList.Expander>
      </ExpanderList>
    </>
  ),
};

export const WithCallback: Story = {
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander title="Kognitiv terapi" onExpand={isExpanded => console.log(isExpanded)}>
        <p>{'Sjekk nettleserkonsollen'}</p>
      </ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const InteractiveChildren: Story = {
  render: args => {
    const [text, setText] = React.useState('knapp');
    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
      <>
        <ExpanderList {...args}>
          <ExpanderList.Expander title={'Expander 1'}>
            <button onClick={() => setText('oppdatert knapp')}>{text}</button>
          </ExpanderList.Expander>
          <ExpanderList.Expander title={'Expander 2'} expanded={isExpanded}>
            <button onClick={() => setText('oppdatert knapp')}>{text}</button>
          </ExpanderList.Expander>
        </ExpanderList>

        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Lukk' : 'Åpne'} {'Expander 2'}
        </button>
      </>
    );
  },
};

export const JsxTitle: Story = {
  render: args => {
    const TestTitle: React.FC = () => <span>{'Dette er en JSX-tittel'}</span>;

    return (
      <ExpanderList {...args}>
        <ExpanderList.Expander title={<TestTitle />}>{'Hei'}</ExpanderList.Expander>
        <ExpanderList.Expander
          title={
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <AvatarComponent>{'Tittel'}</AvatarComponent>
              <Title htmlMarkup="span" appearance="title3">
                {'Fastlege'}
              </Title>
            </span>
          }
        >
          {'Hei'}
        </ExpanderList.Expander>
        <ExpanderList.Expander title={<Title appearance="title3">{'Fastlege'}</Title>}>{'Hei'}</ExpanderList.Expander>
        <ExpanderList.Expander
          title={
            <div>
              <span>{'Tittel'}</span>
              <StatusDot variant={'noaccess'} text={'Status tekst'} />
            </div>
          }
        >
          {'Hei'}
        </ExpanderList.Expander>
      </ExpanderList>
    );
  },
};

export const WithTitleHtmlMarkup: Story = {
  render: args => (
    <>
      <ExpanderList {...args}>
        <ExpanderList.Expander titleHtmlMarkup="span" title="Jeg er en span">
          {args.children}
        </ExpanderList.Expander>
        <ExpanderList.Expander titleHtmlMarkup="h1" title="Jeg er en h1">
          {args.children}
        </ExpanderList.Expander>
        <ExpanderList.Expander titleHtmlMarkup="h2" title="Jeg er en h2">
          {args.children}
        </ExpanderList.Expander>
        <ExpanderList.Expander titleHtmlMarkup="h3" title="Jeg er en h3">
          {args.children}
        </ExpanderList.Expander>
        <ExpanderList.Expander titleHtmlMarkup="h4" title="Jeg er en h4">
          {args.children}
        </ExpanderList.Expander>
        <ExpanderList.Expander titleHtmlMarkup="h5" title="Jeg er en h5">
          {args.children}
        </ExpanderList.Expander>
        <ExpanderList.Expander titleHtmlMarkup="h6" title="Jeg er en h6">
          {args.children}
        </ExpanderList.Expander>
      </ExpanderList>
    </>
  ),
};

export const WithHighlight: Story = {
  args: {
    highlightText: 'her',
  },
  render: args => (
    <>
      <ExpanderList {...args}>
        <ExpanderList.Expander title="Her skrives en kort overskrift. Helst ikke gå over en linje.">{args.children}</ExpanderList.Expander>
        <ExpanderList.Expander title="Her skrives en kort overskrift. Helst ikke gå over en linje.">{args.children}</ExpanderList.Expander>
      </ExpanderList>
    </>
  ),
};

export const WithHighlightOnListHeaderOnly: Story = {
  render: args => {
    const listHeader = (
      <ElementHeader>
        <ElementHeader.Text
          highlightText={args.highlightText}
          firstText="Emphasized label segment"
          firstTextEmphasised
          secondText=" and normal segment"
        />
        <ElementHeader.Text
          highlightText={args.highlightText}
          subText
          firstText="Emphasized label segment"
          firstTextEmphasised
          secondText=" and normal segment"
        />
        <ElementHeader.Text
          highlightText={args.highlightText}
          subText
          firstText="Emphasized label segment"
          firstTextEmphasised
          secondText=" and normal segment"
        />
      </ElementHeader>
    );

    return (
      <ExpanderList {...args} highlightText={undefined}>
        <ExpanderList.Expander title={listHeader} icon={<Icon svgIcon={AlarmClock} />}>
          <LinkList color="cherry">
            <LinkList.Link href="/kognitivterapi1">{'Første lenke'}</LinkList.Link>
            <LinkList.Link href="/kognitivterapi2">{'Andre lenke'}</LinkList.Link>
            <LinkList.Link href="/kognitivterapi3">{'Tredje lenke'}</LinkList.Link>
          </LinkList>
        </ExpanderList.Expander>
      </ExpanderList>
    );
  },
};

export const WithStatus: Story = {
  render: args => {
    const [newStatus, setNewStatus] = useState(false);

    return (
      <>
        <ExpanderList {...args}>
          <ExpanderList.Expander status="new" icon={<Icon svgIcon={Avatar} />} title="Kognitiv terapi">
            {
              'Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.'
            }
          </ExpanderList.Expander>
          <ExpanderList.Expander icon={<Icon svgIcon={PaperPlane} />} title="Hypokondri">
            {
              'Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og fremadskridende somatiske lidelser».'
            }
          </ExpanderList.Expander>
          <ExpanderList.Expander status={newStatus ? 'new' : 'none'} icon={<Icon svgIcon={AlarmClock} />} title="Hjerneskade">
            {
              'De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.'
            }
          </ExpanderList.Expander>
        </ExpanderList>
        <br />
        <Toggle onChange={() => setNewStatus(!newStatus)} checked={newStatus} label={[{ text: 'Status' }]} />
      </>
    );
  },
};
