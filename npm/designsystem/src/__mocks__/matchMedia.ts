import { vi, type Mock } from 'vitest';

export const mockWindowMatchMedia: Mock = vi.fn().mockImplementation(() => ({
  matches: true,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: mockWindowMatchMedia,
});
