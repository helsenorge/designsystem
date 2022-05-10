import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal, { ModalSize } from './Modal';
import ButtonWithModal from '../ButtonWithModal/ButtonWithModal';
import { ModalVariants } from './Modal';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Slider from '../Slider';
import Icon from '../Icons';
import { IconSize } from '../../constants';
import Envelope from '../Icons/Envelope';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    variant: {
      control: 'select',
      options: ModalVariants,
      defaultValue: ModalVariants.normal,
    },
    size: {
      control: 'select',
      options: ModalSize,
      defaultValue: ModalSize.large,
    },
    title: {
      control: 'text',
      defaultValue: 'Vil du spise en appelsin?',
    },
    description: {
      control: 'text',
      defaultValue:
        ' Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.',
    },
    primaryButtonText: {
      control: 'text',
      defaultValue: 'OK',
    },
    secondaryButtonText: {
      control: 'text',
      defaultValue: 'Avbryt',
    },
  },
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args: any) => (
  <Modal {...args} onClose={action('Close')} onSuccess={action('Success')} />
);

export const MoodalWithIcon: ComponentStory<typeof Modal> = (args: any) => (
  <Modal {...args} icon={<Icon svgIcon={Envelope} />} onClose={action('Close')} onSuccess={action('Success')} />
);

export const ModalWithChildrenAfterTitle: ComponentStory<typeof Modal> = (args: any) => (
  <Modal
    {...args}
    afterTitleChildren={<Icon svgIcon={Envelope} size={IconSize.Small} />}
    onClose={action('Close')}
    onSuccess={action('Success')}
  />
);

export const Scroll: ComponentStory<typeof Modal> = (args: any) => (
  <Modal
    {...args}
    onClose={action('Close')}
    onSuccess={action('Success')}
    description={`Er frukt egentlig så sunt, og hvor mye frukt kan man spise? Hvilken frukt er den sunneste? 
    
    Frukt er en viktig kilde til antioksidanter, mineraler, vitaminer og fiber, og er en særlig god kilde til vitamin C. Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.  

    Nyere forskning viser også at fiber er god mat for de gode tarmbakteriene som hjelper med å holde oss friske.  
    
    De siste årene har det vært stilt spørsmål om frukt egentlig er så sunt på grunn av fruktens karbohydratinnhold. Noen lurer også på om man kan legge på seg av frukt. Det korte svaret er at frukt er sunt, karbohydratinnholdet er ikke noe friske mennesker behøver å bekymre seg over og nei - det er nok ikke frukten som er syndebukken. Norske kostholdsundersøkelser viser at vi fortsatt spiser mindre frukt og grønt enn anbefalt.
    
    Er frukt egentlig så sunt, og hvor mye frukt kan man spise? Hvilken frukt er den sunneste? 
    
    Frukt er en viktig kilde til antioksidanter, mineraler, vitaminer og fiber, og er en særlig god kilde til vitamin C. Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.  

    Nyere forskning viser også at fiber er god mat for de gode tarmbakteriene som hjelper med å holde oss friske.  
    
    De siste årene har det vært stilt spørsmål om frukt egentlig er så sunt på grunn av fruktens karbohydratinnhold. Noen lurer også på om man kan legge på seg av frukt. Det korte svaret er at frukt er sunt, karbohydratinnholdet er ikke noe friske mennesker behøver å bekymre seg over og nei - det er nok ikke frukten som er syndebukken. Norske kostholdsundersøkelser viser at vi fortsatt spiser mindre frukt og grønt enn anbefalt.`}
  />
);

export const WithHorizontalImage4By3: ComponentStory<typeof Modal> = (args: any) => (
  <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={''}>
    <img src="http://fakeimg.pl/1200x800?text=jpg&font=lobster" alt="" />
  </Modal>
);

export const WithHorizontalImage16By9: ComponentStory<typeof Modal> = (args: any) => (
  <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={''}>
    <img src="http://fakeimg.pl/1600x900?text=jpg&font=lobster" alt="" />
  </Modal>
);

export const WithVerticalImage: ComponentStory<typeof Modal> = (args: any) => (
  <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={''}>
    <img src="http://fakeimg.pl/600x1000?text=jpg&font=lobster" alt="" />
  </Modal>
);

export const ModalWithoutCloseButton: ComponentStory<typeof Modal> = (args: any) => (
  <Modal {...args} noCloseButton onClose={action('Close')} onSuccess={action('Success')} />
);

export const ModalWithStateExample: ComponentStory<typeof Modal> = (args: any) => (
  <ButtonWithModal buttonText={'Åpne modal'} {...args} noCloseButton onSuccess={action('Success')} />
);

export const ModalWithDisabledButton: ComponentStory<typeof Modal> = (args: any) => {
  const [open, isOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={(): void => isOpen(!open)}>{'Åpne modal'}</Button>
      {open && (
        <Modal {...args} onClose={() => isOpen(!open)}>
          <div>
            <Checkbox label="Checkbox 1" />
            <Checkbox label="Checkbox 2" />
            <p>Vanlig tekst</p>
            <Button disabled>Ok</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export const ModalWithOnlyTitle: ComponentStory<typeof Modal> = () => (
  <ButtonWithModal buttonText={'Åpne modal'} title={'Er du sikker på at du vil?'} noCloseButton />
);

export const ModalWithOnlyTitleAndNoCloseEvent: ComponentStory<typeof Modal> = () => (
  <ButtonWithModal buttonText={'Åpne modal'} title={'Er du sikker på at du vil?'} noCloseButton disableCloseEvents />
);

export const ModalInBottomOfPage: ComponentStory<typeof Modal> = (args: any) => (
  <div>
    <div style={{ minHeight: '200vh' }}></div>
    <ButtonWithModal buttonText={'Åpne modal'} {...args} />
  </div>
);

export const ModalWithCustomContent: ComponentStory<typeof Modal> = (args: any) => {
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
          {...args}
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
};

export const PrintModal: ComponentStory<typeof Modal> = (args: any) => (
  <div>
    <p>{'En tilfeldig string'}</p>
    <div style={{ minHeight: '100vh', backgroundColor: 'lavender' }}></div>
    <ButtonWithModal
      buttonText={'Åpne modal'}
      printable
      {...args}
      onSuccess={action('success')}
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
