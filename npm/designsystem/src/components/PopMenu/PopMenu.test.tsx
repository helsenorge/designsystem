import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../__mocks__/useOutsideEvent';

import PopMenu from './PopMenu';
import LinkList from '../LinkList';

const container = (
  <PopMenu openButtonTestId="open-btn" closeButtonTestId="close-btn" popOverTestId="popover">
    <LinkList testId="linkList-tester" chevron={false}>
      <LinkList.Link tabIndex={0} href="/">
        {'Link 1'}
      </LinkList.Link>
      <LinkList.Link tabIndex={0} href="/">
        {'Link 2'}
      </LinkList.Link>
      <LinkList.Link tabIndex={0} href="/">
        {'Link 3'}
      </LinkList.Link>
    </LinkList>
  </PopMenu>
);

describe('Gitt at en PopMenu vises ', (): void => {
  describe('Når man trykker på åpne/lukke-knappen', (): void => {
    it('Så skal popover åpnes/lukkes', async (): Promise<void> => {
      render(container);
      const triggerBtn = screen.getByTestId('open-btn');
      expect(triggerBtn).toBeInTheDocument();
      expect(triggerBtn).toHaveAttribute('aria-expanded', 'false');

      await userEvent.click(triggerBtn);
      expect(triggerBtn).toHaveAttribute('aria-expanded', 'true');
      const popOver = screen.getByTestId('popover');
      expect(popOver).toBeInTheDocument();

      await userEvent.click(triggerBtn);
      expect(popOver).not.toBeInTheDocument();
      expect(triggerBtn).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
