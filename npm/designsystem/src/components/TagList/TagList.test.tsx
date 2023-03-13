import React from 'react';

import { render, screen, within } from '@testing-library/react';

import TagList from './TagList';
import Tag from '../Tag';

describe('Gitt at Tag skal vises vanlig', (): void => {
  describe('Når Tagen vises', (): void => {
    test('Så er teksten synlig', (): void => {
      render(
        <TagList>
          <Tag>Tekst</Tag>
          <Tag>Mer tekst</Tag>
        </TagList>
      );

      const list = screen.getByRole('list');
      expect(list).toBeVisible();

      const tagList = within(list).getAllByRole('listitem');
      expect(tagList).toHaveLength(2);
      expect(tagList[0]).toHaveTextContent('Tekst');
      expect(tagList[1]).toHaveTextContent('Mer tekst');
    });

    test('Så ser den ut slik den skal', (): void => {
      const { container } = render(
        <TagList>
          <Tag>Tekst</Tag>
          <Tag>Mer tekst</Tag>
        </TagList>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
