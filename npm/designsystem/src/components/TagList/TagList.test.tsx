import React from 'react';

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import TagList from './TagList';
import Chip from '../Chip/Chip';
import Tag from '../Tag';

describe('Gitt at TagList skal vises vanlig', (): void => {
  describe('Når Tagen vises', (): void => {
    test('Så er teksten synlig', (): void => {
      render(
        <TagList>
          <Tag>{'Tekst'}</Tag>
          <Tag>{'Mer tekst'}</Tag>
        </TagList>
      );

      const list = screen.getByRole('list');
      expect(list).toBeVisible();

      const tagList = within(list).getAllByRole('listitem');
      expect(tagList).toHaveLength(2);
      expect(tagList[0]).toHaveTextContent('Tekst');
      expect(tagList[1]).toHaveTextContent('Mer tekst');
    });
  });
  describe('Når TagList vises med Chips', (): void => {
    test('Så er teksten synlig', (): void => {
      const mockClickHandler = vi.fn();

      render(
        <TagList>
          <Chip action="remove" onClick={mockClickHandler}>
            {'Tekst'}
          </Chip>
          <Chip action="remove" onClick={mockClickHandler}>
            {'Mer tekst'}
          </Chip>
        </TagList>
      );

      const list = screen.getByRole('list');
      expect(list).toBeVisible();

      const tagList = within(list).getAllByRole('listitem');
      expect(tagList).toHaveLength(2);
      expect(tagList[0]).toHaveTextContent('Tekst');
      expect(tagList[1]).toHaveTextContent('Mer tekst');
    });

    test('Så er Chip klikkbar', async (): Promise<void> => {
      const mockClickHandler = vi.fn();
      render(
        <TagList>
          <Chip testId={'test-chip'} action="remove" onClick={mockClickHandler}>
            {'Tekst'}
          </Chip>
        </TagList>
      );

      const chip = screen.getByTestId('test-chip');

      expect(chip).toBeVisible();

      await userEvent.click(chip);

      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
