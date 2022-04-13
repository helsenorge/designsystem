import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import ExpanderList from './ExpanderList';
import LinkList from '../LinkList';
import Icon from '../Icons';
import Avatar from '../Icons/Avatar';
import PaperPlane from '../Icons/PaperPlane';
import AlarmClock from '../Icons/AlarmClock';
import { allPaletteNames } from '../../../.storybook/knobs';

const stories = storiesOf('ExpanderList', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <ExpanderList
      isOpen={boolean('Is open', false)}
      accordion={boolean('Accordion', false)}
      childPadding={boolean('Child padding', true)}
      color={select('Color', allPaletteNames, 'blueberry')}
      topBorder={boolean('Top border', true)}
      bottomBorder={boolean('Bottom border', true)}
      large={boolean('Large', false)}
    >
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
  </div>
));

stories.add('With icon', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <ExpanderList isOpen={boolean('Is open', false)} color="cherry">
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
  </div>
));

stories.add('With LinkList', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <ExpanderList isOpen={boolean('Is open', false)} color="cherry">
      <ExpanderList.Expander title="Kognitiv terapi">
        <LinkList color="cherry">
          <LinkList.Link href="/kognitivterapi1">Første lenke</LinkList.Link>
          <LinkList.Link href="/kognitivterapi2">Andre lenke</LinkList.Link>
          <LinkList.Link href="/kognitivterapi3">Tredje lenke</LinkList.Link>
        </LinkList>
      </ExpanderList.Expander>
    </ExpanderList>
  </div>
));
stories.add('As accordion', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
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
    <ExpanderList accordion={boolean('Accordion', true)}>
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
  </div>
));

stories.add('With callback', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <ExpanderList
      isOpen={boolean('Is open', false)}
      accordion={boolean('Accordion', false)}
      childPadding={boolean('Child padding', true)}
      color={select('Color', allPaletteNames, 'blueberry')}
      topBorder={boolean('Top border', true)}
      bottomBorder={boolean('Bottom border', true)}
      large={boolean('Large', false)}
    >
      <ExpanderList.Expander title="Kognitiv terapi" onExpand={isExpanded => console.log(isExpanded)}>
        <p>Sjekk nettleserkonsollen</p>
      </ExpanderList.Expander>
    </ExpanderList>
  </div>
));
