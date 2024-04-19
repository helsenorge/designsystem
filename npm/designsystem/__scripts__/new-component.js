import { writeFile, mkdir } from 'fs/promises';
import readline from 'readline';

const rl = readline.createInterface({
  // eslint-disable-next-line no-undef
  input: process.stdin,
  // eslint-disable-next-line no-undef
  output: process.stdout,
});

const ask = str => new Promise(resolve => rl.question(str, resolve));

const componentName = await ask('Hva skal komponenten hete? Eksempel: PromoPanel ');

if (!/^[A-Z][a-z][a-zA-Z]+$/.test(componentName)) {
  throw Error('Navnet må bruke PascalCase Button eller SpecialButton');
}

const componentDirectory = `./src/components/${componentName}`;

await mkdir(componentDirectory);

await writeFile(
  `${componentDirectory}/index.ts`,
  `import ${componentName} from './${componentName}';
export * from './${componentName}';
export default ${componentName};
`
);

await writeFile(`${componentDirectory}/styles.module.scss`, '');

await writeFile(
  `${componentDirectory}/${componentName}.tsx`,
  `import React from 'react';

import styles from './styles.module.scss';

export interface ${componentName}Props {
  /** Sets the data-testid attribute. */
  testId?: string;
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  return null;
};

export default ${componentName};
`
);

await writeFile(
  `${componentDirectory}/${componentName}.test.tsx`,
  `import React from 'react';

import { render } from '@testing-library/react';

import ${componentName} from './${componentName}';

describe('Gitt at ${componentName} skal vises', (): void => {
  describe('Når ${componentName} vises', (): void => {
    test('Så vises ${componentName}', (): void => {
      render(<${componentName} />);
    });
  });
});
`
);

await writeFile(
  `${componentDirectory}/${componentName}.stories.tsx`,
  `import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import ${componentName} from './${componentName}';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/${componentName}',
  component: ${componentName},
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av ${componentName}',
      },
      page: (): React.JSX.Element => <Docs component={${componentName}} />,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
      <${componentName} {...args} />
  ),
};
`
);

rl.close();
