import * as React from 'react';
import * as classNames from 'classnames';
import {Spinner} from '../../spinner';

export interface SaveButtonProps {
  saving?: boolean;
  saved?: boolean;
  onClick?: () => void;
  savedText?: string;
  saveText?: string;
  classNames?: string;
  updateSaved?: (saved: boolean) => void;
  disabled?: boolean;
  noWidth?: boolean;
}

export interface SaveButtonState {
  saved?: boolean;
  width?: string;
}

export class SaveButton extends React.Component<SaveButtonProps, SaveButtonState> {
  refs: {
    button: HTMLElement;
  };

  timer: number | null | NodeJS.Timer = null;

  constructor(props: SaveButtonProps) {
    super(props);
    this.state = {
      saved: false,
      width: 'auto',
    };
    this.onClick = this.onClick.bind(this);
    this.setSaved = this.setSaved.bind(this);
  }

  componentDidMount() {
    // if the button is narrower than 100px, make it wider to fit the spinner
    let buttonwidth: number = this.refs.button.offsetWidth;
    if (buttonwidth < 100) {
      buttonwidth = 100;
    }

    this.setState({width: this.props.noWidth ? this.state.width : buttonwidth + 'px'});
  }

  componentWillReceiveProps(newProps: SaveButtonProps) {
    if (newProps.saved && !this.props.saved && !this.state.saved) {
      this.setSaved();
    }
    if (!newProps.saved && this.state.saved) {
      this.setState({saved: false});
    }
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
    this.setState({saved: false});
  }

  setSaved() {
    this.setState({saved: true});
    if (this.timer) {
      clearTimeout(this.timer as NodeJS.Timer);
    }

    this.timer = setTimeout(() => {
      this.timer = null;
      if (this.props.updateSaved) {
        this.props.updateSaved(false);
      } else {
        this.setState({saved: false});
      }
    }, 3000);
  }

  render(): JSX.Element {
    const buttonClasses: string = classNames(
      'actionbutton actionbutton--savebutton',
      {
        'actionbutton--saving': this.props.saving,
        'actionbutton--saved': this.state.saved,
      },
      this.props.classNames,
    );

    const spinner: JSX.Element = <Spinner inline white />;
    const text: JSX.Element = this.state.saved ? (
      <span className="actionbutton__text actionbutton__text--saved">{this.props.savedText}</span>
    ) : (
      <span className="actionbutton__text">{this.props.saveText}</span>
    );

    return (
      <button
        className={buttonClasses}
        type="button"
        onClick={this.onClick}
        ref="button"
        style={{width: this.state.width}}
        aria-busy={this.props.saving}
        aria-live="polite"
        disabled={this.props.disabled}>
        {this.props.saving ? spinner : text}
      </button>
    );
  }
}
