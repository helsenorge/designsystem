import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Modal, { ModalSize } from './Modal';
import ButtonWithModal from '../ButtonWithModal/ButtonWithModal';
import { ModalVariants } from './Modal';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Slider from '../Slider';
import Icon from '../Icons';
import { IconSize } from '../../constants';
import Envelope from '../Icons/Envelope';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

const onClose = (): void => alert('Lukk');
const onSuccess = (): void => alert('Success');

stories.add('Default', () => (
  <Modal
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
      ModalVariants.normal
    )}
    size={select('size', [ModalSize.large, ModalSize.medium], ModalSize.large)}
    title={text('title', 'Vil du spise en appelsin?')}
    description={text(
      'description',
      ' Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.'
    )}
    primaryButtonText={text('primaryButtonText', 'OK')}
    secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
    onClose={onClose}
    onSuccess={onSuccess}
  />
));

stories.add('Modal with icon', () => (
  <Modal
    icon={<Icon svgIcon={Envelope} />}
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
      ModalVariants.normal
    )}
    size={select('size', [ModalSize.large, ModalSize.medium], ModalSize.large)}
    title={text('title', 'Vil du spise en appelsin?')}
    description={text(
      'description',
      ' Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.'
    )}
    primaryButtonText={text('primaryButtonText', 'OK')}
    secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
    onClose={onClose}
    onSuccess={onSuccess}
  />
));

stories.add('Modal with children after title', () => (
  <Modal
    icon={<Icon svgIcon={Envelope} />}
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
      ModalVariants.normal
    )}
    size={select('size', [ModalSize.large, ModalSize.medium], ModalSize.large)}
    title={text('title', 'Vil du spise en appelsin?')}
    description={text(
      'description',
      ' Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.'
    )}
    primaryButtonText={text('primaryButtonText', 'OK')}
    secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
    afterTitleChildren={<Icon svgIcon={Envelope} size={IconSize.Small} />}
    onClose={onClose}
    onSuccess={onSuccess}
  />
));

stories.add('Scroll', () => (
  <Modal
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
      ModalVariants.normal
    )}
    size={select('size', [ModalSize.large, ModalSize.medium], ModalSize.large)}
    title={text('title', 'Derfor bør du spise frukt')}
    description={text(
      'description',
      `Er frukt egentlig så sunt, og hvor mye frukt kan man spise? Hvilken frukt er den sunneste? 
      
      Frukt er en viktig kilde til antioksidanter, mineraler, vitaminer og fiber, og er en særlig god kilde til vitamin C. Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.  

      Nyere forskning viser også at fiber er god mat for de gode tarmbakteriene som hjelper med å holde oss friske.  
      
      De siste årene har det vært stilt spørsmål om frukt egentlig er så sunt på grunn av fruktens karbohydratinnhold. Noen lurer også på om man kan legge på seg av frukt. Det korte svaret er at frukt er sunt, karbohydratinnholdet er ikke noe friske mennesker behøver å bekymre seg over og nei - det er nok ikke frukten som er syndebukken. Norske kostholdsundersøkelser viser at vi fortsatt spiser mindre frukt og grønt enn anbefalt.
      
      Er frukt egentlig så sunt, og hvor mye frukt kan man spise? Hvilken frukt er den sunneste? 
      
      Frukt er en viktig kilde til antioksidanter, mineraler, vitaminer og fiber, og er en særlig god kilde til vitamin C. Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.  

      Nyere forskning viser også at fiber er god mat for de gode tarmbakteriene som hjelper med å holde oss friske.  
      
      De siste årene har det vært stilt spørsmål om frukt egentlig er så sunt på grunn av fruktens karbohydratinnhold. Noen lurer også på om man kan legge på seg av frukt. Det korte svaret er at frukt er sunt, karbohydratinnholdet er ikke noe friske mennesker behøver å bekymre seg over og nei - det er nok ikke frukten som er syndebukken. Norske kostholdsundersøkelser viser at vi fortsatt spiser mindre frukt og grønt enn anbefalt.`
    )}
    primaryButtonText={text('primaryButtonText', 'OK')}
    secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
    onClose={onClose}
    onSuccess={onSuccess}
  />
));

