import { render, screen } from '@testing-library/react';

import Tag from './Tag';

describe('Gitt at Tag skal vises', (): void => {
  describe('Når Tagen vises vanlig', (): void => {
    test('Så er teksten synlig', (): void => {
      render(<Tag>{'Tekst'}</Tag>);

      const tag = screen.getByText('Tekst');

      expect(tag).toBeVisible();
    });
  });
  describe('Når Tag har ulike farger', (): void => {
    test('Så rendres klassene riktig', (): void => {
      render(
        <div>
          <Tag color="banana" testId="banana">
            {'Tekst'}
          </Tag>
          <Tag color="blueberry" testId="blueberry">
            {'Tekst'}
          </Tag>
          <Tag color="cherry" testId="cherry">
            {'Tekst'}
          </Tag>
          <Tag color="kiwi" testId="kiwi">
            {'Tekst'}
          </Tag>
          <Tag color="neutral" testId="neutral">
            {'Tekst'}
          </Tag>
          <Tag color="plum" testId="plum">
            {'Tekst'}
          </Tag>
        </div>
      );

      const testBanana = screen.getByTestId('banana');
      expect(testBanana.className).toContain('tag--banana');

      const testBlueberry = screen.getByTestId('blueberry');
      expect(testBlueberry.className).toContain('tag--blueberry');

      const testCherry = screen.getByTestId('cherry');
      expect(testCherry.className).toContain('tag--cherry');

      const testKiwi = screen.getByTestId('kiwi');
      expect(testKiwi.className).toContain('tag--kiwi');

      const testNeutral = screen.getByTestId('neutral');
      expect(testNeutral.className).toContain('tag--neutral');

      const testPlum = screen.getByTestId('plum');
      expect(testPlum.className).toContain('tag--plum');
    });
  });
});
