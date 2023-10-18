import React from 'react';

interface ErrorBoundaryProps<T> {
  fallback: React.ReactNode;
  children: React.ReactNode;
  reset: T;
}

interface ErrorBoundaryState {
  error: boolean;
}

class ErrorBoundary<T> extends React.Component<ErrorBoundaryProps<T>, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps<T>) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch(): void {
    this.setState({ error: true });
  }

  componentDidUpdate(prevProps: Readonly<ErrorBoundaryProps<T>>): void {
    if (prevProps.reset !== this.props.reset) {
      this.setState({ error: false });
    }
  }

  render(): React.ReactNode {
    return this.state.error ? this.props.fallback : this.props.children;
  }
}

export default ErrorBoundary;
