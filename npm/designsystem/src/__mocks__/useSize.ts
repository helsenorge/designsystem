jest.mock('../hooks/useSize', () => ({
  useSize: jest.fn().mockReturnValue(undefined),
}));

export {};
