/*  This file has been converted to TypeScript
 When making changes to this file please make them
 in the file with a .ts or .tsx extension located in
 the Common/src/toolkit folder structure
 Then run the command "npm run build-toolkit" to generate the jsx file
 Please check both files into TFS */

import * as React from 'react';
import ValidationError from '../../atoms/validation-error';
import {ValidationProps} from './validation';

interface FieldsetProps {
  className?: string;
  legendText: string;
  validateField: () => Promise<void>;
  isValid: () => boolean;
  onValidated?: (valid: boolean) => void;
  errorMessage?: string | ((value: boolean) => string);
}

export default class Fieldset extends React.Component<FieldsetProps & ValidationProps, {}> {
  static hnFormComponent = true;

  renderErrorMessage(): JSX.Element {
    let error: string;
    if (this.props.errorMessage) {
      error =
        typeof this.props.errorMessage === 'string'
          ? this.props.errorMessage
          : this.props.errorMessage(this.props.isValid());
    } else {
      error = 'Ugyldig verdi';
    }
    return <ValidationError isValid={this.props.isValid()} error={error} />;
  }

  notifyValidated = (valid: boolean) => {
    if (this.props.onValidated) {
      this.props.onValidated(valid);
    }
  };

  render(): JSX.Element {
    let wrapperClasses = 'mol_validation';
    if (!this.props.isValid()) {
      wrapperClasses += ' mol_validation--active';
    }
    if (this.props.className) {
      wrapperClasses += ` ${this.props.className}`;
    }
    return (
      <div className={wrapperClasses}>
        {this.renderErrorMessage()}
        <fieldset className="atom_fieldset">
          <legend>{this.props.legendText}</legend>
          {this.props.children}
        </fieldset>
      </div>
    );
  }
}
