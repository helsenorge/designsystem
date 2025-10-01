vi.mock('../hooks/usePseudoClasses', () => ({
  usePseudoClasses: vi.fn().mockImplementation(ref => {
    return { refObject: ref || { current: undefined }, isHovered: false, isFocused: false };
  }),
}));

export {};