stories.add('With horizontal image (4:3)', () => (
  <Modal
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
      ModalVariants.image
    )}
    title={text('title', '')}
    description={text('description', 'Kort intro tekst som går over to linjer for å vise hvordan det ser ut.')}
    onClose={onClose}
  >
    <img src="http://fakeimg.pl/1200x800?text=jpg&font=lobster" alt="" />
  </Modal>
));

stories.add('With horizontal image (16:9)', () => (
  <Modal
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
      ModalVariants.image
    )}
    title={text('title', '')}
    description={text('description', 'Kort intro tekst som går over to linjer for å vise hvordan det ser ut.')}
    onClose={onClose}
  >
    <img src="http://fakeimg.pl/1600x900?text=jpg&font=lobster" alt="" />
  </Modal>
));

stories.add('With vertical image', () => (
  <Modal
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
      ModalVariants.image
    )}
    title={text('title', '')}
    description={text('description', 'Kort intro tekst som går over to linjer for å vise hvordan det ser ut.')}
    onClose={onClose}
  >
    <img src="http://fakeimg.pl/600x1000?text=jpg&font=lobster" alt="" />
  </Modal>
));

stories.add('Modal without close button', () => {
  return (
    <Modal
      title={text('title', 'Du må ta et valg')}
      size={ModalSize.large}
      variant="warning"
      noCloseButton={boolean('noCloseButton', true)}
      primaryButtonText={text('primaryButtonText', 'Fortsett å være logget inn')}
      secondaryButtonText={text('secondaryButtonText', 'Logg ut')}
      onClose={onClose}
      onSuccess={onSuccess}
    />
  );
});

