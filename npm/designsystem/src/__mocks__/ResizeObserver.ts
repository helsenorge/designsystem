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
});

export default ResizeObserver;
