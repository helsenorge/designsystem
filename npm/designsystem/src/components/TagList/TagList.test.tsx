import React from 'react';
import { render, screen } from '@testing-library/react';
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

      const tag = screen.getByText('Tekst');

      expect(tag).toBeVisible();
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
