vi.mock('../hooks/usePseudoClasses', () => ({
  usePseudoClasses: vi.fn().mockImplementation(ref => {
    return { refObject: ref && typeof ref !== 'function' ? ref : { current: undefined }, isHovered: false, isFocused: false };
  }),
}));

export {};
