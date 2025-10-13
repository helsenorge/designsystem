import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import StickyNote from './StickyNote';
import Button from '../Button';
import Icon from '../Icon';
import PlusSmall from '../Icons/PlusSmall';
import Title from '../Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/StickyNote',
  component: StickyNote,
  parameters: {
    docs: {
      description: {
        component: 'Huskelapp-komponent som tillater innbygger å legge inn korte notater.',
      },
      page: (): React.JSX.Element => <Docs component={StickyNote} />,
    },
  },
  args: {
    timestamp: '12.04.24 11:14',
    arialabelXButton: 'Slett notat',
    'aria-label': 'Huskelapp til timen',
  },
  argTypes: {
    wrapperClassName: {
      control: 'text',
    },
    timestamp: {
      control: 'text',
    },
    arialabelXButton: {
      control: 'text',
    },
    footerText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof StickyNote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onXButtonClick: () => {
      console.log('X button clicked');
    },
  },
  render: args => <StickyNote {...args} />,
};

export const Controlled: Story = {
  render: args => {
    const [value, setValue] = React.useState('');
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setValue(e.target.value);
    };
    return (
      <>
        <span>
          {`Tekst: `}
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        </span>
        <StickyNote {...args} value={value} onChange={handleChange} />
      </>
    );
  },
};

export const DefaultValue: Story = {
  render: args => {
    return <StickyNote {...args} defaultValue={'Et lite notat som jeg skal huske på til legetimen.'} />;
  },
};

export const Disabled: Story = {
  render: args => {
    return (
      <StickyNote
        {...args}
        onClickWhileDisabled={action('Denne er disabled og kan ikke endres')}
        disabled
        defaultValue={'Dette notatet kan ikke endres på.'}
      />
    );
  },
};

export const Fullmaktshaver: Story = {
  args: {
    footerText: 'Opprettet av Mimmi Morsdottir',
  },
  render: args => {
    return <StickyNote {...args} defaultValue={'Dette notatet har Mimmi Morsdottir skrevet for deg.'} />;
  },
};

export const Feilmelding: Story = {
  args: {
    error: true,
    errorText: 'Det oppstod en feil.',
  },
  render: args => {
    return <StickyNote {...args} />;
  },
};

export const Liste: Story = {
  render: args => {
    return (
      <div className="sticky-note-grid">
        <style>{`
        .sticky-note-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }`}</style>
        <StickyNote {...args} />
        <StickyNote {...args} />
        <StickyNote {...args} />
        <StickyNote {...args} />
        <StickyNote {...args} />
        <StickyNote {...args} />
      </div>
    );
  },
};

export const WithTitleAndButton: Story = {
  render: args => {
    return (
      <div>
        <Title appearance="title2" id="huskelapp-tittel">
          {'Huskelapper'}
        </Title>
        <p>{'Her kan du notere ting du ønsker å huske i forbindelse med denne timen.'}</p>
        <Button type="button" variant="outline">
          <Icon svgIcon={PlusSmall}></Icon>
          {'Legg til ny'}
        </Button>
        <div className="sticky-note-grid">
          <style>{`
        .sticky-note-grid {
          margin-top: 1rem;
          display: flex;
          flex-flow: column;
          gap: 1rem;
        }`}</style>
          <StickyNote {...args} aria-labelledby="huskelapp-tittel" />
          <StickyNote {...args} aria-labelledby="huskelapp-tittel" />
          <StickyNote {...args} aria-labelledby="huskelapp-tittel" />
        </div>
      </div>
    );
  },
};
