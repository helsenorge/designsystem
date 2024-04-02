export interface FocusableElement {
  focus?: () => void;
}

export interface ErrorDetails {
  message?: React.ReactNode;
  ref?: FocusableElement;
}

export type ValidationErrors = Record<string, ErrorDetails>;
