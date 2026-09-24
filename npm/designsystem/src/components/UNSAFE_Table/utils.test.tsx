import { render, screen } from '@testing-library/react';

import { TableColors, TableSizes } from './constants';
import { mapChildrenWithSizeAndColor } from './utils';

interface ChildProps {
  color?: TableColors;
  size?: TableSizes;
}

const Child: React.FC<ChildProps> = ({ color, size }) => <div data-color={color} data-size={size} data-testid="child" />;

describe('Gitt at tabellbarn mappes med størrelse og farge', (): void => {
  test('Så mottar vanlige barn og fragmentbarn begge propene', (): void => {
    render(
      <>
        {mapChildrenWithSizeAndColor(
          <>
            <Child />
            <Child />
          </>,
          TableSizes.compact,
          TableColors.transparent
        )}
      </>
    );

    for (const child of screen.getAllByTestId('child')) {
      expect(child).toHaveAttribute('data-size', TableSizes.compact);
      expect(child).toHaveAttribute('data-color', TableColors.transparent);
    }
  });
});
