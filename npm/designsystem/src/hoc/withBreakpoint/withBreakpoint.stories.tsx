import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { BreakpointProps, withBreakpoint } from './withBreakpoint';

import { withA11y } from '@storybook/addon-a11y';
import { Breakpoint } from '../../hooks/useBreakpoint';
import { useWindowSize } from '../../hooks/useWindowSize';

const stories = storiesOf('withBreakpoint', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

const Example: React.FC<BreakpointProps> = ({ breakpoint }) => {
  const windowSize = useWindowSize();

  const description = breakpoint && `Breakpoint er nå ${Breakpoint[breakpoint]} (${breakpoint}px)`;

  console.log(description);

  return (
    <div>
      <p>{`Skjermen er ${windowSize.width}px bred`}</p>
      <p>{description}</p>
    </div>
  );
};

const ExampleWithBreakpoint = withBreakpoint(Example);

stories.add('Default', () => <ExampleWithBreakpoint />);
