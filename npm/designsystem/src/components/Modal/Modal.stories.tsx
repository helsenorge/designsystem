import React from 'react';

import { action } from '@storybook/addon-actions';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { StoryObj, Meta } from '@storybook/react';

import Modal, { ModalSize } from './Modal';
import { ModalVariants } from './Modal';
import { IconSize } from '../../constants';
import Button from '../Button';
import ButtonWithModal from '../ButtonWithModal/ButtonWithModal';
import Checkbox from '../Checkbox';
import GridExample from '../GridExample';
import Icon from '../Icon';
import Envelope from '../Icons/Envelope';
import Label from '../Label';
import Slider from '../Slider';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Modal',
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
      options: ModalVariants,
    },
    size: {
      control: 'select',
      options: ModalSize,
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
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      <ButtonWithModal buttonText={'Åpne modal'} {...args} onSuccess={action('Success')} />
    </GridExample>
  ),
};

export const ModalWithIcon: Story = {
  render: args => (
    <GridExample>
      <Modal {...args} icon={<Icon svgIcon={Envelope} />} onClose={action('Close')} onSuccess={action('Success')} />
    </GridExample>
  ),
};

export const ModalWithChildrenAfterTitle: Story = {
  render: args => (
    <GridExample>
      <Modal
        {...args}
        afterTitleChildren={<Icon svgIcon={Envelope} size={IconSize.Small} />}
        onClose={action('Close')}
        onSuccess={action('Success')}
      />
    </GridExample>
  ),
};

export const Scroll: Story = {
  render: args => (
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
  ),
};

export const WithHorizontalImage4By3: Story = {
  render: args => (
    <GridExample>
      <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={'With horizontal image 4x3'}>
        <img src="http://fakeimg.pl/1200x800?text=jpg&font=lobster" alt="" />
      </Modal>
    </GridExample>
  ),
};

export const WithHorizontalImage16By9: Story = {
  render: args => (
    <GridExample>
      <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={'With horizontal image 16x9'}>
        <img src="http://fakeimg.pl/1600x900?text=jpg&font=lobster" alt="" />
      </Modal>
    </GridExample>
  ),
};

export const WithVerticalImage: Story = {
  render: args => (
    <GridExample>
      <Modal {...args} variant={ModalVariants.image} onClose={action('Close')} title={'With vertical image'}>
        <img src="http://fakeimg.pl/600x1000?text=jpg&font=lobster" alt="" />
      </Modal>
    </GridExample>
  ),
};

export const ModalWithoutCloseButton: Story = {
  render: args => (
    <GridExample>
      <Modal {...args} noCloseButton onClose={action('Close')} onSuccess={action('Success')} />
    </GridExample>
  ),
};

export const ModalWithDisabledButton: Story = {
  render: args => {
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
  },
};

export const ModalWithOnlyTitle: Story = {
  render: () => (
    <GridExample>
      <ButtonWithModal buttonText={'Åpne modal'} title={'Er du sikker på at du vil?'} noCloseButton />
    </GridExample>
  ),
};

export const ModalWithOnlyTitleAndNoCloseEvent: Story = {
  render: () => (
    <GridExample>
      <ButtonWithModal buttonText={'Åpne modal'} title={'Er du sikker på at du vil?'} noCloseButton disableCloseEvents />
    </GridExample>
  ),
};

export const ModalInBottomOfPage: Story = {
  render: args => (
    <GridExample>
      <div style={{ minHeight: '200vh' }}></div>
      <ButtonWithModal buttonText={'Åpne modal'} {...args} />
    </GridExample>
  ),
};

export const ModalWithCustomContent: Story = {
  render: args => {
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
  },
};

export const PrintModal: Story = {
  render: args => (
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
  ),
};
