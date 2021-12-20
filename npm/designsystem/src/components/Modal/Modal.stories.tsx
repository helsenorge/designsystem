import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Modal, { ModalSize } from './Modal';
import ButtonWithModal from '../ButtonWithModal/ButtonWithModal';
import { ModalVariants } from './Modal';
import Button from '../Button';
import Slider from '../Slider';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

const onClose = (): void => alert('Lukk');
const onSuccess = (): void => alert('Success');

stories.add('Default', () => (
  <Modal
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
      ModalVariants.normal
    )}
    size={select('size', [ModalSize.large, ModalSize.medium], ModalSize.large)}
    title={text('title', 'Er du sikker på at du vil?')}
    description={text('description', 'For mye H P Lovecraft til å få plass i denne boksen: The most merciful thing in the world, I think.')}
    primaryButtonText={text('primaryButtonText', 'OK')}
    secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
    onClose={onClose}
    onSuccess={onSuccess}
  />
));

stories.add('Scroll', () => (
  <Modal
    variant={select(
      'variant',
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
      ModalVariants.normal
    )}
    size={select('size', [ModalSize.large, ModalSize.medium], ModalSize.large)}
    title={text('title', 'Infinite Scroll: What Is It Good For? The content is endless, but user patience is not.')}
    description={text(
      'description',
      `I am so sorry, says inventor of endless online scrolling
      
      The man behind our ability to endlessly scroll through content on social media sites without ever needing to click a button said he regrets what his invention has done to society.

      Aza Raskin is the creator of “infinite scroll”, a feature that has become ubiquitous on sites such as Facebook and Twitter and allows users to continuously move up or down a page, removing any need to press “refresh” or hit a “next page” button.
      I am so sorry, says inventor of endless online scrolling
      
      The man behind our ability to endlessly scroll through content on social media sites without ever needing to click a button said he regrets what his invention has done to society.

      Aza Raskin is the creator of “infinite scroll”, a feature that has become ubiquitous on sites such as Facebook and Twitter and allows users to continuously move up or down a page, removing any need to press “refresh” or hit a “next page” button.`
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
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
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
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
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
      [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
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
      variant='warning'
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
      buttonText="Open modal"
      variant={select(
        'variant',
        [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
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

stories.add('Modal with only title', () => {
  return (
    <ButtonWithModal
      buttonText="Open modal"
      variant={select(
        'variant',
        [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
        ModalVariants.normal
      )}
      title={text('title', 'Er du sikker på at du vil?')}
      noCloseButton
    />
  );
});

stories.add('Modal in bottom of page', () => {
  return (
    <div>
      <div style={{ minHeight: '200vh' }}></div>
      <ButtonWithModal
        buttonText="Open modal"
        variant={select(
          'variant',
          [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
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
      <Button onClick={(): void => isOpen(!open)}>{'Bestill burger'}</Button>
      {burger > 0 && (
        <p style={{ color: 'red' }}>
          {'Antall bestilte burgere: '}
          <strong>{burger}</strong>
        </p>
      )}
      {open && (
        <Modal
          variant={select(
            'variant',
            [ModalVariants.normal, ModalVariants.error, ModalVariants.warning, ModalVariants.image],
            ModalVariants.normal
          )}
          title={text('title', 'Hvor mange burgere vil du ha?')}
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
