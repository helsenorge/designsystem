import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpanderList from './ExpanderList';
import { theme } from '../../theme';
import * as ViewportUtils from '../../utils/viewport';

describe('Gitt ExpanderList blir rendret', (): void => {
  describe('Når det er tre expandere og accordion er false', (): void => {
    it('Sjekk at ExpanderList sitt snapshot matcher', (): void => {
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
  });

  describe('Når man klikker på en expander', (): void => {
    it('Sjekk Expander bakgrunnsfarge når musepeker trykker på den', (): void => {
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
      expect(testExpander.className).toBe('expander-list-link expander-list-link--blueberry');
    });
  });

  describe('Når accordion er true', (): void => {
    test('Så vises bare en tekst om gangen', (): void => {
      render(
        <ExpanderList accordion={true}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 2</ExpanderList.Expander>
        </ExpanderList>
      );

      const title1 = screen.getByRole('button', { name: 'Title 1' });
      userEvent.click(title1);
      const text1 = screen.getByText('Text 1');
      expect(text1).toBeVisible();
      const title2 = screen.getByRole('button', { name: 'Title 2' });
      userEvent.click(title2);
      expect(screen.queryByText('Text 1')).not.toBeInTheDocument();
      const text2 = screen.getByText('Text 2');
      expect(text2).toBeVisible();
    });
  });

  describe('Når accordion er true og expanderen er utenfor viewport etter at man klikker på den', (): void => {
    test('Så scroller nettleseren slik at expanderen blir synlig', (): void => {
      const mockScrollIntoView = jest.fn();
      window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
      const mockIsElementInViewport = jest.spyOn(ViewportUtils, 'isElementInViewport');

      mockIsElementInViewport.mockReturnValue(false);
      render(
        <ExpanderList accordion={true}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 2</ExpanderList.Expander>
        </ExpanderList>
      );

      const title1 = screen.getByRole('button', { name: 'Title 3' });
      userEvent.click(title1);
      expect(mockScrollIntoView).toHaveBeenCalledTimes(1);
      expect(mockScrollIntoView).toHaveBeenCalledWith();
    });
  });
});
