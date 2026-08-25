/* eslint-disable no-console, @typescript-eslint/explicit-function-return-type */
import { existsSync } from 'fs';
import { writeFile, mkdir } from 'fs/promises';
import readline from 'readline';

const getComponentName = async () => {
  const fromArgs = process.argv[2];

  if (fromArgs) {
    return fromArgs.trim();
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await new Promise(resolve => rl.question('Komponentnavn (PascalCase, f.eks. PromoPanel): ', resolve));

  rl.close();

  return answer.trim();
};

const toKebabCase = name =>
  name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

const componentName = await getComponentName();

if (!/^[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]+)*$/.test(componentName)) {
  console.error(`Ugyldig navn: "${componentName}". Navnet må være PascalCase, f.eks. Button eller SpecialButton.`);
  process.exit(1);
}

const className = toKebabCase(componentName);
const componentDirectory = `./src/components/${componentName}`;

if (existsSync(componentDirectory)) {
  console.error(`Komponenten finnes allerede: ${componentDirectory}`);
  process.exit(1);
}

await mkdir(componentDirectory);

await writeFile(
  `${componentDirectory}/index.ts`,
  `import ${componentName} from './${componentName}';
export * from './${componentName}';
export default ${componentName};
`
);

await writeFile(
  `${componentDirectory}/styles.module.scss`,
  `.${className} {
  display: block;
}
`
);

await writeFile(
  `${componentDirectory}/styles.module.scss.d.ts`,
  `export type Styles = {
  '${className}': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
`
);

await writeFile(
  `${componentDirectory}/${componentName}.tsx`,
  `import type React from 'react';

import styles from './styles.module.scss';

export interface ${componentName}Props {
  /** Content of the component */
  children?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const ${componentName}: React.FC<${componentName}Props> = props => {
  const { children, testId } = props;

  return (
    <div className={styles['${className}']} data-testid={testId}>
      {children}
    </div>
  );
};

export default ${componentName};
`
);

await writeFile(
  `${componentDirectory}/${componentName}.test.tsx`,
  `import { render, screen } from '@testing-library/react';

import ${componentName} from './${componentName}';

describe('Gitt at ${componentName} skal vises', (): void => {
  describe('Når ${componentName} vises', (): void => {
    test('Så vises innholdet', (): void => {
      render(<${componentName} testId={'${className}'}>{'Innhold'}</${componentName}>);

      expect(screen.getByTestId('${className}')).toBeVisible();
    });
  });
});
`
);

await writeFile(
  `${componentDirectory}/${componentName}.stories.tsx`,
  `import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import ${componentName} from './${componentName}';

const meta = {
  title: '@helsenorge/designsystem-react/Components/${componentName}',
  component: ${componentName},
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={${componentName}} />,
      description: {
        component: 'Beskrivelse av ${componentName}',
      },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <${componentName} {...args}>{'${componentName}'}</${componentName}>,
};
`
);

console.log(`
Komponenten ${componentName} er opprettet i ${componentDirectory}`);
