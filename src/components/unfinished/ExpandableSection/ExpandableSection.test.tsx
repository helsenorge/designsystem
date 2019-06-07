import React from 'react';
import {render} from 'react-testing-library';
import ExpandableSection from './ExpandableSection';

test('renders correctly', (): void => {
  const {container} = render(<ExpandableSection>ExpandableSection</ExpandableSection>);
  expect(container).toMatchSnapshot();
});
