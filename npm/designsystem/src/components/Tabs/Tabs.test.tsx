import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import Tabs from './index';

const TestTabs = (): JSX.Element => (
  <Tabs>
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

describe('Given that Tabs are displayed', (): void => {
  test('Then the first tab is selected by default', (): void => {
    render(<TestTabs />);

    expect(screen.getByTestId('tab1')).toHaveAttribute('aria-selected', 'true');
  });

  test('Then the content of the first tab is displayed by default', (): void => {
    render(<TestTabs />);

    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  test('When the second tab is clicked, it becomes selected', async () => {
    const mockScrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
    render(<TestTabs />);

    const tab2 = screen.getByTestId('tab2');
    await userEvent.click(tab2);
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });

  test('When the second tab is clicked, the content of the second tab is displayed', async () => {
    const mockScrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
    render(<TestTabs />);

    await userEvent.click(screen.getByTestId('tab2'));
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  test('When the second tab is clicked, the content of the first tab is not displayed', async () => {
    const mockScrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
    render(<TestTabs />);

    await userEvent.click(screen.getByTestId('tab2'));
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
});
