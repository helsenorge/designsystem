import React from 'react';
import {render} from '@testing-library/react';
import AnchorLink from './AnchorLink';

test('displays default anchorlink', (): void => {
  const {container} = render(<AnchorLink target={'_self'}>AnchorLink</AnchorLink>);
  expect(container).toMatchSnapshot();
});

test('displays anchorlink with className and id', (): void => {
  const {container} = render(
    <AnchorLink target={'_self'} id={'custom-id'} className={'custom-classname'}>
      AnchorLink
    </AnchorLink>,
  );
  expect(container).toMatchSnapshot();
});

test('displays external anchorlink', (): void => {
  const {container} = render(<AnchorLink target={'_blank'}>AnchorLink external</AnchorLink>);
  expect(container).toMatchSnapshot();
});
