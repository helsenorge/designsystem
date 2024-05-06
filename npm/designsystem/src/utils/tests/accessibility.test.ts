import { getAriaDescribedBy, getAriaLabelAttributes } from '../accessibility';

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

describe('Gitt at getAriaDescribedBy skal kalles', () => {
  describe('Når props er tom', () => {
    test('Så returneres undefined', (): void => {
      const result = getAriaDescribedBy({});

      expect(result).toBeUndefined();
    });
  });

  describe('Når aria-describedby er en string', () => {
    test('Så returneres aria-describedby', (): void => {
      const result = getAriaDescribedBy({ 'aria-describedby': 'aria-describedby' });

      expect(result).toEqual('aria-describedby');
    });

    describe('Når errorTextId er en string, og errorTextUuid er satt', () => {
      test('Så returneres aria-describedby og errorTextUuid', (): void => {
        const result = getAriaDescribedBy({ 'aria-describedby': 'aria-describedby', errorTextId: 'errorTextId' }, 'errorTextUuid');

        expect(result).toEqual('aria-describedby errorTextUuid');
      });
    });
  });

  describe('Når errorTextUuid ikke er satt', () => {
    describe('Når errorText er en string', () => {
      test('Så returneres undefined', (): void => {
        const result = getAriaDescribedBy({ errorText: 'errorText' });

        expect(result).toBeUndefined();
      });
    });

    describe('Når errorTextId er en string', () => {
      test('Så returneres undefined', (): void => {
        const result = getAriaDescribedBy({ errorTextId: 'errorTextId' });

        expect(result).toBeUndefined();
      });
    });
  });

  describe('Når errorTextUuid er satt', () => {
    describe('Når errorText er en string', () => {
      test('Så returneres errorTextUuid', (): void => {
        const result = getAriaDescribedBy({ errorText: 'errorText' }, 'errorTextUuid');

        expect(result).toEqual('errorTextUuid');
      });
    });

    describe('Når errorTextId er en string', () => {
      test('Så returneres errorTextUuid', (): void => {
        const result = getAriaDescribedBy({ errorTextId: 'errorTextId' }, 'errorTextUuid');

        expect(result).toEqual('errorTextUuid');
      });
    });
  });
});
