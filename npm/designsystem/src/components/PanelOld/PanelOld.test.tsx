import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PanelOld from './PanelOld';
import * as uuidUtils from '../../utils/uuid';
import Avatar from '../Avatar';
import { Icon, IconSize } from '../Icon';
import Calendar from '../Icons/Calendar';

describe('Gitt at PanelOld skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<PanelOld testId="bare-tester" />);
      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
      expect(component).toHaveAttribute('data-analyticsid', 'panel');
    });
  });

  describe('Når panelet har children', (): void => {
    describe('Når panelet har title', (): void => {
      test('Så er tittelen synlig', (): void => {
        render(
          <PanelOld title="Medisinsk fødselsregister" buttonText="Vis detaljer">
            <p>{'Mer tekst'}</p>
          </PanelOld>
        );
        const title = screen.getByRole('heading', { name: 'Medisinsk fødselsregister' });
        expect(title).toBeVisible();
      });
      test('Så har knappen som brukes for å ekspandere et unikt navn', (): void => {
        vi.spyOn(uuidUtils, 'uuid').mockReturnValueOnce('a').mockReturnValueOnce('b');

        render(
          <PanelOld title="Medisinsk fødselsregister" buttonText="Vis detaljer">
            <p>{'Mer tekst'}</p>
          </PanelOld>
        );
        const button = screen.getByRole('button', { name: 'Vis detaljer Medisinsk fødselsregister' });
        expect(button).toBeVisible();
      });
    });
    describe('Når panelet ikke har title', (): void => {
      test('Så har knappen som brukes for å ekspandere riktig navn', (): void => {
        vi.spyOn(uuidUtils, 'uuid').mockReturnValueOnce('a').mockReturnValueOnce('b');

        render(
          <PanelOld buttonText="Vis detaljer">
            <p>{'Mer tekst'}</p>
          </PanelOld>
        );
        const button = screen.getByRole('button', { name: 'Vis detaljer' });
        expect(button).toBeVisible();
      });
    });
  });

  describe('Når panelet har url', (): void => {
    describe('Når panelet har title', (): void => {
      test('Så har linken et unikt navn', (): void => {
        vi.spyOn(uuidUtils, 'uuid').mockReturnValueOnce('a').mockReturnValueOnce('b');

        render(<PanelOld title="Medisinsk fødselsregister" buttonText="Åpne" url={'https://www.helsenorge.no'} />);

        const link = screen.getByRole('link', { name: 'Åpne Medisinsk fødselsregister' });
        expect(link).toBeVisible();
      });
    });
  });

  describe('Når buttonAriaLabelledById-prop er satt', (): void => {
    test('Så har knappen som brukes for å ekspandere riktig navn', (): void => {
      render(
        <PanelOld buttonText="Vis detaljer" buttonAriaLabelledById="egen-id" contentA={<h2 id="egen-id">{'Egendefinert tittel'}</h2>}>
          <p>{'Mer tekst'}</p>
        </PanelOld>
      );
      const button = screen.getByRole('button', { name: 'Vis detaljer Egendefinert tittel' });
      expect(button).toBeVisible();
    });
  });

  describe('Når buttonAriaLabel-prop er satt', (): void => {
    test('Så har knappen som brukes for å ekspandere riktig navn', (): void => {
      render(
        <PanelOld buttonText="Vis detaljer" buttonAriaLabel="Helt egen tekst på knappen">
          <p>{'Mer tekst'}</p>
        </PanelOld>
      );
      const button = screen.getByRole('button', { name: 'Helt egen tekst på knappen' });
      expect(button).toBeVisible();
    });
  });

  describe('Når title og  buttonAriaLabel-prop er satt', (): void => {
    test('Så har knappen som brukes for å ekspandere riktig navn', (): void => {
      render(
        <PanelOld title="Medisinsk fødselsregister" buttonText="Vis detaljer" buttonAriaLabel="Helt egen tekst på knappen">
          <p>{'Mer tekst'}</p>
        </PanelOld>
      );
      const button = screen.getByRole('button', { name: 'Helt egen tekst på knappen' });
      expect(button).toBeVisible();
    });
  });

  describe('Når titleHtmlMarkup-prop er satt', (): void => {
    test('Så er tittel satt til ønsket overskriftsnivå', (): void => {
      render(<PanelOld title="Tittel" titleHtmlMarkup="h3" />);
      const title = screen.getByRole('heading', { name: 'Tittel' });
      expect(title).toBeVisible();
      expect(title.tagName).toEqual('H3');
    });
  });

  describe('Når icon er satt', (): void => {
    test('Så skal komponenten vise ikon på venstre side', (): void => {
      render(<PanelOld testId="bare-tester" icon={<Icon testId="icon-testid" svgIcon={Calendar} size={IconSize.XSmall} />} />);
      const icon = screen.getByTestId('icon-testid');
      expect(icon).toBeVisible();
      // eslint-disable-next-line testing-library/no-node-access
      expect(icon.parentElement).toHaveClass('panel__icon');
    });
  });

  describe('Når Avatar er satt', (): void => {
    test('Så skal komponenten vise Avatar', (): void => {
      render(<PanelOld icon={<Avatar testId="avatar-test">{'Anne Brun'}</Avatar>} />);
      const avatar = screen.getByTestId('avatar-test');
      expect(avatar).toBeVisible();
      // eslint-disable-next-line testing-library/no-node-access
      expect(avatar.parentElement).toHaveClass('panel__icon');
    });
  });

  describe('Gitt at status ikke er satt', (): void => {
    test('Så skal PanelOldvises som default normal', (): void => {
      render(<PanelOld testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(panel.firstChild).toHaveClass('panel panel--fill');
    });
  });

  describe('Gitt at status er new og statusMessage er satt', (): void => {
    test('Så vises panel i new visning og Badge vises med statusMessage', (): void => {
      render(<PanelOld testId="panel-test-status" status="new" statusMessage="1 ny" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      const title = screen.getByText('Dette er en tittel');
      const badge = screen.getByTestId('badge-status');

      // eslint-disable-next-line testing-library/no-node-access
      expect(panel.firstChild).toHaveClass('panel panel--fill panel--new panel--status');
      expect(title).toHaveClass('title title--title3 title-container__title title-container__title--badge');
      // eslint-disable-next-line testing-library/no-node-access
      expect(badge.parentElement).toHaveClass('panel__badge');
      expect(badge.innerHTML).toEqual('1 ny');
    });
  });

  describe('Gitt at status er draft og statusMessage er satt', (): void => {
    test('Så vises panel i draft visning og statusMessage vises med ikon', (): void => {
      render(<PanelOld testId="panel-test-status" status="draft" statusMessage="Dette en beskjed" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(panel.firstChild).toHaveClass('panel panel--fill panel--draft panel--status');
      const status = screen.getByTestId('display-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(status.children[1].innerHTML).toEqual('Dette en beskjed');

      //expect draft icon
      expect(status).toMatchSnapshot();
    });
  });

  describe('Gitt at status er error og statusMessage er satt', (): void => {
    test('Så vises panel i error visning og statusMessage vises med ikon', (): void => {
      render(<PanelOld testId="panel-test-status" status="error" statusMessage="Dette en error beskjed" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(panel.firstChild).toHaveClass('panel panel--fill panel--error panel--status');
      const status = screen.getByTestId('display-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(status.children[1].innerHTML).toEqual('Dette en error beskjed');

      //expect error icon
      expect(status).toMatchSnapshot();
    });
  });

  describe('Gitt at panelet har default variant', (): void => {
    test('Så skal panelet vise en default variant', (): void => {
      render(<PanelOld testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(panel.firstChild).toHaveClass('panel panel--fill');
    });
  });

  describe('Gitt at panelet har variant line', (): void => {
    test('Så skal panelet vise variant line', (): void => {
      render(<PanelOld variant="line" testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(panel.firstChild).toHaveClass('panel panel--line');
    });
  });

  describe('Gitt at panelet har variant stroke', (): void => {
    test('Så skal panelet vise variant stroke', (): void => {
      render(<PanelOld variant="stroke" testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(panel.firstChild).toHaveClass('panel panel--stroke');
    });
  });

  describe('Gitt at panelet har variant white', (): void => {
    test('Så skal panelet vise variant white', (): void => {
      render(<PanelOld variant="white" testId="panel-test-status" title="Dette er en tittel" />);
      const panel = screen.getByTestId('panel-test-status');
      // eslint-disable-next-line testing-library/no-node-access
      expect(panel.firstChild).toHaveClass('panel panel--white');
    });
  });

  describe('Gitt at panelet har en url knapp', (): void => {
    test('Så skal knappen rendres som anchor-tag', (): void => {
      render(<PanelOld url="/#?test" title="Dette er en tittel" />);
      const btnDetails = screen.getByTestId('url');
      expect(btnDetails).toHaveAttribute('href', '/#?test');
      expect(btnDetails).toHaveAttribute('target', '_self');
    });
  });

  describe('Gitt at panelet har en expand knapp, og gitt at knappen trykkes', (): void => {
    test('Så vises detalje-området', async (): Promise<void> => {
      render(
        <PanelOld title="Dette er en tittel" renderChildrenWhenClosed>
          <div>{'Details'}</div>
        </PanelOld>
      );

      const btnDetails = screen.getByTestId('expand');

      expect(btnDetails).toBeVisible();

      const panelDetails = screen.getByTestId('panel-details');

      await userEvent.click(btnDetails);
      expect(screen.getByText('Details')).toBeVisible();
      expect(panelDetails).toHaveClass('panel-details--open');

      await userEvent.click(btnDetails);
      expect(panelDetails).not.toHaveClass('panel-details--open');
    });
  });

  describe('Gitt at panelet skal vises som ekspandert', (): void => {
    test('Så vises innholdet ekspandert fra starten av', (): void => {
      render(
        <PanelOld title={'Dette er en tittel'} expanded>
          <h1>{'Innhold i panel'}</h1>
        </PanelOld>
      );

      const button = screen.getByTestId('expand');
      expect(button).toHaveAttribute('aria-expanded', 'true');

      const content = screen.getByRole('heading', { name: 'Innhold i panel' });
      expect(content).toBeInTheDocument();
    });
    test('Så er det bare én knapp for skjul detaljer', (): void => {
      render(
        <PanelOld title={'Dette er en tittel'} expanded>
          <h1>{'Innhold i panel'}</h1>
        </PanelOld>
      );

      const button = screen.getByTestId('expand');
      expect(button).toBeVisible();
    });
  });

  describe('Gitt at panelet har onExpand-callback', (): void => {
    describe('Når man klikker på panelet to ganger', (): void => {
      test('Så kalles callback først med true og så med false', async (): Promise<void> => {
        const handleExpand = vi.fn();
        render(
          <PanelOld title={'Dette er en tittel'} onExpand={handleExpand}>
            <h1>{'Innhold i panel'}</h1>
          </PanelOld>
        );

        const button = screen.getAllByTestId('expand')[0];

        await userEvent.click(button);
        await userEvent.click(button);

        expect(handleExpand).toHaveBeenCalledTimes(2);
        expect(handleExpand).toHaveBeenNthCalledWith(1, true);
        expect(handleExpand).toHaveBeenNthCalledWith(2, false);
      });
    });
  });
  describe('Gitt at panelet har onExpand-callback og expanded satt til true', (): void => {
    describe('Når man klikker på panelet én gang', (): void => {
      test('Så kalles callback først med true og så med false', async (): Promise<void> => {
        const handleExpand = vi.fn();
        render(
          <PanelOld title={'Dette er en tittel'} onExpand={handleExpand} expanded>
            <h1>{'Innhold i panel'}</h1>
          </PanelOld>
        );

        const button = screen.getAllByTestId('expand')[0];

        await userEvent.click(button);

        expect(handleExpand).toHaveBeenCalledTimes(2);
        expect(handleExpand).toHaveBeenNthCalledWith(1, true);
        expect(handleExpand).toHaveBeenNthCalledWith(2, false);
      });
    });
  });

  describe('Gitt at containerAsButton er true', (): void => {
    describe('Når man klikker på knappen for å vise detaljer', (): void => {
      test('Så vises detaljer-området', async (): Promise<void> => {
        render(
          <PanelOld testId="panel-test" containerAsButton title="Dette er en tittel" renderChildrenWhenClosed>
            <div>{'Details'}</div>
          </PanelOld>
        );

        const button = screen.getByTestId('expand');

        expect(button).toBeVisible();
        expect(button).toHaveAttribute('aria-expanded', 'false');

        await userEvent.click(button);

        expect(screen.getByText('Details')).toBeVisible();
      });
    });
  });

  describe('Gitt at panelet skal vise tid og dato', (): void => {
    test('Så vises tid og dato', (): void => {
      render(
        <PanelOld testId="panel-test" date="dato" time="tid" title="Dette er en tittel" contentA={'Innhold A'} contentB={'Innhold B'}>
          <div>{'Details'}</div>
        </PanelOld>
      );

      expect(screen.getByText('dato')).toBeVisible();
      expect(screen.getByText('tid')).toBeVisible();
    });
  });

  describe('Gitt at panelet skal vise lenke som knapp med onClick', () => {
    test('Så kalles onClick-handler når man klikker på knappen', async () => {
      const onClickMock = vi.fn();
      render(<PanelOld buttonText="Lenke til mer" buttonOnClick={onClickMock} buttonHtmlMarkup="button" />);

      const link = screen.getByRole('button', { name: 'Lenke til mer' });
      await userEvent.click(link);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Gitt at panelet skal vise lenke som a med onClick', () => {
    test('Så kalles onClick-handler når man klikker på lenken', async () => {
      const onClickMock = vi.fn();
      render(<PanelOld buttonText="Lenke til mer" buttonOnClick={onClickMock} buttonHtmlMarkup="a" url="#" />);

      const link = screen.getByRole('link', { name: 'Lenke til mer' });

      expect(link).toHaveAttribute('href', '#');

      await userEvent.click(link);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
  describe('Når renderChildrenWhenClosed ikke er satt', (): void => {
    test('Så er children ikke rendret', (): void => {
      render(
        <PanelOld>
          <span data-testid="test">{'Test'}</span>
        </PanelOld>
      );

      const child = screen.queryByTestId('test');
      expect(child).not.toBeInTheDocument();
    });
  });
  describe('Når renderChildrenWhenClosed er true', (): void => {
    test('Så er children rendret', (): void => {
      render(
        <PanelOld renderChildrenWhenClosed={true}>
          <span data-testid="test">{'Test'}</span>
        </PanelOld>
      );

      const child = screen.getByTestId('test');
      expect(child).toBeInTheDocument();
    });
  });
  describe('Når renderChildrenWhenClosed er false', (): void => {
    test('Så er children ikke rendret', (): void => {
      render(
        <PanelOld renderChildrenWhenClosed={false}>
          <span data-testid="test">{'Test'}</span>
        </PanelOld>
      );

      const child = screen.queryByTestId('test');
      expect(child).not.toBeInTheDocument();
    });
  });
});
