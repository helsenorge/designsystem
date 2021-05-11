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
    >
      <ExpanderList.Expander title="Cognitive therapy">
        Some major content/text about <a href="#">certain illness here.</a>. Note that the anchors are not styled by default. The content is
        free from styling.
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Health anxiety">Some major content/text about certain illness here.</ExpanderList.Expander>
      <ExpanderList.Expander title="Brain damage (This is a super long text just so you can observe how it will wrap on a multiline context)">
        Some major content/text about certain illness here.
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
      <ExpanderList.Expander icon={<Icon svgIcon={Avatar} />} title="Cognitive therapy">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon svgIcon={PaperPlane} />} title="Health anxiety">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon svgIcon={AlarmClock} />} title="Brain damage">
        Some major content/text about certain illness here.
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
      <ExpanderList.Expander title="Cognitive therapy">
        <LinkList color="cherry">
          <LinkList.Link href="/firstaid">First aid</LinkList.Link>
          <LinkList.Link href="/secondaid">Second aid</LinkList.Link>
          <LinkList.Link href="/thirdaid">Third aid</LinkList.Link>
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
