import React from 'react';
import {render} from '@testing-library/react';
import ExpanderList from './ExpanderList';

test('displays an expanderlist with expanders, containing title and content', (): void => {
  const {container} = render(
    <div
      style={{
        width: '40rem',
      }}>
      <ExpanderList isOpen={false} accordion={false} childPadding={true} color={'blueberry'}>
        <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
        <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
        <ExpanderList.Expander title="Title 3">Text 2</ExpanderList.Expander>
      </ExpanderList>
    </div>,
  );
  expect(container).toMatchSnapshot();
});
