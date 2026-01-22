import type React from 'react';
import { useRef } from 'react';

import type { StoryObj, Meta } from '@storybook/react-vite';

import { useIsVisible } from './useIsVisible';
import Button from '../components/Button';
import HighlightPanel from '../components/HighlightPanel';
import { longLoremText } from '../utils/loremtext';

interface UseIsVisibleExampleProps {
  threshold?: number;
}

const UseIsVisibleExample: React.FC<UseIsVisibleExampleProps> = props => {
  const ref = useRef<HTMLButtonElement>(null);
  const isVisible = useIsVisible(ref, props.threshold);

  return (
    <>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
      <Button ref={ref} disabled={!isVisible}>
        {`Knappen som sjekkes`}
      </Button>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
      <HighlightPanel color="blueberry">
        <p>{`Knappen er ${isVisible ? 'synlig' : 'ikke synlig'}`}</p>
      </HighlightPanel>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useIsVisible',
  component: UseIsVisibleExample,
  parameters: {
    docs: {
      description: {
        component: 'Sjekk om et HTML-element er synlig i vinduet, eller ikke.',
      },
      source: {
        language: 'tsx',
        code: `
import { useIsVisible } from '@helsenorge/designsystem-react/hooks/useIsVisible';
import Button from '@helsenorge/designsystem-react/components/Button';
import HighlightPanel from '@helsenorge/designsystem-react/components/HighlightPanel';
import { longLoremText } from '@helsenorge/designsystem-react/utils/loremtext';

const UseIsVisibleExample: React.FC<UseIsVisibleExampleProps> = props => {
  const ref = useRef<HTMLButtonElement>{'(null);
  const isVisible = useIsVisible(ref, props.threshold);

  return ('}<>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
      <Button ref={ref} disabled={!isVisible}>
        {\`Knappen som sjekkes\`}
      </Button>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
      <HighlightPanel color="blueberry">
        <p>{\`Knappen er \${isVisible ? 'synlig' : 'ikke synlig'}\`}</p>
      </HighlightPanel>
    </>
  );
};
`,
      },
    },
    chromatic: { disableSnapshot: true },
  },
  args: {
    threshold: 0.5,
  },
  argTypes: {
    threshold: {
      control: 'number',
    },
  },
} satisfies Meta<typeof UseIsVisibleExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: args => <UseIsVisibleExample {...args} /> };
