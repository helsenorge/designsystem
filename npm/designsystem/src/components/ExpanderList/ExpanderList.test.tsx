import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpanderList from './ExpanderList';
import Icon from '../Icons';
import Avatar from '../Icons/Avatar';
import Title from '../Title/Title';
import * as ViewportUtils from '../../utils/viewport';
import '../../__mocks__/uuid';

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

    it('så kan man åpne den andre expanderen', async (): Promise<void> => {
      render(
        <ExpanderList isOpen={true}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
        </ExpanderList>
      );

      const button2 = screen.getByRole('button', { name: 'Title 2' });
      expect(button2).toHaveAttribute('aria-expanded', 'false');

      await userEvent.click(button2);

      expect(button2).toHaveAttribute('aria-expanded', 'true');
      const text2 = screen.getByText('Text 2');
      expect(text2).toBeInTheDocument();
    });

    it('så kan man lukke den første', async (): Promise<void> => {
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

      await userEvent.click(button1);

      expect(button1).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når det er to expandere med expanded true', (): void => {
    it('så er begge expanderne åpne', async (): Promise<void> => {
      render(
        <ExpanderList>
          <ExpanderList.Expander expanded title="Title 1">
            Text 1
          </ExpanderList.Expander>
          <ExpanderList.Expander expanded title="Title 2">
            Text 2
          </ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 3</ExpanderList.Expander>
        </ExpanderList>
      );

      const button1 = screen.getByRole('button', { name: 'Title 1' });
      expect(button1).toHaveAttribute('aria-expanded', 'true');

      const button2 = screen.getByRole('button', { name: 'Title 2' });
      expect(button2).toHaveAttribute('aria-expanded', 'true');

      const button3 = screen.getByRole('button', { name: 'Title 3' });
      expect(button3).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når det er to expandere, der den andre har expanded true', (): void => {
    it('så er bare den andre expanderen åpen', async (): Promise<void> => {
      render(
        <ExpanderList>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander expanded title="Title 2">
            Text 2
          </ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 3</ExpanderList.Expander>
        </ExpanderList>
      );

      const button1 = screen.getByRole('button', { name: 'Title 1' });
      expect(button1).toHaveAttribute('aria-expanded', 'false');

      const button2 = screen.getByRole('button', { name: 'Title 2' });
      expect(button2).toHaveAttribute('aria-expanded', 'true');

      const button3 = screen.getByRole('button', { name: 'Title 3' });
      expect(button3).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når rerendring trigges i children mens expander er åpen', (): void => {
    it('så er expander fortsatt åpen', async (): Promise<void> => {
      const ExpanderListTest: React.FC = () => {
        const [text, setText] = React.useState('knapp');

        return (
          <ExpanderList>
            <ExpanderList.Expander title={'Title 1'}>
              <button onClick={() => setText('oppdatert knapp')}>{text}</button>
            </ExpanderList.Expander>
          </ExpanderList>
        );
      };

      render(<ExpanderListTest />);

      const expander = screen.getByRole('button', { name: 'Title 1' });
      await userEvent.click(expander);
      expect(expander).toHaveAttribute('aria-expanded', 'true');

      const button = screen.getByRole('button', { name: 'knapp' });
      await userEvent.click(button);

      expect(expander).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Når det er en expander der children kan oppdatere state', (): void => {
    describe('Når state oppdateres i children mens expander er åpen', (): void => {
      it('så er expander fortsatt åpen', async (): Promise<void> => {
        const ExpanderListTest: React.FC = () => {
          const [text, setText] = React.useState('knapp');

          return (
            <ExpanderList>
              <ExpanderList.Expander title={'Title 1'}>
                <button onClick={() => setText('oppdatert knapp')}>{text}</button>
              </ExpanderList.Expander>
            </ExpanderList>
          );
        };

        render(<ExpanderListTest />);

        const expander = screen.getByRole('button', { name: 'Title 1' });
        await userEvent.click(expander);
        expect(expander).toHaveAttribute('aria-expanded', 'true');

        const button = screen.getByRole('button', { name: 'knapp' });
        await userEvent.click(button);

        expect(expander).toHaveAttribute('aria-expanded', 'true');
      });
    });
  });

  describe('Når det er en expander der expanded-status kan endres utenfra', (): void => {
    describe('Når expanded endrer status', (): void => {
      it('Så toggles riktig expander', async (): Promise<void> => {
        const ExpanderListTest: React.FC = () => {
          const [isExpanded, setIsExpanded] = React.useState(false);

          return (
            <>
              <ExpanderList>
                <ExpanderList.Expander title={'Title 1'}>{'Hei 1'}</ExpanderList.Expander>
                <ExpanderList.Expander title={'Title 2'} expanded={isExpanded}>
                  {'Hei 2'}
                </ExpanderList.Expander>
              </ExpanderList>
              <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Lukk' : 'Åpne'}</button>
            </>
          );
        };

        render(<ExpanderListTest />);

        const expander1 = screen.getByRole('button', { name: 'Title 1' });
        expect(expander1).toHaveAttribute('aria-expanded', 'false');

        const expander2 = screen.getByRole('button', { name: 'Title 2' });
        expect(expander2).toHaveAttribute('aria-expanded', 'false');

        await userEvent.click(screen.getByRole('button', { name: 'Åpne' }));

        expect(expander1).toHaveAttribute('aria-expanded', 'false');
        expect(expander2).toHaveAttribute('aria-expanded', 'true');

        await userEvent.click(screen.getByRole('button', { name: 'Lukk' }));
        expect(expander1).toHaveAttribute('aria-expanded', 'false');
        expect(expander2).toHaveAttribute('aria-expanded', 'false');
      });
    });
  });

  describe('Når man klikker på en expander', (): void => {
    it('Sjekk Expander bakgrunnsfarge når musepeker trykker på den', async (): Promise<void> => {
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
      await userEvent.click(button);
      expect(button).toHaveClass('expander-list-link expander-list-link--blueberry');
    });
  });

  describe('Når accordion er true', (): void => {
    test('Så vises bare en tekst om gangen', async (): Promise<void> => {
      render(
        <ExpanderList accordion={true}>
          <ExpanderList.Expander title="Title 1">Text 1</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 2">Text 2</ExpanderList.Expander>
          <ExpanderList.Expander title="Title 3">Text 3</ExpanderList.Expander>
        </ExpanderList>
      );

      const button1 = screen.getByRole('button', { name: 'Title 1' });
      await userEvent.click(button1);

      expect(button1).toHaveAttribute('aria-expanded', 'true');

      const text1 = screen.getByText('Text 1');

      expect(text1).toBeInTheDocument();

      const button2 = screen.getByRole('button', { name: 'Title 2' });
      await userEvent.click(button2);

      expect(button1).toHaveAttribute('aria-expanded', 'false');
      expect(button2).toHaveAttribute('aria-expanded', 'true');

      const text2 = screen.getByText('Text 2');

      expect(text2).toBeInTheDocument();
    });
  });

  describe('Når accordion er true og expanderen er utenfor viewport etter at man klikker på den', (): void => {
    test('Så scroller nettleseren slik at expanderen blir synlig', async (): Promise<void> => {
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
      await userEvent.click(title1);

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

      expect(button).toHaveAttribute('data-analyticsid', 'expander-list-expander');
    });
  });
  describe('Gitt at ExpanderList har expander med onExpand-callback', (): void => {
    describe('Når man klikker på ekspanderen tre ganger', (): void => {
      test('Så kalles callbacken med true, false og true', async (): Promise<void> => {
        const handleExpand = jest.fn();
        render(
          <ExpanderList>
            <ExpanderList.Expander title="Title 1" onExpand={handleExpand}>
              Text 1
            </ExpanderList.Expander>
          </ExpanderList>
        );

        const expander = screen.getByText('Title 1');

        await userEvent.click(expander);
        await userEvent.click(expander);
        await userEvent.click(expander);
        expect(handleExpand).toHaveBeenCalledTimes(3);
        expect(handleExpand).toHaveBeenNthCalledWith(1, true);
        expect(handleExpand).toHaveBeenNthCalledWith(2, false);
        expect(handleExpand).toHaveBeenNthCalledWith(3, true);
      });
    });
  });
  describe('Gitt at ExpanderList har Expander med onExpand-callback og isOpen satt til true', (): void => {
    describe('Når man klikker på expanderen én gang', (): void => {
      test('Så kalles callback først med true og så med false', async (): Promise<void> => {
        const handleExpand = jest.fn();
        render(
          <ExpanderList isOpen>
            <ExpanderList.Expander title="Title 1" onExpand={handleExpand}>
              Text 1
            </ExpanderList.Expander>
          </ExpanderList>
        );

        const expander = screen.getByText('Title 1');

        await userEvent.click(expander);
        expect(handleExpand).toHaveBeenCalledTimes(2);
        expect(handleExpand).toHaveBeenNthCalledWith(1, true);
        expect(handleExpand).toHaveBeenNthCalledWith(2, false);
      });
    });
  });
  describe('Når det er to ExpanderList i samme dokument', (): void => {
    test('Så har expanderne forskjellige IDer', (): void => {
      const { container } = render(
        <>
          <ExpanderList>
            <ExpanderList.Expander title="ExpanderList 1">Text 1</ExpanderList.Expander>
          </ExpanderList>
          <ExpanderList>
            <ExpanderList.Expander title="ExpanderList 2">Text 2</ExpanderList.Expander>
          </ExpanderList>
        </>
      );

      const buttonId1 = screen.getByRole('button', { name: 'ExpanderList 1' }).id;
      const buttonId2 = screen.getByRole('button', { name: 'ExpanderList 2' }).id;

      expect(buttonId1).not.toEqual(buttonId2);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når title er JSX', (): void => {
    test('Så fungerer expanderen', (): void => {
      const { container } = render(
        <ExpanderList>
          <ExpanderList.Expander
            titleHtmlMarkup="span"
            title={
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Title appearance="title3">ExpanderList 1</Title>
                <Icon svgIcon={Avatar} />
              </span>
            }
          >
            {'Hei'}
          </ExpanderList.Expander>
          <ExpanderList.Expander title={<Title appearance="title3">ExpanderList 2</Title>}>{'Hei'}</ExpanderList.Expander>
        </ExpanderList>
      );

      const buttonId1 = screen.getByRole('button', { name: 'ExpanderList 1' }).id;
      const buttonId2 = screen.getByRole('button', { name: 'ExpanderList 2' }).id;

      expect(buttonId1).not.toEqual(buttonId2);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når renderChildrenWhenClosed ikke er satt', (): void => {
    test('Så er children ikke rendret', (): void => {
      render(
        <ExpanderList>
          <ExpanderList.Expander title={'Test'}>
            <span data-testid="test">{'Test'}</span>
          </ExpanderList.Expander>
        </ExpanderList>
      );

      const child = screen.queryByTestId('test');
      expect(child).not.toBeInTheDocument();
    });
  });
  describe('Når renderChildrenWhenClosed er true', (): void => {
    test('Så er children rendret', (): void => {
      render(
        <ExpanderList renderChildrenWhenClosed={true}>
          <ExpanderList.Expander title={'Test'}>
            <span data-testid="test">{'Test'}</span>
          </ExpanderList.Expander>
        </ExpanderList>
      );

      const child = screen.getByTestId('test');
      expect(child).toBeInTheDocument();
    });
  });
  describe('Når renderChildrenWhenClosed er false', (): void => {
    test('Så er children ikke rendret', (): void => {
      render(
        <ExpanderList renderChildrenWhenClosed={false}>
          <ExpanderList.Expander title={'Test'}>
            <span data-testid="test">{'Test'}</span>
          </ExpanderList.Expander>
        </ExpanderList>
      );

      const child = screen.queryByTestId('test');
      expect(child).not.toBeInTheDocument();
    });
  });
});
