import { vi as jest } from 'vitest';

export const mockWindowMatchMedia = jest.fn().mockImplementation((_query: string) => ({
  matches: true,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: mockWindowMatchMedia,
});
