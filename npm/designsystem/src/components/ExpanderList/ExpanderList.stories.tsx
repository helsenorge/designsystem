import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { allPaletteNames } from '../../../.storybook/knobs';
import ExpanderList from './ExpanderList';
import LinkList from '../LinkList';
import Icon from '../Icons';
import Avatar from '../Icons/Avatar';
import AvatarComponent from '../Avatar';
import PaperPlane from '../Icons/PaperPlane';
import AlarmClock from '../Icons/AlarmClock';
import Title from '../Title/Title';

import { longLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

export default {
  title: 'Components/ExpanderList',
  component: ExpanderList,
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
    renderChildrenWhenClosed: {
      control: 'boolean',
      defaultValue: false,
    },
    accordion: {
      control: 'boolean',
      defaultValue: false,
    },
    childPadding: {
      control: 'boolean',
      defaultValue: true,
    },
    color: {
      control: 'select',
      options: allPaletteNames,
      defaultValue: 'blueberry',
    },
    topBorder: {
      control: 'boolean',
      defaultValue: true,
    },
    bottomBorder: {
      control: 'boolean',
      defaultValue: true,
    },
    sticky: {
      control: 'boolean',
      defaultValue: false,
    },
    large: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof ExpanderList>;

export const Default: ComponentStory<typeof ExpanderList> = (args: any) => (
  <GridExample>
    <ExpanderList {...args}>
      <ExpanderList.Expander title="Kognitiv terapi">
        Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger
        og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Hypokondri">
        Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet
        følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og
        fremadskridende somatiske lidelser».
      </ExpanderList.Expander>
      <ExpanderList.Expander title="En hjerneskade er en skade opstået i hjernen, med vedvarende funktionsnedsættelse til følge (Ekstra lang tekst for wrapping)">
        De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller
        hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.
      </ExpanderList.Expander>
    </ExpanderList>
    <p>Teksten under er for å kunne teste sticky oppførsel :-)</p>
    <ul>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
      <li>{longLoremText}</li>
    </ul>
  </GridExample>
);

export const MultipleOpenExpanders: ComponentStory<typeof ExpanderList> = (args: any) => {
  return (
    <GridExample>
      <ExpanderList {...args}>
        <ExpanderList.Expander title="Kognitiv terapi" expanded>
          Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger
          og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.
        </ExpanderList.Expander>
        <ExpanderList.Expander title="Hypokondri" expanded>
          Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet
          følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og
          fremadskridende somatiske lidelser».
        </ExpanderList.Expander>
        <ExpanderList.Expander title="En hjerneskade er en skade opstået i hjernen, med vedvarende funktionsnedsættelse til følge (Ekstra lang tekst for wrapping)">
          De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller
          hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.
        </ExpanderList.Expander>
      </ExpanderList>
    </GridExample>
  );
};

export const WithIcon: ComponentStory<typeof ExpanderList> = (args: any) => (
  <GridExample>
    <ExpanderList {...args}>
      <ExpanderList.Expander icon={<Icon svgIcon={Avatar} />} title="Kognitiv terapi">
        Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger
        og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon svgIcon={PaperPlane} />} title="Hypokondri">
        Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet
        følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og
        fremadskridende somatiske lidelser».
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon svgIcon={AlarmClock} />} title="Hjerneskade">
        De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller
        hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.
      </ExpanderList.Expander>
    </ExpanderList>
  </GridExample>
);

export const WithLinkList: ComponentStory<typeof ExpanderList> = (args: any) => (
  <GridExample>
    <ExpanderList {...args}>
      <ExpanderList.Expander title="Kognitiv terapi">
        <LinkList color="cherry">
          <LinkList.Link href="/kognitivterapi1">Første lenke</LinkList.Link>
          <LinkList.Link href="/kognitivterapi2">Andre lenke</LinkList.Link>
          <LinkList.Link href="/kognitivterapi3">Tredje lenke</LinkList.Link>
        </LinkList>
      </ExpanderList.Expander>
    </ExpanderList>
  </GridExample>
);

