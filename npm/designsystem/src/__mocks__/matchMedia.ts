import { vi, type Mock } from 'vitest';

export const mockWindowMatchMedia: Mock = vi.fn().mockImplementation((query: string) => ({
  matches: !/prefers-reduced-motion/.test(query),
  media: query,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: mockWindowMatchMedia,
});
