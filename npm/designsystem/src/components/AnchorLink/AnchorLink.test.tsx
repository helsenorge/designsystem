import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnchorLink from './AnchorLink';

describe('Gitt at AnchorLink skal rendres', (): void => {
  describe('Gitt at AnchorLink skal vises vanlig', (): void => {
    test('Så rendres AnchorLink riktig', (): void => {
      const { container } = render(<AnchorLink target={'_self'}>{'AnchorLink'}</AnchorLink>);
      expect(container).toMatchSnapshot();

      const svgElement = screen.queryByRole('img', { hidden: true });
      expect(svgElement).not.toBeTruthy();
    });
  });

  describe('Gitt at AnchorLink skal vises med className og id', (): void => {
    test('Så rendres AnchorLink riktig', (): void => {
      const { container } = render(
        <AnchorLink target={'_self'} id={'custom-id'} className={'custom-classname'}>
          {'AnchorLink'}
        </AnchorLink>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Gitt at AnchorLink skal vises som external', (): void => {
    test('Så rendres AnchorLink riktig', (): void => {
      const { container } = render(<AnchorLink target={'_blank'}>{'AnchorLink external'}</AnchorLink>);
      expect(container).toMatchSnapshot();
    });

    test('Så har AnchorLink riktig rel-attributt', (): void => {
      render(
        <AnchorLink testId="target-test" target={'_blank'}>
          {'AnchorLink external'}
        </AnchorLink>
      );
      const component = screen.getByTestId('target-test');
      expect(component).toBeVisible();
      expect(component).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('Så har AnchorLink ArrowUpRight svg', (): void => {
      render(<AnchorLink target={'_blank'}>{'AnchorLink external'}</AnchorLink>);

      const svgElement = screen.getByRole('presentation', { hidden: true });
      expect(svgElement).toBeTruthy();

      // eslint-disable-next-line testing-library/no-node-access
      const pathElement = svgElement.firstChild;
      expect(pathElement).toHaveAttribute('d', 'M18.76 14.426v1.768h11.83L14.719 32.065l1.251 1.25 15.801-15.801v11.691h1.768V14.426z');
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <AnchorLink testId="bare-tester" href="/">
          {'AnchorLink'}
        </AnchorLink>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });

  describe('Når htmlMarkup er button', () => {
    test('Skal kalles onClick-handler når man klikker på knappen', async () => {
      const onClickMock = vi.fn();
      render(
        <AnchorLink htmlMarkup="button" onClick={onClickMock} href="#">
          {'Lenketekst'}
        </AnchorLink>
      );

      const link = screen.getByRole('button', { name: 'Lenketekst' });
      await userEvent.click(link);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når htmlMarkup er a', () => {
    test('Skal kalles onClick-handler når man klikker på knappen', async () => {
      const onClickMock = vi.fn();
      render(
        <AnchorLink htmlMarkup="a" onClick={onClickMock} href="#">
          {'Lenketekst'}
        </AnchorLink>
      );

      const link = screen.getByRole('link', { name: 'Lenketekst' });
      await userEvent.click(link);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
