import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DrawerNavigation from './DrawerNavigation';
import { useDrawerNavigation } from './useDrawerNavigation';
import Button from '../../Button';

type TestViewId = 'home' | 'second' | 'third';

const NavigateButtons = (): React.JSX.Element => {
  const { goToView, goBack, goToViewAndClearStack } = useDrawerNavigation<TestViewId>();
  return (
    <div>
      <Button onClick={() => goToView('second')}>{'Gå til andre'}</Button>
      <Button onClick={() => goToView('third')}>{'Gå til tredje'}</Button>
      <Button onClick={() => goBack()}>{'Tilbake'}</Button>
      <Button onClick={() => goToViewAndClearStack('home')}>{'Tilbake til start'}</Button>
    </div>
  );
};

const renderDrawerNavigation = ({
  onCloseButton = vi.fn(),
  footer,
  viewFooter,
  viewOnCloseButton,
}: {
  onCloseButton?: () => void;
  footer?: React.ReactNode;
  viewFooter?: React.ReactNode;
  viewOnCloseButton?: () => void;
} = {}): ReturnType<typeof render> => {
  return render(
    <DrawerNavigation isOpen={true} onCloseButton={onCloseButton} footer={footer}>
      <DrawerNavigation.View<TestViewId> id="home" title="Hjem" home>
        <NavigateButtons />
        <p>{'Hjemmeinnhold'}</p>
      </DrawerNavigation.View>
      <DrawerNavigation.View<TestViewId> id="second" title="Andre side" onCloseButton={viewOnCloseButton} footer={viewFooter}>
        <NavigateButtons />
        <p>{'Andre innhold'}</p>
      </DrawerNavigation.View>
      <DrawerNavigation.View<TestViewId> id="third" title="Tredje side">
        <NavigateButtons />
        <p>{'Tredje innhold'}</p>
      </DrawerNavigation.View>
    </DrawerNavigation>
  );
};

describe('Gitt at DrawerNavigation skal vises', (): void => {
  describe('Når DrawerNavigation åpnes', (): void => {
    test('Så vises home-viewet som standard', (): void => {
      renderDrawerNavigation();

      expect(screen.getByText('Hjemmeinnhold')).toBeVisible();
      expect(screen.getByText('Hjem')).toBeVisible();
    });

    test('Så vises ikke innhold fra andre views', (): void => {
      renderDrawerNavigation();

      expect(screen.queryByText('Andre innhold')).not.toBeInTheDocument();
      expect(screen.queryByText('Tredje innhold')).not.toBeInTheDocument();
    });
  });
});

describe('Gitt at goToView brukes for navigasjon', (): void => {
  describe('Når man navigerer til et annet view', (): void => {
    test('Så vises det nye viewet med riktig tittel og innhold', async (): Promise<void> => {
      renderDrawerNavigation();

      const navigateButton = screen.getByRole('button', { name: /Gå til andre/i });
      await userEvent.click(navigateButton);

      expect(screen.getByText('Andre innhold')).toBeVisible();
      expect(screen.getByText('Andre side')).toBeVisible();
      expect(screen.queryByText('Hjemmeinnhold')).not.toBeInTheDocument();
    });
  });
});

describe('Gitt at goBack brukes for navigasjon', (): void => {
  describe('Når man navigerer tilbake', (): void => {
    test('Så vises forrige view', async (): Promise<void> => {
      renderDrawerNavigation();

      await userEvent.click(screen.getByRole('button', { name: /Gå til andre/i }));
      expect(screen.getByText('Andre innhold')).toBeVisible();

      await userEvent.click(screen.getByRole('button', { name: /Tilbake$/i }));
      expect(screen.getByText('Hjemmeinnhold')).toBeVisible();
    });
  });

  describe('Når man er på home-viewet og kaller goBack', (): void => {
    test('Så forblir man på home-viewet', async (): Promise<void> => {
      renderDrawerNavigation();

      await userEvent.click(screen.getByRole('button', { name: /Tilbake$/i }));
      expect(screen.getByText('Hjemmeinnhold')).toBeVisible();
    });
  });
});

describe('Gitt at goToViewAndClearStack brukes for navigasjon', (): void => {
  describe('Når man navigerer gjennom flere views og kaller goToViewAndClearStack tilbake til home', (): void => {
    test('Så vises home-viewet og view-stacken er tilbakestilt', async (): Promise<void> => {
      renderDrawerNavigation();

      await userEvent.click(screen.getByRole('button', { name: /Gå til andre/i }));
      await userEvent.click(screen.getByRole('button', { name: /Gå til tredje/i }));
      expect(screen.getByText('Tredje innhold')).toBeVisible();

      await userEvent.click(screen.getByRole('button', { name: /Tilbake til start/i }));
      expect(screen.getByText('Hjemmeinnhold')).toBeVisible();

      // goBack should stay on home since stack is cleared
      await userEvent.click(screen.getByRole('button', { name: /Tilbake$/i }));
      expect(screen.getByText('Hjemmeinnhold')).toBeVisible();
    });
  });
});

