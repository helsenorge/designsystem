class ResizeObserver {
  observe(): void {
    // do nothing
  }
  unobserve(): void {
    // do nothing
  }
  disconnect(): void {
    // do nothing
  }
}

Object.defineProperty(window, 'ResizeObserver', {
  value: ResizeObserver,
  configurable: true,
});

export default ResizeObserver;
