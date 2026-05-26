import { render } from '@testing-library/react';

import CheckboxMarker from './CheckboxMarker';
import { FormOnColor, FormSize } from '../../../constants';
import { getColor } from '../../../theme/currys/color';

describe('Gitt at CheckboxMarker skal vises', (): void => {
  describe('Når checked ikke er satt', () => {
    test('Så rendres ikke avkrysningsikonet', () => {
      const { container } = render(<CheckboxMarker />);

      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });
  });

  describe('Når checked er true', () => {
    test('Så rendres avkrysningsikonet inne i en aria-hidden wrapper', () => {
      const { container } = render(<CheckboxMarker checked />);

      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg?.parentElement).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Når disabled er true', () => {
    test('Så bruker ikonet neutral-700 som stroke-farge', () => {
      const { container } = render(<CheckboxMarker checked disabled />);

      expect(container.querySelector('svg')).toHaveAttribute('stroke', getColor('neutral', 700));
    });
  });

  describe('Når size er large og checked sammen med error', () => {
    test('Så bruker ikonet hvit stroke-farge', () => {
      const { container } = render(<CheckboxMarker checked error size={FormSize.large} />);

      expect(container.querySelector('svg')).toHaveAttribute('stroke', getColor('white'));
    });
  });

  describe('Når size er large og checked uten error', () => {
    test('Så bruker ikonet blueberry-900 som stroke-farge', () => {
      const { container } = render(<CheckboxMarker checked size={FormSize.large} />);

      expect(container.querySelector('svg')).toHaveAttribute('stroke', getColor('blueberry', 900));
    });
  });

  describe('Når onColor er ondark og checked', () => {
    test('Så bruker ikonet blueberry-900 som stroke-farge', () => {
      const { container } = render(<CheckboxMarker checked onColor={FormOnColor.ondark} />);

      expect(container.querySelector('svg')).toHaveAttribute('stroke', getColor('blueberry', 900));
    });
  });

  describe('Når onColor er oninvalid', () => {
    test('Så behandles markøren som invalid uten at error-propen er satt', () => {
      const { container } = render(<CheckboxMarker checked size={FormSize.large} onColor={FormOnColor.oninvalid} />);

      // Samme resultat som checked + error + large: hvit stroke
      expect(container.querySelector('svg')).toHaveAttribute('stroke', getColor('white'));
    });
  });

  describe('Når kun checked er satt (default props)', () => {
    test('Så bruker ikonet hvit stroke-farge', () => {
      const { container } = render(<CheckboxMarker checked />);

      expect(container.querySelector('svg')).toHaveAttribute('stroke', getColor('white'));
    });
  });
});
