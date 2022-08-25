import { getAriaLabelAttributes } from './utils';

describe('Gitt at getAriaLabelAttributes skal kalles', () => {
  describe('Når label og id er satt i config', () => {
    test('Så returneres aria-labelledby', (): void => {
      const config = { label: 'label', id: 'testid' };
      const props = getAriaLabelAttributes(config);

      expect(props).toEqual({ 'aria-labelledby': 'testid' });
    });
  });
  describe('Når label er satt i config', () => {
    test('Så returneres aria-label', (): void => {
      const config = { label: 'label' };
      const props = getAriaLabelAttributes(config);

      expect(props).toEqual({ 'aria-label': 'label' });
    });
  });
  describe('Når id er satt i config', () => {
    test('Så returneres aria-labelledby', (): void => {
      const config = { id: 'testid' };
      const props = getAriaLabelAttributes(config);

      expect(props).toEqual({ 'aria-labelledby': 'testid' });
    });
  });
  describe('Når config er et tomt objekt', () => {
    test('Så returneres undefined', (): void => {
      const config = {};
      const props = getAriaLabelAttributes(config);

      expect(props).toBeUndefined();
    });
  });
});
