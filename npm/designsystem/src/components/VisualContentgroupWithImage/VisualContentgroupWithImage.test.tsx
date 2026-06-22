import { render, screen } from '@testing-library/react';

import VisualContentgroupWithImage from './VisualContentgroupWithImage';

describe('Gitt at VisualContentgroupWithImage skal vises', (): void => {
  describe('Når VisualContentgroupWithImage vises med testId', (): void => {
    test('Så settes data-testid', (): void => {
      render(<VisualContentgroupWithImage imageRatio="square" testId="visual-contentgroup" />);

      expect(screen.getByTestId('visual-contentgroup')).toBeInTheDocument();
    });
  });

  describe('Når VisualContentgroupWithImage vises med visualContent', (): void => {
    test('Så vises innholdet i visualContent', (): void => {
      render(<VisualContentgroupWithImage imageRatio="square" visualContent={<img alt="test bilde" src="test.png" />} />);

      expect(screen.getByRole('img', { name: 'test bilde' })).toBeInTheDocument();
    });
  });

  describe('Når VisualContentgroupWithImage vises med children', (): void => {
    test('Så vises innholdet i children', (): void => {
      render(<VisualContentgroupWithImage imageRatio="square" children={<p>Tekstinnhold</p>} />);

      expect(screen.getByText('Tekstinnhold')).toBeInTheDocument();
    });
  });

  describe('Når VisualContentgroupWithImage vises med både visualContent og children', (): void => {
    test('Så vises begge deler', (): void => {
      render(
        <VisualContentgroupWithImage
          imageRatio="landscape"
          visualContent={<img alt="visuelt bilde" src="test.png" />}
          children={<p>Tekstinnhold</p>}
        />
      );

      expect(screen.getByRole('img', { name: 'visuelt bilde' })).toBeInTheDocument();
      expect(screen.getByText('Tekstinnhold')).toBeInTheDocument();
    });
  });
});
