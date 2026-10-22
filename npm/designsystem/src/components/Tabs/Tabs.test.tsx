import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as useIsVisibleModule from '../../hooks/useIsVisible';

import Tabs from './index';

const TestTabs = (props: Partial<React.ComponentProps<typeof Tabs>>): React.JSX.Element => (
  <Tabs {...props}>
    <Tabs.Tab testId="tab1" title="Tab 1">
      {'Content 1'}
    </Tabs.Tab>
    <Tabs.Tab testId="tab2" title="Tab 2">
      {'Content 2'}
    </Tabs.Tab>
    <Tabs.Tab testId="tab3" title="Tab 3">
      {'Content 3'}
    </Tabs.Tab>
  </Tabs>
);

describe('Gitt at Tabs vises', (): void => {
  test('Så er første tab valgt by default', (): void => {
    render(<TestTabs />);

    expect(screen.getByTestId('tab1')).toHaveAttribute('aria-selected', 'true');
  });

  test('Så vises innholdet i første tab by default', (): void => {
    render(<TestTabs />);

    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  test('Når andre tab klikkes, så blir den valgt', async () => {
    const mockScrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
    render(<TestTabs />);

    const tab2 = screen.getByTestId('tab2');
    await userEvent.click(tab2);
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });

  test('Når andre tab klikkes, så vises innholdet i andre tab', async () => {
    const mockScrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
    render(<TestTabs />);

    await userEvent.click(screen.getByTestId('tab2'));
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  test('Når andre tab klikkes, så vises ikke innholdet i første tab', async () => {
    const mockScrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
    render(<TestTabs />);

    await userEvent.click(screen.getByTestId('tab2'));
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
});

describe('Gitt at Tabs observerer første og siste tab', (): void => {
  afterEach((): void => {
    vi.restoreAllMocks();
  });

  test('Så er det første og siste tab-elementet som observeres for synlighet', (): void => {
    const spy = vi.spyOn(useIsVisibleModule, 'useIsVisible');
    render(<TestTabs />);

    const observed = spy.mock.calls.map(call => call[0].current);
    expect(observed).toContain(screen.getByTestId('tab1'));
    expect(observed).toContain(screen.getByTestId('tab3'));
  });

  test('Så vises scroll-knapper når første og siste tab ikke er synlige', (): void => {
    vi.spyOn(useIsVisibleModule, 'useIsVisible').mockReturnValue(false);
    render(<TestTabs />);

    expect(screen.getByRole('button', { name: 'Scroll til venstre' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Scroll til høyre' })).toBeInTheDocument();
  });

  test('Så vises ingen scroll-knapper når alle tabs er synlige', (): void => {
    vi.spyOn(useIsVisibleModule, 'useIsVisible').mockReturnValue(true);
    render(<TestTabs />);

    expect(screen.queryByRole('button', { name: 'Scroll til venstre' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Scroll til høyre' })).not.toBeInTheDocument();
  });
});