export const AsAccordion: ComponentStory<typeof ExpanderList> = (args: any) => (
  <GridExample>
    <p>
      Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i
      gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.
    </p>
    <p>
      Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i
      influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan sykehusinnleggelse
      være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å beskytte mot slike hendelser.
    </p>
    <p>
      Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn
      andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under svangerskapet
      og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.
    </p>
    <ExpanderList {...args} accordion>
      <ExpanderList.Expander title="Influensa">
        <p>
          Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i
          gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.
        </p>
        <p>
          Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i
          influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan
          sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å
          beskytte mot slike hendelser.
        </p>
        <p>
          Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn
          andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under
          svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.
        </p>
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Disse bør ta influensavaksinen">
        <p>
          Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i
          gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.
        </p>
        <p>
          Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i
          influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan
          sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å
          beskytte mot slike hendelser.
        </p>
        <p>
          Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn
          andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under
          svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.
        </p>
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Beskytter mot flere influensavirus, men må tas årlig">
        <p>
          Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i
          gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.
        </p>
        <p>
          Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i
          influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan
          sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å
          beskytte mot slike hendelser.
        </p>
        <p>
          Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn
          andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under
          svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.
        </p>
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Bivirkninger av influensavaksinen">
        <p>
          Nær 1,6 million mennesker i Norge tilhører grupper med økt risiko for komplikasjoner av influensa. Det er anslått at det i
          gjennomsnitt dør 900 personer i Norge årlig som følge av sykdommen. Influensavaksine kan beskytte mange av disse.
        </p>
        <p>
          Influensa kan blant annet føre til lungebetennelse og forverring av kroniske sykdommer. Personer med hjerte-/karlidelser er i
          influensasesongen mer utsatt for hjerteinfarkt, hjerneslag og død. Ved alvorlige komplikasjoner av influensa kan
          sykehusinnleggelse være nødvendig. Noen får varig svekket helse etter alvorlig influensasykdom. Vaksinasjon kan bidra til å
          beskytte mot slike hendelser.
        </p>
        <p>
          Influensa i svangerskapet gir noe økt risiko for dødfødsel. Gravide er også mer utsatt for følgesykdommer som lungebetennelse enn
          andre friske kvinner. Influensa hos spebarn kan være alvorlig. Vaksinasjon av mor under graviditeten beskytter mor under
          svangerskapet og gir også barnet beskyttelse mot influensa den første tiden etter fødselen.
        </p>
      </ExpanderList.Expander>
    </ExpanderList>
  </GridExample>
);

export const WithCallback: ComponentStory<typeof ExpanderList> = (args: any) => (
  <GridExample>
    <ExpanderList {...args}>
      <ExpanderList.Expander title="Kognitiv terapi" onExpand={isExpanded => console.log(isExpanded)}>
        <p>Sjekk nettleserkonsollen</p>
      </ExpanderList.Expander>
    </ExpanderList>
  </GridExample>
);

export const InteractiveChildren: ComponentStory<typeof ExpanderList> = (args: any) => {
  const [text, setText] = React.useState('knapp');
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <GridExample>
      <ExpanderList>
        <ExpanderList.Expander title={'Expander 1'}>
          <button onClick={() => setText('oppdatert knapp')}>{text}</button>
        </ExpanderList.Expander>
        <ExpanderList.Expander title={'Expander 2'} expanded={isExpanded}>
          <button onClick={() => setText('oppdatert knapp')}>{text}</button>
        </ExpanderList.Expander>
      </ExpanderList>

      <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Lukk' : 'Åpne'} Expander 2</button>
    </GridExample>
  );
};

export const JsxTitle: ComponentStory<typeof ExpanderList> = (args: any) => (
  <GridExample>
    <ExpanderList>
      <ExpanderList.Expander
        title={
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <AvatarComponent>{'Tittel'}</AvatarComponent>
            <Title appearance="title3">Fastlege</Title>
            <Icon svgIcon={Avatar} />
          </span>
        }
      >
        {'Hei'}
      </ExpanderList.Expander>
      <ExpanderList.Expander title={<Title appearance="title3">Fastlege</Title>}>{'Hei'}</ExpanderList.Expander>
    </ExpanderList>
  </GridExample>
);
