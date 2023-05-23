import React from 'react';

import { action } from '@storybook/addon-actions';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal, { ModalSize } from './Modal';
import { ModalVariants } from './Modal';
import { IconSize } from '../../constants';
import Button from '../Button';
import ButtonWithModal from '../ButtonWithModal/ButtonWithModal';
import Checkbox from '../Checkbox';
import GridExample from '../GridExample';
import Icon from '../Icons';
import Envelope from '../Icons/Envelope';
import Label from '../Label';
import Slider from '../Slider';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          'En Modal informerer brukere om en oppgave og kan inneholde kritisk informasjon, kreve beslutninger eller involvere flere oppgaver. En modal har tre varianter normal, warning og error',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
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
  <GridExample>
    <ButtonWithModal buttonText={'Åpne modal'} {...args} onSuccess={action('Success')} />
  </GridExample>
);

export const ModalWithIcon: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
    <Modal {...args} icon={<Icon svgIcon={Envelope} />} onClose={action('Close')} onSuccess={action('Success')} />
  </GridExample>
);

export const ModalWithChildrenAfterTitle: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
    <Modal
      {...args}
      afterTitleChildren={<Icon svgIcon={Envelope} size={IconSize.Small} />}
      onClose={action('Close')}
      onSuccess={action('Success')}
    />
  </GridExample>
);

export const Scroll: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
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
  </GridExample>
);

export const WithHorizontalImage4By3: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
    <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={''}>
      <img src="http://fakeimg.pl/1200x800?text=jpg&font=lobster" alt="" />
    </Modal>
  </GridExample>
);

export const WithHorizontalImage16By9: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
    <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={''}>
      <img src="http://fakeimg.pl/1600x900?text=jpg&font=lobster" alt="" />
    </Modal>
  </GridExample>
);

export const WithVerticalImage: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
    <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={''}>
      <img src="http://fakeimg.pl/600x1000?text=jpg&font=lobster" alt="" />
    </Modal>
  </GridExample>
);

export const ModalWithoutCloseButton: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
    <Modal {...args} noCloseButton onClose={action('Close')} onSuccess={action('Success')} />
  </GridExample>
);

export const ModalWithDisabledButton: ComponentStory<typeof Modal> = (args: any) => {
  const [open, isOpen] = React.useState(false);
  return (
    <GridExample>
      <Button onClick={(): void => isOpen(!open)}>{'Åpne modal'}</Button>
      {open && (
        <Modal {...args} onClose={() => isOpen(!open)}>
          <div>
            <Checkbox label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
            <Checkbox label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
            <p>Vanlig tekst</p>
            <Button disabled>Ok</Button>
          </div>
        </Modal>
      )}
    </GridExample>
  );
};

export const ModalWithOnlyTitle: ComponentStory<typeof Modal> = () => (
  <GridExample>
    <ButtonWithModal buttonText={'Åpne modal'} title={'Er du sikker på at du vil?'} noCloseButton />
  </GridExample>
);

export const ModalWithOnlyTitleAndNoCloseEvent: ComponentStory<typeof Modal> = () => (
  <GridExample>
    <ButtonWithModal buttonText={'Åpne modal'} title={'Er du sikker på at du vil?'} noCloseButton disableCloseEvents />
  </GridExample>
);

export const ModalInBottomOfPage: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
    <div style={{ minHeight: '200vh' }}></div>
    <ButtonWithModal buttonText={'Åpne modal'} {...args} />
  </GridExample>
);

export const ModalWithCustomContent: ComponentStory<typeof Modal> = (args: any) => {
  const initBurger = 0;

  const [open, isOpen] = React.useState(false);
  const [tempBurger, setTempBurger] = React.useState(initBurger);
  const [burger, setBurger] = React.useState(initBurger);

  return (
    <GridExample>
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
    </GridExample>
  );
};

export const PrintModal: ComponentStory<typeof Modal> = (args: any) => (
  <GridExample>
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
  </GridExample>
);