describe('Gitt at DrawerNavigation lukkes og åpnes igjen', (): void => {
  describe('Når draweren lukkes og åpnes igjen', (): void => {
    test('Så tilbakestilles viewet til home', async (): Promise<void> => {
      const { rerender } = render(
        <DrawerNavigation isOpen={true} onCloseButton={vi.fn()}>
          <DrawerNavigation.View<TestViewId> id="home" title="Hjem" home>
            <NavigateButtons />
            <p>{'Hjemmeinnhold'}</p>
          </DrawerNavigation.View>
          <DrawerNavigation.View<TestViewId> id="second" title="Andre side">
            <p>{'Andre innhold'}</p>
          </DrawerNavigation.View>
        </DrawerNavigation>
      );

      await userEvent.click(screen.getByRole('button', { name: /Gå til andre/i }));
      expect(screen.getByText('Andre innhold')).toBeVisible();

      rerender(
        <DrawerNavigation isOpen={false} onCloseButton={vi.fn()}>
          <DrawerNavigation.View<TestViewId> id="home" title="Hjem" home>
            <NavigateButtons />
            <p>{'Hjemmeinnhold'}</p>
          </DrawerNavigation.View>
          <DrawerNavigation.View<TestViewId> id="second" title="Andre side">
            <p>{'Andre innhold'}</p>
          </DrawerNavigation.View>
        </DrawerNavigation>
      );

      rerender(
        <DrawerNavigation isOpen={true} onCloseButton={vi.fn()}>
          <DrawerNavigation.View<TestViewId> id="home" title="Hjem" home>
            <NavigateButtons />
            <p>{'Hjemmeinnhold'}</p>
          </DrawerNavigation.View>
          <DrawerNavigation.View<TestViewId> id="second" title="Andre side">
            <p>{'Andre innhold'}</p>
          </DrawerNavigation.View>
        </DrawerNavigation>
      );

      expect(screen.getByText('Hjemmeinnhold')).toBeVisible();
    });
  });
});

describe('Gitt at View har egen onCloseButton', (): void => {
  describe('Når viewet med egen onCloseButton er aktivt', (): void => {
    test('Så brukes viewets onCloseButton i stedet for foreldrens', async (): Promise<void> => {
      const parentClose = vi.fn();
      const viewClose = vi.fn();

      renderDrawerNavigation({ onCloseButton: parentClose, viewOnCloseButton: viewClose });

      await userEvent.click(screen.getByRole('button', { name: /Gå til andre/i }));

      const closeButton = screen.getByRole('button', { name: /lukk/i });
      await userEvent.click(closeButton);

      expect(viewClose).toHaveBeenCalledTimes(1);
      expect(parentClose).not.toHaveBeenCalled();
    });
  });
});

describe('Gitt at View har egen footer', (): void => {
  describe('Når viewet med egen footer er aktivt', (): void => {
    test('Så vises viewets footer i stedet for foreldrens', async (): Promise<void> => {
      renderDrawerNavigation({
        footer: <span>{'Standard footer'}</span>,
        viewFooter: <span>{'View footer'}</span>,
      });

      expect(screen.getByText('Standard footer')).toBeVisible();

      await userEvent.click(screen.getByRole('button', { name: /Gå til andre/i }));

      expect(screen.getByText('View footer')).toBeVisible();
      expect(screen.queryByText('Standard footer')).not.toBeInTheDocument();
    });
  });
});

describe('Gitt at DrawerNavigation har children som ikke er Views', (): void => {
  describe('Når det finnes non-View children (f.eks. Modal)', (): void => {
    test('Så rendres de utenfor Drawer', (): void => {
      render(
        <DrawerNavigation isOpen={true} onCloseButton={vi.fn()}>
          <DrawerNavigation.View<TestViewId> id="home" title="Hjem" home>
            <p>{'Hjemmeinnhold'}</p>
          </DrawerNavigation.View>
          <div data-testid="extra-child">{'Ekstra innhold'}</div>
        </DrawerNavigation>
      );

      expect(screen.getByTestId('extra-child')).toBeVisible();
      expect(screen.getByText('Hjemmeinnhold')).toBeVisible();
    });
  });
});

describe('Gitt at useDrawerNavigation brukes utenfor DrawerNavigation', (): void => {
  describe('Når hooken brukes uten provider', (): void => {
    test('Så kastes en feilmelding', (): void => {
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

      const BadComponent = (): React.JSX.Element => {
        const { goToView } = useDrawerNavigation();
        return <button onClick={() => goToView('test')}>{'Test'}</button>;
      };

      expect(() => render(<BadComponent />)).toThrow('useDrawerNavigation must be used inside a <DrawerNavigation> component');

      spy.mockRestore();
    });
  });
});

describe('Gitt at navigasjon til ugyldig view forsøkes', (): void => {
  describe('Når goToView kalles med en id som ikke finnes', (): void => {
    test('Så forblir nåværende view aktivt', async (): Promise<void> => {
      const InvalidNavButton = (): React.JSX.Element => {
        const { goToView } = useDrawerNavigation();
        return <Button onClick={() => goToView('finnes-ikke')}>{'Gå til ugyldig'}</Button>;
      };

      render(
        <DrawerNavigation isOpen={true} onCloseButton={vi.fn()}>
          <DrawerNavigation.View id="home" title="Hjem" home>
            <InvalidNavButton />
            <p>{'Hjemmeinnhold'}</p>
          </DrawerNavigation.View>
        </DrawerNavigation>
      );

      await userEvent.click(screen.getByRole('button', { name: /Gå til ugyldig/i }));
      expect(screen.getByText('Hjemmeinnhold')).toBeVisible();
    });
  });
});
