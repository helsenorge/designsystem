import React from 'react';
import {render} from '@testing-library/react';
import ExpanderList from './ExpanderList';
import {boolean, select} from '@storybook/addon-knobs';
import {allPaletteNames} from '../../../.storybook/knobs';

test('displays an expanderlist with title and content', (): void => {
  const {container} = render(
    <div
      style={{
        width: '40rem',
      }}>
      <ExpanderList
        isOpen={boolean('Is open', false)}
        accordion={boolean('Accordion', false)}
        childPadding={boolean('Child padding', true)}
        color={select('Color', allPaletteNames, 'blueberry')}>
        <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
        <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
        <ExpanderList.Expander title="Title 3">Text 2</ExpanderList.Expander>
      </ExpanderList>
    </div>,
  );
  expect(container).toMatchSnapshot();
});
