jest.mock('../hooks/usePseudoClasses', () => ({
  usePseudoClasses: jest.fn().mockImplementation(ref => {
    return { refObject: ref, isHovered: false, isFocused: false };
  }),
}));

export {};
