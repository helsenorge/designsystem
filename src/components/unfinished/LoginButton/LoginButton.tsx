import * as React from 'react';

const loginUrl = '/auth/signin';

export interface LoginButtonProps {
  buttonText?: string;
  className?: string;
}

export class LoginButton extends React.Component<LoginButtonProps, {}> {
  constructor(props: LoginButtonProps) {
    super(props);
  }

  getLoginUrl(): string {
    return `${loginUrl}?Source=${encodeURIComponent(window.location.href)}`;
  }

  login = (e: React.MouseEvent<{}>): void => {
    e.preventDefault();
    window.history.replaceState(window.history.state, '', this.getLoginUrl());
    window.location.reload();
  };

  render(): JSX.Element {
    let buttonText = this.props.buttonText || 'Logg inn';
    let className = this.props.className || 'atom_secondarybutton login';

    return (
      <button type="button" onClick={this.login} className={className}>
        {buttonText}
      </button>
    );
  }
}
