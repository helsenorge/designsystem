import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import ExpanderList from './ExpanderList';
import { theme } from '../../theme';

describe('Gitt ExpanderList blir rendret', (): void => {
  test('Sjekk at ExpanderList sitt snapshot matcher', (): void => {
    const { container } = render(
      <div
        style={{
          width: '40rem',
        }}
      >
        <ExpanderList isOpen={false} accordion={false} childPadding={true} color={'blueberry'}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 2</ExpanderList.Expander>
        </ExpanderList>
      </div>
    );
    expect(container).toMatchSnapshot();
  });

  test('Sjekk Expander bakgrunnsfarge når musepeker trykker på den', (): void => {
    render(
      <div
        style={{
          width: '40rem',
        }}
      >
        <ExpanderList isOpen={false} accordion={false} childPadding={true} color={'blueberry'}>
          <ExpanderList.Expander testId="test01" title="Title 1">
            Text 1
          </ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 2</ExpanderList.Expander>
        </ExpanderList>
      </div>
    );

    const testExpander = screen.getByTestId('test01');
    fireEvent.click(testExpander);
    expect(testExpander).toHaveStyle(`background-color: ${theme.palette.blueberry100}`);
  });
});
