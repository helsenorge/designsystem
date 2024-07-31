# Frankenstein - Helsenorge's design system

This repository contains React components in NPM packages that implement the design:

- @helsenorge/designsystem-react
- @helsenorge/datepicker
- @helsenorge/lightbox

## Using the React components

In your project:

```sh
npm i @helsenorge/designsystem-react --save
```

Using components:

```tsx
import Button from '@helsenorge/designsystem-react/components/Button';

const ExampleComponent: React.FC = () => {
  return <Button>{'Click me'}</Button>;
};
```

## Documentation

View our [Storybook](https://frankensteinstorybook.z1.web.core.windows.net/master/) to see all components and their props.

## Making a new component in @helsenorge/designsystem-react

```sh
npm i
cd npm/designsystem
npm run new # Follow the instructions
```

Use `npm run start` to start Storybook and start developing your component!

## Issues and pull requests

Please [file an issue on Github](https://github.com/helsenorge/designsystem/issues) or open a pull request there.

If you have access to Norsk Helsenett's Slack, contact the ROX team for assistance.
