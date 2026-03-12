import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import LazyIcon from './LazyIcon';
import { IconSize } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';

const meta = {
  title: '@helsenorge/designsystem-react/Components/LazyIcon',
  component: LazyIcon,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={LazyIcon} />,
      description: {
        component: 'LazyIcon lar deg vise et av flere ikoner i ulike størrelser og farger',
      },
    },
  },
  args: {
    iconName: 'Hospital',
  },
  argTypes: {
    iconName: {
      control: 'text',
    },
  },
} satisfies Meta<typeof LazyIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: IconSize.XLarge,
  },
  render: args => {
    const { refObject, isHovered } = usePseudoClasses<HTMLDivElement>();
    return (
      <div ref={refObject}>
        <LazyIcon {...args} isHovered={isHovered} />
      </div>
    );
  },
};
