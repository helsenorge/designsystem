Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(_query => ({
    matches: true,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  })),
});
