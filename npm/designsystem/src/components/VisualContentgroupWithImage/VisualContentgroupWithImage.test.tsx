import { render, screen } from '@testing-library/react';

import VisualContentgroupWithImage from './VisualContentgroupWithImage';

const visualContent = <img alt="test bilde" src="test.png" />;
const children = <p>{'Tekstinnhold'}</p>;

describe('Gitt at VisualContentgroupWithImage skal vises', (): void => {
  describe('Når VisualContentgroupWithImage vises med testId', (): void => {
    test('Så settes data-testid', (): void => {
      render(
        <VisualContentgroupWithImage imageRatio="square" testId="visual-contentgroup" visualContent={visualContent}>
          {children}
        </VisualContentgroupWithImage>
      );

      expect(screen.getByTestId('visual-contentgroup')).toBeInTheDocument();
    });
  });

  describe('Når VisualContentgroupWithImage vises med visualContent', (): void => {
    test('Så vises innholdet i visualContent', (): void => {
      render(
        <VisualContentgroupWithImage imageRatio="square" visualContent={visualContent}>
          {children}
        </VisualContentgroupWithImage>
      );

      expect(screen.getByRole('img', { name: 'test bilde' })).toBeInTheDocument();
    });
  });

  describe('Når VisualContentgroupWithImage vises med children', (): void => {
    test('Så vises innholdet i children', (): void => {
      render(
        <VisualContentgroupWithImage imageRatio="square" visualContent={visualContent}>
          {children}
        </VisualContentgroupWithImage>
      );

      expect(screen.getByText('Tekstinnhold')).toBeInTheDocument();
    });
  });

  describe('Når VisualContentgroupWithImage vises med både visualContent og children', (): void => {
    test('Så vises begge deler', (): void => {
      render(
        <VisualContentgroupWithImage imageRatio="landscape" visualContent={<img alt="visuelt bilde" src="test.png" />}>
          {children}
        </VisualContentgroupWithImage>
      );

      expect(screen.getByRole('img', { name: 'visuelt bilde' })).toBeInTheDocument();
      expect(screen.getByText('Tekstinnhold')).toBeInTheDocument();
    });
  });
});
