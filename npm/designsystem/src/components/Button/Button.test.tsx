import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';
import Icon from '../Icon';
import Check from '../Icons/Check';
import Dog from '../Icons/Dog';

describe('Gitt at button skal vises', (): void => {
  describe('Når button rendres', (): void => {
    test('Så vises button', (): void => {
      const { container } = render(<Button>{'Button'}</Button>);
      expect(container).toMatchSnapshot();
    });

    test('Så rendres button uten aria props', (): void => {
      render(
        <div>
          <Button testId={'test01'}>{'Button'}</Button>
        </div>
      );

      const testFill = screen.getByTestId('test01');

      expect(testFill).not.toHaveAttribute('aria-label');
      expect(testFill).not.toHaveAttribute('aria-expanded');
    });

    test('Så er text klasse på', (): void => {
      render(<Button testId="button">{'Button text'}</Button>);

      // eslint-disable-next-line testing-library/no-node-access
      const testButtonText = screen.getByText('Button text').parentElement;
      expect(testButtonText?.className).toBe('button__text');
    });
  });

  describe('Når button rendres med id', (): void => {
    test('Så blir id satt', (): void => {
      render(
        <Button id="id123" testId={'test01'}>
          {'Button'}
        </Button>
      );
      const testFill = screen.getByTestId('test01');

      expect(testFill.id).toBe('id123');
    });
  });

  describe('Når button rendres med ikoner', (): void => {
    test('Så vises ikonene', (): void => {
      const { container } = render(
        <Button>
          <Icon svgIcon={Check} />
          {'Button'}
          <Icon svgIcon={Check} />
        </Button>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når button rendres kun med ikon', (): void => {
    test('Så inneholder knappen bare ikon, og ariaLabel kan leses', (): void => {
      const { container } = render(
        <Button ariaLabel="Check me">
          <Icon svgIcon={Check} />
        </Button>
      );

      const button = screen.getByText('Check me');

      expect(button).toBeVisible();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når button rendres med to ikoner', (): void => {
    test('Så skal button ha to ikoner ', (): void => {
      render(
        <Button arrow="icon" testId="test">
          <Icon svgIcon={Dog} />
          {'Button'}
        </Button>
      );

      const text = screen.getByText('Button');
      const button = screen.getByTestId('test');

      expect(text).toBeVisible();
      // eslint-disable-next-line testing-library/no-node-access
      expect(button.firstElementChild?.className).toBe('button button--normal button--left-icon button--both-icons button--arrow');
    });
  });

  describe('Når button rendres med ellipsis på', (): void => {
    test('Så brukes ellipsis på overflødig tekst', (): void => {
      render(
        <Button ellipsis={true} testId={'test01'}>
          {'Button text'}
        </Button>
      );

      const button = screen.getByTestId('test01');
      // eslint-disable-next-line testing-library/no-node-access
      const testButtonText = screen.getByText('Button text').parentElement;
      expect(button.className).toBe('button-wrapper button-wrapper--fluid');
      expect(testButtonText?.className).toBe('button__text button__text--ellipsis');
    });
  });

  describe('Når button rendres med fluid', (): void => {
    test('Så settes riktige klasse på wrapper', (): void => {
      render(
        <Button testId={'test01'} fluid={true}>
          {'Button text'}
          <Icon svgIcon={Check} />
        </Button>
      );

      const buttonWrapper = screen.getByTestId('test01');
      expect(buttonWrapper.className).toBe('button-wrapper button-wrapper--fluid');
    });
  });

  describe('Når button rendres med fluid og textPosition som centered', (): void => {
    test('Så settes riktige klasse på text', (): void => {
      render(
        <Button testId={'test01'} fluid={true} textPosition={'centered'}>
          {'Button text'}
          <Icon svgIcon={Check} />
        </Button>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const buttonText = screen.getByText('Button text').parentElement;
      expect(buttonText?.className).toBe('button__text button__text--centered');
    });
  });

  describe('Når button rendres uten fluid og textPosition som centered', (): void => {
    test('Så settes riktige klasse på text', (): void => {
      render(
        <Button testId={'test01'} textPosition={'centered'}>
          {'Button text'}
          <Icon svgIcon={Check} />
        </Button>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const buttonText = screen.getByText('Button text').parentElement;
      expect(buttonText?.className).toBe('button__text');
    });
  });

  describe('Når button rendres som button med onBlur-handler', () => {
    test('Så kalles onBlur-handleren når man klikker på knappen', async () => {
      const handleBlur = vi.fn();

      render(
        <Button onBlur={handleBlur} htmlMarkup="button">
          {'Lenketekst'}
        </Button>
      );

      const link = screen.getByRole('button', { name: 'Lenketekst' });

      await userEvent.click(link);
      await userEvent.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når button rendres som button med onClick-handler', () => {
    test('Så kalles onClick-handleren når man klikker på knappen', async () => {
      const handleClick = vi.fn();

      render(
        <Button onClick={handleClick} htmlMarkup="button">
          {'Lenketekst'}
        </Button>
      );

      const link = screen.getByRole('button', { name: 'Lenketekst' });

      await userEvent.click(link);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når button rendres som lenke med onClick-handler', () => {
    test('Så kalles onClick-handleren når man klikker på knappen', async () => {
      const handleClick = vi.fn();

      render(
        <Button onClick={handleClick} htmlMarkup="a" href="#">
          {'Lenketekst'}
        </Button>
      );

      const link = screen.getByRole('link', { name: 'Lenketekst' });

      await userEvent.click(link);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når button rendres med disabled', (): void => {
    test('Så kan ikke knappen trykkes på', (): void => {
      const handleClick = vi.fn();

      render(
        <Button testId={'test01'} onClick={handleClick} disabled={true}>
          {'Button'}
        </Button>
      );

      const testButton = screen.getByTestId('test01');

      fireEvent.click(testButton);

      expect(handleClick).toHaveBeenCalledTimes(0);
      expect(testButton).toBeDisabled();
    });
  });

  describe('Når button rendres med concept', (): void => {
    test('Så er background-color riktig', (): void => {
      render(
        <div>
          <Button testId={'test01'} concept={'normal'}>
            {'Button'}
          </Button>
          <Button testId={'test02'} concept={'destructive'}>
            {'Button'}
          </Button>
        </div>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const testButton1 = screen.getByTestId('test01').children[0];
      // eslint-disable-next-line testing-library/no-node-access
      const testButton2 = screen.getByTestId('test02').children[0];

      expect(testButton1.className).toBe('button button--normal');
      expect(testButton2.className).toBe('button button--destructive button--normal');
    });
  });

  describe('Når button rendres med onColor ondark', (): void => {
    test('Så er farger riktig', (): void => {
      render(
        <Button testId={'test01'} onColor={'ondark'}>
          {'Button'}
        </Button>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const testButton = screen.getByTestId('test01').children[0];

      expect(testButton.className).toBe('button button--normal button--on-dark');
    });
  });

  describe('Når button rendres med size large', (): void => {
    test('Så er ikon riktig størrelse', (): void => {
      render(
        <Button size={'large'}>
          <Icon testId={'test01'} svgIcon={Check} />
          {'Button'}
        </Button>
      );

      const testButtonIcon = screen.getByTestId('test01');
      const height = getComputedStyle(testButtonIcon).getPropertyValue('min-height');
      const width = getComputedStyle(testButtonIcon).getPropertyValue('min-width');

      expect(height).toBe('64px');
      expect(width).toBe('64px');
    });
  });

  describe('Når button rendres med varianter', (): void => {
    test('Så rendres innholdet riktig', (): void => {
      render(
        <div>
          <Button testId={'test01'} variant={'fill'}>
            {'Button'}
          </Button>
          <Button testId={'test02'} variant={'outline'}>
            {'Button'}
          </Button>
          <Button testId={'test03'} variant={'borderless'}>
            {'Button'}
          </Button>
        </div>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const testFill = screen.getByTestId('test01').children[0];

      expect(testFill.className).toBe('button button--normal');

      // eslint-disable-next-line testing-library/no-node-access
      const testOutline = screen.getByTestId('test02').children[0];

      expect(testOutline.className).toBe('button button--normal button--outline');

      // eslint-disable-next-line testing-library/no-node-access
      const testBorderless = screen.getByTestId('test03').children[0];

      expect(testBorderless.className).toBe('button button--normal button--borderless');
    });
  });
  describe('Når button rendres med borderless variant', (): void => {
    test('Så er ikke large size tilgjengelig', (): void => {
      render(
        <div>
          <Button testId={'test01'} variant={'borderless'} size={'large'}>
            {'Button'}
          </Button>
        </div>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const testFill = screen.getByTestId('test01').children[0];

      expect(testFill.className).toBe('button button--normal button--borderless');
    });
    test('Så er ikke arrow som icon tilgjengelig', (): void => {
      render(
        <div>
          <Button testId={'test01'} variant={'borderless'} arrow="icon">
            {'Button'}
          </Button>
        </div>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const testFill = screen.getByTestId('test01').children[0];

      expect(testFill.className).toBe('button button--normal button--borderless');
    });
  });
  describe('Når button rendres med aria props', (): void => {
    test('Så rendres innholdet riktig', (): void => {
      render(
        <div>
          <Button testId={'test01'} aria-label={'aria-label-test'} aria-expanded={true}>
            {'Button'}
          </Button>
        </div>
      );

      const testFill = screen.getByTestId('test01');

      expect(testFill).toHaveAttribute('aria-label', 'aria-label-test');
      expect(testFill).toHaveAttribute('aria-expanded', 'true');
    });
  });
  describe('Når button rendres som anchor med target=_blank', (): void => {
    test('Så skal den ha riktig rel-attributt', (): void => {
      render(
        <div>
          <Button testId={'tester-rel'} htmlMarkup="a" target="_blank">
            {'Button'}
          </Button>
        </div>
      );

      const testFill = screen.getByTestId('tester-rel');

      expect(testFill).toHaveAttribute('rel', 'noopener noreferrer');
      expect(testFill).toHaveAttribute('target', '_blank');
    });
  });
  describe('Gitt at Button vises', (): void => {
    test('Så har den riktig analyticsid', (): void => {
      render(<Button testId={'knapp'}>{'Tekst'}</Button>);

      const button = screen.getByTestId('knapp');

      expect(button).toHaveAttribute('data-analyticsid', 'button');
    });
  });
  describe('Når Button ikke har noen type', (): void => {
    test('Så er den av typen button', (): void => {
      render(<Button testId={'knapp'}>{'Tekst'}</Button>);

      const button = screen.getByTestId('knapp');

      expect(button).toHaveAttribute('type', 'button');
    });
  });
  describe('Når Button har type submit', (): void => {
    test('Så er den av typen submit', (): void => {
      render(
        <Button testId={'knapp'} type="submit">
          {'Tekst'}
        </Button>
      );

      const button = screen.getByTestId('knapp');

      expect(button).toHaveAttribute('type', 'submit');
    });
  });
  describe('Når Button har type arrow er satt til accessibility-character', (): void => {
    test('Så får den → character lagt til', (): void => {
      render(
        <Button testId={'knapp'} arrow="accessibility-character" variant="borderless">
          {'Tekst'}
        </Button>
      );

      const buttonArrow = screen.getByText('→');

      expect(buttonArrow).toBeInTheDocument();
    });
    test('Så er → skjult for skjermlesere', (): void => {
      render(
        <Button testId={'knapp'} arrow="accessibility-character" variant="borderless">
          {'Tekst'}
        </Button>
      );

      const buttonArrow = screen.getByRole('button', { name: 'Tekst' });

      expect(buttonArrow).toBeVisible();
    });
  });
  describe('Når Button har type arrow er satt til accessibility-character og button props som ikke støtter det', (): void => {
    test('Så får den ikke → character lagt til', (): void => {
      render(
        <>
          <Button testId={'knapp'} arrow="accessibility-character" variant="outline">
            {'Tekst'}
          </Button>
          <Button testId={'knapp'} arrow="accessibility-character">
            {'Tekst'}
          </Button>
          <Button testId={'knapp'} arrow="accessibility-character" fluid>
            {'Tekst'}
          </Button>
          <Button testId={'knapp'} arrow="accessibility-character">
            <Icon svgIcon={Check} />
            {'Tekst'}
          </Button>
        </>
      );

      const buttonArrow = screen.queryByText('→');

      expect(buttonArrow).not.toBeInTheDocument();
    });
  });
});
