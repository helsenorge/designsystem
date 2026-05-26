import { render } from '@testing-library/react';

import RadioMarker from './RadioMarker';
import { FormOnColor, FormSize } from '../../../constants';

describe('Gitt at RadioMarker skal vises', (): void => {
  describe('Når checked ikke er satt', () => {
    test('Så rendres ikke dotten', () => {
      const { container } = render(<RadioMarker />);

      const marker = container.firstChild as HTMLElement;
      expect(marker).toBeInTheDocument();
      expect(marker.firstChild).toBeNull();
    });
  });

  describe('Når checked er true', () => {
    test('Så rendres dotten inne i en aria-hidden wrapper', () => {
      const { container } = render(<RadioMarker checked />);

      const marker = container.firstChild as HTMLElement;
      expect(marker).toHaveAttribute('aria-hidden', 'true');
      expect(marker.firstChild).toHaveClass('radio__marker-dot');
    });
  });

  describe('Når disabled er true', () => {
    test('Så får markøren disabled-klasse', () => {
      const { container } = render(<RadioMarker disabled />);

      expect(container.firstChild).toHaveClass('radio__marker--disabled');
    });
  });

  describe('Når size er large og checked', () => {
    test('Så får markøren large-checked klasse', () => {
      const { container } = render(<RadioMarker checked size={FormSize.large} />);

      expect(container.firstChild).toHaveClass('radio__marker__large--checked');
    });
  });

  describe('Når onColor er ondark', () => {
    test('Så får markøren on-dark klasse', () => {
      const { container } = render(<RadioMarker onColor={FormOnColor.ondark} />);

      expect(container.firstChild).toHaveClass('radio__marker--on-dark');
    });
  });

  describe('Når onColor er oninvalid', () => {
    test('Så behandles markøren som invalid uten at error-propen er satt', () => {
      const { container } = render(<RadioMarker onColor={FormOnColor.oninvalid} />);

      expect(container.firstChild).toHaveClass('radio__marker--invalid');
    });
  });

  describe('Når className sendes inn', () => {
    test('Så legges den til på markøren', () => {
      const { container } = render(<RadioMarker className="min-klasse" />);

      expect(container.firstChild).toHaveClass('min-klasse');
    });
  });
});
