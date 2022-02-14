import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpanderList from './ExpanderList';
import * as ViewportUtils from '../../utils/viewport';

describe('Gitt ExpanderList blir rendret', (): void => {
  describe('Når det er tre expandere og accordion er false', (): void => {
    it('Sjekk at ExpanderList sitt snapshot matcher', (): void => {
      const { container } = render(
        <ExpanderList isOpen={false} accordion={false} childPadding={true} color={'blueberry'}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 2</ExpanderList.Expander>
        </ExpanderList>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når det er to expandere og isOpen er true', (): void => {
    it('så er den første expanderen åpen, og den andre ikke åpen', async (): Promise<void> => {
      render(
        <ExpanderList isOpen={true}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
        </ExpanderList>
      );

      const button1 = screen.getByRole('button', { name: 'Title 1' });
      expect(button1).toHaveAttribute('aria-expanded', 'true');

      const button2 = screen.getByRole('button', { name: 'Title 2' });
      expect(button2).toHaveAttribute('aria-expanded', 'false');
    });

    it('så kan man åpne den andre expanderen', (): void => {
      render(
        <ExpanderList isOpen={true}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
        </ExpanderList>
      );

      const button2 = screen.getByRole('button', { name: 'Title 2' });
      expect(button2).toHaveAttribute('aria-expanded', 'false');

      userEvent.click(button2);

      expect(button2).toHaveAttribute('aria-expanded', 'true');
      const text2 = screen.getByText('Text 2');
      expect(text2).toBeInTheDocument();
    });

    it('så kan man lukke den første', (): void => {
      render(
        <ExpanderList isOpen={true}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
        </ExpanderList>
      );

      const button1 = screen.queryByRole('button', { name: 'Title 1' });
      expect(button1).toHaveAttribute('aria-expanded', 'true');

      const text1 = screen.getByText('Text 1');
      expect(text1).toBeInTheDocument();

      userEvent.click(button1);

      expect(button1).toHaveAttribute('aria-expanded', 'false');
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

      const button = screen.getByRole('button', { name: 'Title 1' });
      userEvent.click(button);
      expect(button).toHaveClass('expander-list-link expander-list-link--blueberry');
    });
  });

  describe('Når accordion er true', (): void => {
    test('Så vises bare en tekst om gangen', (): void => {
      render(
        <ExpanderList accordion={true}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 3</ExpanderList.Expander>
        </ExpanderList>
      );

      const button1 = screen.getByRole('button', { name: 'Title 1' });
      userEvent.click(button1);

      expect(button1).toHaveAttribute('aria-expanded', 'true');

      const text1 = screen.getByText('Text 1');

      expect(text1).toBeInTheDocument();

      const button2 = screen.getByRole('button', { name: 'Title 2' });
      userEvent.click(button2);

      expect(button1).toHaveAttribute('aria-expanded', 'false');
      expect(button2).toHaveAttribute('aria-expanded', 'true');

      const text2 = screen.getByText('Text 2');

      expect(text2).toBeInTheDocument();
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

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <ExpanderList testId="bare-tester">
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 2</ExpanderList.Expander>
        </ExpanderList>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
  describe('Gitt at ExpanderList vises', (): void => {
    test('Så har den riktig analyticsid', (): void => {
      render(
        <ExpanderList>
          <ExpanderList.Expander title="Title 1" testId="expander">
            Text 1
          </ExpanderList.Expander>
        </ExpanderList>
      );

      const button = screen.getByTestId('expander');

      expect(button).toHaveAttribute('data-analyticsid', 'expander');
    });
  });
});
