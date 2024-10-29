vi.mock('../hooks/usePseudoClasses', () => ({
  usePseudoClasses: vi.fn().mockImplementation(ref => {
    return { refObject: ref, isHovered: false, isFocused: false };
  }),
}));

export {};
