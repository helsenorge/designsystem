import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';
import { useArgs } from 'storybook/preview-api';

import type { FavoriteButtonProps } from '.';
import type { StoryObj, Meta } from '@storybook/react-vite';

import HelpTriggerIcon from '../HelpTriggerIcon';
import Title from '../Title';

import storyStyles from './stories.module.scss';

import { FavoriteButton } from '.';

const meta = {
  title: '@helsenorge/designsystem-react/Components/FavoriteButton',
  component: FavoriteButton,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={FavoriteButton} />,
      description: {
        component:
          'FavoriteButton er en ikonbasert knapp som toggler mellom outlinet og fylt ikon. Knappen aktiverer/dekativerer om en ressurs skal være markert som snarvei eller ikke. ',
      },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof FavoriteButton>;

export default meta;

type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    onClick: () => action('FavoriteButton clicked!'),
    checked: false,
  },
  render: args => {
    const [{ checked }, setChecked] = useArgs<FavoriteButtonProps>();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      if (e) {
        action('FavoriteButton clicked!')(e);
      }
      setChecked({ checked: !checked });
    };

    return (
      <>
        <FavoriteButton {...args} onClick={handleClick} />
      </>
    );
  },
};

export const WithTitle: Story = {
  args: {
    onClick: () => action('FavoriteButton clicked!'),
  },
  render: args => {
    const [{ checked }, setChecked] = useArgs<FavoriteButtonProps>();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      if (e) {
        action('FavoriteButton clicked!')(e);
      }
      setChecked({ checked: !checked });
    };

    return (
      <>
        <Title appearance="title1" className={storyStyles['story__title']}>
          {'Timeavtaler'}
        </Title>
        <span className={storyStyles['story__hjelpetrigger']}>
          <span>
            <HelpTriggerIcon size={'xlarge'} />
          </span>
          <span>
            <FavoriteButton {...args} onClick={handleClick} />
          </span>
        </span>
        <br />
      </>
    );
  },
};

export const WithHelpTrigger: Story = {
  args: {
    onClick: () => action('FavoriteButton clicked!'),
  },
  render: args => {
    const [{ checked }, setChecked] = useArgs<FavoriteButtonProps>();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      if (e) {
        action('FavoriteButton clicked!')(e);
      }
      setChecked({ checked: !checked });
    };

    return (
      <span style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <HelpTriggerIcon size={'xlarge'} />
        <FavoriteButton {...args} onClick={handleClick} />
      </span>
    );
  },
};
