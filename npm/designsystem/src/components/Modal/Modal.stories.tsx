import React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Modal from './Modal';
import { IconSize } from '../../constants';
import ButtonWithModal from '../../docs/ButtonWithModal';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import Envelope from '../Icons/Envelope';
import Label from '../Label';
import Slider from '../Slider';
import { ModalSize, ModalVariants } from './constants';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          'En Modal informerer brukere om en oppgave og kan inneholde kritisk informasjon, kreve beslutninger eller involvere flere oppgaver. En modal har tre varianter normal, warning og error',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
      page: (): React.JSX.Element => (
        <Docs component={Modal} hideStories supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/modal/bruk-Jow45Yvf" />
      ),
    },
  },
  args: {
    variant: ModalVariants.normal,
    size: ModalSize.large,
    title: 'Vil du spise en appelsin?',
    description:
      'Et høyt inntak av fiberrike matvarer som frukt, grønnsaker, bær og fullkorn er assosiert med lavere risiko for tykktarmskreft.',
    primaryButtonText: 'OK',
    secondaryButtonText: 'Avbryt',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ModalVariants),
    },
    size: {
      control: 'select',
      options: Object.values(ModalSize),
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    primaryButtonText: {
      control: 'text',
    },
    secondaryButtonText: {
      control: 'text',
    },
    role: {
      control: 'select',
      options: ['dialog', 'alertdialog'],
    },
    noCloseButton: { control: 'boolean' },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Modal {...args} onClose={action('Close')} onSuccess={action('Success')} />,
};

export const OpenFromButton: Story = {
  render: args => <ButtonWithModal buttonText={'Åpne modal'} {...args} onSuccess={action('Success')} />,
};

export const ModalWithIcon: Story = {
  render: args => <Modal {...args} icon={<Icon svgIcon={Envelope} />} onClose={action('Close')} onSuccess={action('Success')} />,
};

export const ModalWithChildrenAfterTitle: Story = {
  render: args => (
    <Modal
      {...args}
      afterTitleChildren={<Icon svgIcon={Envelope} size={IconSize.Small} />}
      onClose={action('Close')}
      onSuccess={action('Success')}
    />
  ),
};

export const Scroll: Story = {
  render: args => (
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
  ),
};

export const ModalWithoutCloseButton: Story = {
  render: args => <Modal {...args} noCloseButton onClose={action('Close')} onSuccess={action('Success')} />,
};

export const ModalWithDisabledButton: Story = {
  render: args => {
    const [open, isOpen] = React.useState(false);
    return (
      <>
        <Button onClick={(): void => isOpen(!open)}>{'Åpne modal'}</Button>
        {open && (
          <Modal {...args} onClose={() => isOpen(!open)}>
            <div>
              <Checkbox label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
              <Checkbox label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
              <p>{'Vanlig tekst'}</p>
              <Button disabled>{'Ok'}</Button>
            </div>
          </Modal>
        )}
      </>
    );
  },
};

export const ModalWithOnlyTitle: Story = {
  render: () => <ButtonWithModal buttonText={'Åpne modal'} title={'Er du sikker på at du vil?'} noCloseButton />,
};

export const ModalWithOnlyTitleAndNoCloseEvent: Story = {
  render: () => <ButtonWithModal buttonText={'Åpne modal'} title={'Er du sikker på at du vil?'} noCloseButton disableCloseEvents />,
};

export const ModalInBottomOfPage: Story = {
  render: args => (
    <>
      <div style={{ minHeight: '200vh' }}></div>
      <ButtonWithModal buttonText={'Åpne modal'} {...args} />
    </>
  ),
};

export const ModalWithCustomContent: Story = {
  render: args => {
    const initBurger = 0;

    const [open, isOpen] = React.useState(false);
    const [tempBurger, setTempBurger] = React.useState(initBurger);
    const [burger, setBurger] = React.useState(initBurger);

    return (
      <>
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
              <Slider labelLeft="0" labelRight="mange" onChange={(event): void => setTempBurger(Number(event.target.value))} />
            </div>
          </Modal>
        )}
      </>
    );
  },
};

export const PrintModal: Story = {
  render: args => (
    <>
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
    </>
  ),
};

export const FooterContent: Story = {
  render: args => {
    return (
      <Modal
        {...args}
        secondaryButtonText=""
        footerContent={
          <>
            <Button>{'Custom 1'}</Button>
            <Button variant="outline">{'Custom 2'}</Button>
          </>
        }
      >
        {args.children}
      </Modal>
    );
  },
};
