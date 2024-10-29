import { vi } from 'vitest';

export const mockWindowMatchMedia = vi.fn().mockImplementation(() => ({
  matches: true,
  addListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: mockWindowMatchMedia,
});
