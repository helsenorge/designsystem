import * as React from 'react';
import {FormChild} from '.';

export interface ValidationProps {
  onValidated?: (valid: boolean | undefined) => void;
  optionalLabel?: string;
  requiredLabel?: string;
  showOptionalLabel?: boolean;
  showRequiredLabel?: boolean;
  addFormComponent?: (component: FormChild) => void;
  removeFormComponent?: (component: FormChild) => void;
  childRef?: (el: FormChild) => void;
}

export default class Validation extends React.Component<ValidationProps, {}> {
  ctrls: {
    component?: FormChild;
  } = {};
  componentDidMount() {
    if (this.props.addFormComponent && this.ctrls.component) {
      this.props.addFormComponent(this.ctrls.component);
    }
  }
  componentWillUnmount() {
    if (this.props.removeFormComponent && this.ctrls.component) {
      this.props.removeFormComponent(this.ctrls.component);
    }
  }

  render() {
    const {children, onValidated, showRequiredLabel, showOptionalLabel, requiredLabel, optionalLabel} = this.props;
    return (
      <React.Fragment>
        {React.Children.map(children, (child: JSX.Element) =>
          React.cloneElement(child, {
            onValidated: onValidated,
            ref: (el: FormChild) => {
              this.ctrls.component = el;
              if (this.props.childRef) {
                this.props.childRef(el);
              }
            },
            showRequiredLabel: showRequiredLabel,
            showOptionalLabel: showOptionalLabel,
            requiredLabel: requiredLabel,
            optionalLabel: optionalLabel,
          }),
        )}
      </React.Fragment>
    );
  }
}
