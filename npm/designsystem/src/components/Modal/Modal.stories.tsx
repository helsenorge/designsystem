import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Modal from './index';
import { ModalVariants } from './Modal';
import Button from '../Button';
import Slider from '../Slider';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

const onClose = () => alert('Lukk');
const onSuccess = () => alert('Success');

stories.add('Default', () => (
  <Modal
    variant={select('variant', [ModalVariants.normal, ModalVariants.error, ModalVariants.warning], ModalVariants.normal)}
    title={text('title', 'Er du sikker på at du vil?')}
    description={text('description', 'Kort intro tekst som går over to linjer for å vise hvordan det ser ut.')}
    primaryButtonText={text('primaryButtonText', 'OK')}
    secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
    onClose={onClose}
    onSuccess={onSuccess}
  />
));

stories.add('Large modal', () => (
  <Modal
    variant={select('variant', [ModalVariants.normal, ModalVariants.error, ModalVariants.warning], ModalVariants.normal)}
    title={text('title', 'Er du sikker på at du vil?')}
    description={text('description', 'Kort intro tekst som går over to linjer for å vise hvordan det ser ut.')}
    primaryButtonText={text('primaryButtonText', 'OK')}
    secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
    onClose={onClose}
    onSuccess={onSuccess}
    large={boolean('large', true)}
  />
));

stories.add('Modal with state example', () => {
  const [open, isOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => isOpen(!open)}>Open modal</Button>
      {open && (
        <Modal
          variant={select('variant', [ModalVariants.normal, ModalVariants.error, ModalVariants.warning], ModalVariants.normal)}
          title={text('title', 'Er du sikker på at du vil?')}
          description={text('description', 'Kort intro tekst som går over to linjer for å vise hvordan det ser ut.')}
          primaryButtonText={text('primaryButtonText', 'OK')}
          secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
          onClose={() => isOpen(false)}
          onSuccess={() => isOpen(false)}
        />
      )}
    </div>
  );
});

stories.add('Modal with only title', () => {
  const [open, isOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => isOpen(!open)}>Open modal</Button>
      {open && (
        <Modal
          variant={select('variant', [ModalVariants.normal, ModalVariants.error, ModalVariants.warning], ModalVariants.normal)}
          title={text('title', 'Er du sikker på at du vil?')}
          onClose={() => isOpen(false)}
          secondaryButtonText=""
        />
      )}
    </div>
  );
});

stories.add('Modal in bottom of page', () => {
  const [open, isOpen] = React.useState(false);

  return (
    <div>
      <div style={{ minHeight: '200vh' }}></div>
      <Button onClick={() => isOpen(!open)}>Open modal</Button>
      {open && (
        <Modal
          variant={select('variant', [ModalVariants.normal, ModalVariants.error, ModalVariants.warning], ModalVariants.normal)}
          title={text('title', 'Er du sikker på at du vil?')}
          onClose={() => isOpen(false)}
          secondaryButtonText=""
        />
      )}
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
      <Button onClick={() => isOpen(!open)}>Bestill burger</Button>
      {burger > 0 && (
        <p style={{ color: 'red' }}>
          Antall bestilte burgere: <strong>{burger}</strong>
        </p>
      )}
      {open && (
        <Modal
          variant={select('variant', [ModalVariants.normal, ModalVariants.error, ModalVariants.warning], ModalVariants.normal)}
          title={text('title', 'Hvor mange burgere vil du ha?')}
          children={
            <div>
              <div tabIndex={0} role="button">
                This uses tabindex="0"
              </div>
              <Slider labelLeft="0" labelRight="mange" onChange={value => setTempBurger(value)} />
            </div>
          }
          primaryButtonText={text('primaryButtonText', 'OK')}
          secondaryButtonText={text('secondaryButtonText', 'Avbryt')}
          onClose={() => {
            setBurger(initBurger);
            setTempBurger(initBurger);
            isOpen(false);
          }}
          onSuccess={() => {
            setBurger(tempBurger);
            setTempBurger(initBurger);
            isOpen(false);
          }}
        />
      )}
    </div>
  );
});
