import { isElementInViewport } from '../viewport';

const originalInnerHeight = window.innerHeight;
const originalInnerWidth = window.innerWidth;

describe('Gitt at isElementInViewport kalles', (): void => {
  beforeAll(() => {
    Object.defineProperty(window, 'innerHeight', {
      value: 400,
    });
    Object.defineProperty(window, 'innerWidth', {
      value: 400,
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'innerHeight', {
      value: originalInnerHeight,
    });
    Object.defineProperty(window, 'innerWidth', {
      value: originalInnerWidth,
    });
  });

  describe('Når hele elementet er innenfor vinduet', (): void => {
    it('Så returneres true', (): void => {
      const div = document.createElement('div');
      div.getBoundingClientRect = vi.fn().mockReturnValue({
        bottom: 300,
        height: 200,
        left: 100,
        right: 300,
        top: 100,
        width: 200,
      });

      const result = isElementInViewport(div);

      expect(result).toBe(true);
    });
  });

  describe('Når toppen av elementet er utenfor vinduet', (): void => {
    it('Så returneres false', (): void => {
      const div = document.createElement('div');
      div.getBoundingClientRect = vi.fn().mockReturnValue({
        bottom: 300,
        height: 400,
        left: 100,
        right: 300,
        top: -100,
        width: 200,
      });

      const result = isElementInViewport(div);

      expect(result).toBe(false);
    });
  });

  describe('Når bunnen av elementet er utenfor vinduet', (): void => {
    it('Så returneres false', (): void => {
      const div = document.createElement('div');
      div.getBoundingClientRect = vi.fn().mockReturnValue({
        bottom: 500,
        height: 400,
        left: 100,
        right: 300,
        top: 100,
        width: 200,
      });

      const result = isElementInViewport(div);

      expect(result).toBe(false);
    });
  });
});