stories.add('Modal with state example', () => {
  return (
    <ButtonWithModal
      buttonText="Åpne modal"
      variant={select(
        'variant',
        [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
        ModalVariants.normal
      )}
      title={text('title', 'Er du sikker på at du vil?')}
      description={text('description', 'Kort intro tekst som går over to linjer for å vise hvordan det ser ut.')}
      primaryButtonText={text('primaryButtonText', 'OK')}
      secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
      onSuccess={(): void => alert('success')}
    />
  );
});

stories.add('Modal with disabled button', () => {
  const [open, isOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={(): void => isOpen(!open)}>{'Åpne modal'}</Button>
      {open && (
        <Modal
          variant={select(
            'variant',
            [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
            ModalVariants.normal
          )}
          title={text('title', 'Tab her for å se at focustrap fungerer')}
          onClose={() => isOpen(!open)}
        >
          <div>
            <Checkbox label="Checkbox 1" />
            <Checkbox label="Checkbox 2" />
            <p>Vanlig tekst</p>
            <Button onClick={onSuccess} disabled>
              Ok
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
});

stories.add('Modal with only title', () => {
  return (
    <ButtonWithModal
      buttonText="Åpne modal"
      variant={select(
        'variant',
        [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
        ModalVariants.normal
      )}
      title={text('title', 'Er du sikker på at du vil?')}
      noCloseButton
    />
  );
});

stories.add('Modal with only title and no close events', () => {
  return (
    <ButtonWithModal
      buttonText="Åpne modal"
      variant={select(
        'variant',
        [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
        ModalVariants.normal
      )}
      title={text('title', 'Er du sikker på at du vil?')}
      noCloseButton
      disableCloseEvents
    />
  );
});

stories.add('Modal in bottom of page', () => {
  return (
    <div>
      <div style={{ minHeight: '200vh' }}></div>
      <ButtonWithModal
        buttonText="Åpne modal"
        variant={select(
          'variant',
          [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
          ModalVariants.normal
        )}
        title={text('title', 'Er du sikker på at du vil?')}
      />
    </div>
  );
});

stories.add('Modal with custom content', () => {
  const initBurger = 0;

  const [open, isOpen] = React.useState(false);
  const [tempBurger, setTempBurger] = React.useState(initBurger);
  const [burger, setBurger] = React.useState(initBurger);

  return (
    <div>
      <Button onClick={(): void => isOpen(!open)}>{'Bestill frukt'}</Button>
      {burger > 0 && (
        <p style={{ color: 'red' }}>
          {'Antall bestilte frukt: '}
          <strong>{burger}</strong>
        </p>
      )}
      {open && (
        <Modal
          variant={select(
            'variant',
            [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
            ModalVariants.normal
          )}
          title={text('title', 'Hvor mye frukt vil du ha?')}
          primaryButtonText={text('primaryButtonText', 'OK')}
          secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
          onClose={(): void => {
            setBurger(initBurger);
            setTempBurger(initBurger);
            isOpen(false);
          }}
          onSuccess={(): void => {
            setBurger(tempBurger);
            setTempBurger(initBurger);
            isOpen(false);
          }}
        >
          <div>
            <div tabIndex={0} role="button">
              {'This uses tabindex="0"'}
            </div>
            <Slider labelLeft="0" labelRight="mange" onChange={(value): void => setTempBurger(value)} />
          </div>
        </Modal>
      )}
    </div>
  );
});

stories.add('Print modal', () => {
  return (
    <div>
      <p>{'En tilfeldig string'}</p>
      <div style={{ minHeight: '100vh', backgroundColor: 'lavender' }}></div>
      <ButtonWithModal
        onSuccess={onSuccess}
        primaryButtonText="Jeg er en knapp"
        title={text('title', 'Derfor bør du spise frukt')}
        buttonText="Open modal"
        variant={select(
          'variant',
          [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.success, ModalVariants.image],
          ModalVariants.normal
        )}
        printable
        description={`
        Er frukt egentlig så sunt, og hvor mye frukt kan man spise? Hvilken frukt er den sunneste? 
      
      Frukt er en viktig kilde til antioksidanter, mineraler, vitaminer og fiber, og er en særlig god kilde til vitamin C. Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.  

      Nyere forskning viser også at fiber er god mat for de gode tarmbakteriene som hjelper med å holde oss friske.  
      
      De siste årene har det vært stilt spørsmål om frukt egentlig er så sunt på grunn av fruktens karbohydratinnhold. Noen lurer også på om man kan legge på seg av frukt. Det korte svaret er at frukt er sunt, karbohydratinnholdet er ikke noe friske mennesker behøver å bekymre seg over og nei - det er nok ikke frukten som er syndebukken. Norske kostholdsundersøkelser viser at vi fortsatt spiser mindre frukt og grønt enn anbefalt.
      
      Er frukt egentlig så sunt, og hvor mye frukt kan man spise? Hvilken frukt er den sunneste? 
      
      Frukt er en viktig kilde til antioksidanter, mineraler, vitaminer og fiber, og er en særlig god kilde til vitamin C. Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.  

      Nyere forskning viser også at fiber er god mat for de gode tarmbakteriene som hjelper med å holde oss friske.  
      
      De siste årene har det vært stilt spørsmål om frukt egentlig er så sunt på grunn av fruktens karbohydratinnhold. Noen lurer også på om man kan legge på seg av frukt. Det korte svaret er at frukt er sunt, karbohydratinnholdet er ikke noe friske mennesker behøver å bekymre seg over og nei - det er nok ikke frukten som er syndebukken. Norske kostholdsundersøkelser viser at vi fortsatt spiser mindre frukt og grønt enn anbefalt.
        `}
      />
      <div style={{ minHeight: '1200vh', width: '100%' }}></div>
      <p>{'A random string: bottom'}</p>
    </div>
  );
});
