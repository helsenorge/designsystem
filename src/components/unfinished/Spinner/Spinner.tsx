import * as React from 'react';
import * as classNames from 'classnames';

export interface SpinnerProps {
  local?: boolean;
  inline?: boolean;
  transparent?: boolean;
  freeze?: boolean;
  molekyl?: boolean;
  mini?: boolean;
  tall?: boolean;
  standalone?: boolean;
  white?: boolean;
  className?: string;
  circular?: boolean;
}

export class Spinner extends React.Component<SpinnerProps, {}> {
  render(): React.ReactElement<{}> {
    const classes: string = classNames(
      {
        atom_spinner: !this.props.circular,
        atom_spinner_circular: this.props.circular,
        local: this.props.local,
        inline: this.props.inline,
        transparent: this.props.transparent,
        MF_freeze: this.props.freeze,
        molekyl: this.props.molekyl,
        small: this.props.mini,
        tall_margin: this.props.tall,
        white: this.props.white,
      },
      this.props.className,
    );

    let numSpinners = 4;
    if (this.props.mini) {
      numSpinners = 3;
    }
    if (this.props.circular) {
      numSpinners = 8;
    }

    const spinners = [];
    for (var index = 1; index < numSpinners + 1; index++) {
      const classname = `spin${index}`;
      const spinner: JSX.Element = <div className={classname} key={index} />;
      spinners.push(spinner);
    }
    const content: JSX.Element = (
      <div className={classes} role="progressbar" aria-valuetext="Laster innhold...">
        <div className="spinner">{spinners}</div>
      </div>
    );

    if (this.props.standalone) {
      return <div className="atom_spinner-container">{content}</div>;
    }
    return content;
  }
}
