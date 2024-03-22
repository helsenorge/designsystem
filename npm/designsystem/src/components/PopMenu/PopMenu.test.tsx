import '@testing-library/jest-dom';
import React from 'react';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../__mocks__/useOutsideEvent';

import PopMenu from './PopMenu';
import LinkList from '../LinkList';

const mockHandleClick = jest.fn();

const popMenu = (
  <PopMenu openButtonAriaLabel="Vis meny" closeButtonAriaLabel="Lukk meny" popOverTestId="popover">
    <LinkList testId="linkList-tester" chevron={false}>
      <LinkList.Link onClick={mockHandleClick} href="#">
        {'Link 1'}
      </LinkList.Link>
      <LinkList.Link onClick={mockHandleClick} href="#">
        {'Link 2'}
      </LinkList.Link>
      <LinkList.Link onClick={mockHandleClick} href="#">
        {'Link 3'}
      </LinkList.Link>
    </LinkList>
  </PopMenu>
);

describe('Gitt at en PopMenu vises ', (): void => {
  describe('Når den rendrer', (): void => {
    it('Så skal den kun vises', (): void => {
      expect(render(popMenu)).toMatchSnapshot();
    });
  });
  describe('Når man trykker på åpne/lukke-knappen', (): void => {
    it('Så skal popover åpnes/lukkes', async (): Promise<void> => {
      render(popMenu);
      const openButton = screen.getByLabelText('Vis meny');
      expect(openButton).toBeVisible();
      await userEvent.click(openButton);
      expect(openButton).not.toBeVisible();
      const closeButton = screen.getByLabelText('Lukk meny');
      expect(closeButton).toBeVisible();
      const popOver = screen.getByTestId('popover');
      expect(popOver).toBeVisible();
      await userEvent.click(closeButton);
      expect(closeButton).not.toBeVisible();
      expect(popOver).not.toBeVisible();
    });
  });
  describe('Når man klikker på en lenke i menyen', (): void => {
    it('Så lukkes menyen', async (): Promise<void> => {
      render(popMenu);

      const btnOpen = screen.getByLabelText('Vis meny');
      await userEvent.click(btnOpen);

      const link = screen.getByText('Link 1');
      await userEvent.click(link);

      expect(mockHandleClick).toHaveBeenCalledTimes(1);

      expect(screen.getByLabelText('Vis meny')).toBeVisible();
    });
  });
});
