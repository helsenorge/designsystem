import * as React from './node_modules/react';
import * as classNames from './node_modules/classnames';
import {SaveButton} from '../../atoms/buttons/save-button';
import ValidationSummary from './ValidationSummary/ValidationSummary';
import ValidationError from '../../atoms/validation-error';
import {Spinner} from '../../atoms/spinner';

interface ValidationSummary {
  enable: boolean;
  header: string;
}
export interface FormProps {
  action: string;
  submitButtonText?: string;
  submitButtonClasses?: string;
  cancelButtonText?: string;
  draftButtonText?: string;
  cancelButtonClasses?: string;
  draftButtonClasses?: string;
  pauseButtonText?: string;
  pauseButtonClasses?: string;
  errorMessage?: string;
  children?: React.ReactNode;
  onSubmit?: (event?: React.FormEvent<{}>) => void;
  onDraft?: (event?: React.FormEvent<{}>) => void;
  requiredLabel?: string;
  optionalLabel?: string;
  onCancel?: (event?: React.FormEvent<{}>) => void;
  onPause?: () => void;
  saveButtonOnClick?: () => void;
  saving?: boolean;
  saved?: boolean;
  savedText?: string;
  saveText?: string;
  className?: string;
  buttonClasses?: string;
  validationSummary?: ValidationSummary;
  disabled?: boolean;
  triggerPreventDefaultOnSubmit?: boolean;
  cancelButtonLeft?: boolean;
}

export interface FormState {
  valid?: boolean;
  submitted?: boolean;
  formComponents: Array<FormChild>;
}

export interface FormChild extends Element {
  label?: string;
  legend?: string;
  validateField: () => Promise<void>;
  isValid: () => boolean;
  props: FormChildProps;
  getWrappedInstance: () => FormChild;
  getText: () => string;
  getId: () => string;
  notifyValidated?: (valid: boolean) => void;
}

export interface FormChildProps extends Element {
  id: string;
  key: string;
  requiredLabel?: string;
  optionalLabel?: string;
  validateField?: () => Promise<void>;
  isValid?: () => boolean;
  childRef?: (component: FormChild) => void;
  isRequired?: boolean;
  label?: string;
  legend?: string;
}

export default class Form extends React.Component<FormProps, FormState> {
  ctrls: {
    validationSummary?: HTMLElement;
  } = {};

  refs: {
    [key: string]: FormChild;
  };

  constructor(props: FormProps) {
    super(props);
    this.state = {
      valid: true,
      submitted: false,
      formComponents: [],
    };
  }

  validateForm(cb?: () => void): void {
    const promises: Array<Promise<void>> = [];
    this.state.formComponents.forEach((child: FormChild) => {
      const childToValidate = child && child.getWrappedInstance ? child.getWrappedInstance() : child;
      if (childToValidate && childToValidate.props.validateField) {
        promises.push(childToValidate.props.validateField());
      } else if (childToValidate && childToValidate.validateField) {
        promises.push(childToValidate.validateField());
      }
    });

    Promise.all(promises).then(cb);
  }

  areAllFieldsValid = () => {
    for (let i = 0; i < this.state.formComponents.length; i++) {
      const child: FormChild = this.state.formComponents[i];
      const childToValidate = child && child.getWrappedInstance ? child.getWrappedInstance() : child;
      if (childToValidate && childToValidate.props.isValid && !childToValidate.props.isValid()) {
        return false;
      } else if (childToValidate && childToValidate.isValid && !childToValidate.isValid()) {
        return false;
      }
    }
    return true;
  };

  onSubmit = (cb: () => void) => {
    this.setState({submitted: true}, () => {
      this.validateForm(() => {
        if (this.areAllFieldsValid()) {
          cb();
        } else {
          this.setState({valid: false});
          if (this.props.validationSummary && this.props.validationSummary.enable && this.ctrls.validationSummary) {
            this.ctrls.validationSummary.scrollIntoView();
          }
        }
      });
    });
  };

  onChildValidated = () => {
    // a field has changed status to valid, revalidate form
    if (this.state.submitted) {
      this.setState({
        valid: this.areAllFieldsValid(),
      });
    }
  };

  isSubmitted = () => {
    return this.state.submitted;
  };

  renderErrorMessage(): JSX.Element {
    let isValid = true;
    if (!this.state.valid && this.state.submitted) {
      isValid = false;
    }

    return (
      <ValidationError
        isValid={isValid}
        error={this.props.errorMessage ? this.props.errorMessage : ''}
        className="mol_form__formerror"
        textClassName="mol_validation__formerrortext"
      />
    );
  }

  shouldUseSaveButton() {
    if (!this.props.saveButtonOnClick) {
      return false;
    }
    if (this.props.saving === null || this.props.saving === undefined) {
      return false;
    }
    if (this.props.saved === null || this.props.saved === undefined) {
      return false;
    }
    if (!this.props.saveText) {
      return false;
    }
    if (!this.props.savedText) {
      return false;
    }
    return true;
  }

  renderSubmitButton() {
    if (this.shouldUseSaveButton()) {
      return (
        <SaveButton
          onClick={() => {
            this.onSubmit(() => {
              if (this.props.saveButtonOnClick) {
                this.props.saveButtonOnClick();
              }
            });
          }}
          saving={this.props.saving}
          saved={this.props.saved}
          saveText={this.props.saveText}
          savedText={this.props.savedText}
        />
      );
    }

    if (!this.props.submitButtonText) {
      return null;
    }
    return (
      <button
        type="button"
        className={this.props.submitButtonClasses ? this.props.submitButtonClasses : 'atom_actionbutton'}
        formNoValidate
        onClick={() => {
          this.onSubmit(() => {
            if (this.props.onSubmit) {
              this.props.onSubmit();
            }
          });
        }}>
        {this.props.submitButtonText}
      </button>
    );
  }

  renderCancelButton() {
    const {cancelButtonText, onCancel}: FormProps = this.props;
    if (!cancelButtonText || !onCancel) {
      return null;
    }
    return (
      <button
        type="button"
        className={this.props.cancelButtonClasses ? this.props.cancelButtonClasses : 'cancelbutton'}
        onClick={onCancel}>
        {cancelButtonText}
      </button>
    );
  }

  renderDraftButton() {
    const {draftButtonText, onDraft}: FormProps = this.props;
    if (!draftButtonText || !onDraft) {
      return null;
    }
    return (
      <button
        type="button"
        formNoValidate
        className={
          this.props.draftButtonClasses ? this.props.draftButtonClasses : 'atom_actionbutton atom_actionbutton--sub'
        }
        onClick={() => {
          this.onSubmit(() => {
            if (this.props.onDraft) {
              this.props.onDraft();
            }
          });
        }}>
        {draftButtonText}
      </button>
    );
  }

  renderPauseButton() {
    const {pauseButtonText, onPause, pauseButtonClasses}: FormProps = this.props;
    if (!pauseButtonText || !onPause) {
      return null;
    }
    return (
      <button
        type="button"
        className={pauseButtonClasses ? pauseButtonClasses : 'atom_inline-btn pause'}
        onClick={onPause}>
        <span>{pauseButtonText}</span>
      </button>
    );
  }

  renderButtons(): JSX.Element | null {
    const submitButton = this.renderSubmitButton();
    const cancelButton = this.renderCancelButton();
    const pauseButton = this.renderPauseButton();
    const draftButton = this.renderDraftButton();
    if (!submitButton && !cancelButton && !pauseButton && !draftButton) {
      return null;
    }
    if (this.props.cancelButtonLeft) {
      return (
        <div>
          {cancelButton}
          {submitButton}
          {draftButton}
          {pauseButton}
        </div>
      );
    }
    return (
      <div>
        {submitButton}
        {draftButton}
        {cancelButton}
        {pauseButton}
      </div>
    );
  }

  renderSpinner = () => {
    if (this.props.disabled) {
      return <Spinner local />;
    }
  };

  addFormComponent = (comp: FormChild) => {
    this.setState(({formComponents}) => {
      formComponents.push(comp);
      return {formComponents};
    });
  };

  removeFormComponent = (comp: FormChild) => {
    this.setState(
      ({formComponents}) => {
        const index = formComponents.indexOf(comp);
        formComponents.splice(index, 1);
        return {formComponents};
      },
      () => {
        // Invalid field removed. Revalidate form
        if (!this.state.valid && comp.isValid && !comp.isValid()) {
          this.onChildValidated();
        }
      },
    );
  };

  renderValidationSummary = () => {
    if (this.props.validationSummary && this.props.validationSummary.enable) {
      return (
        <span ref={(el: HTMLElement) => (this.ctrls.validationSummary = el)}>
          <ValidationSummary
            header={this.props.validationSummary.header}
            components={this.state.formComponents}
            submitted={this.state.submitted}
          />
        </span>
      );
    }
  };

  renderChildren = () => {
    const {children} = this.props;
    if (!children) {
      return null;
    }
    const childrenWithProp = React.Children.map(children, (child: JSX.Element) => {
      if (child) {
        return React.cloneElement(child, {
          requiredLabel: this.props.requiredLabel,
          optionalLabel: this.props.optionalLabel,
          showRequiredLabel: false,
          showOptionalLabel: true,
          addFormComponent: this.addFormComponent,
          removeFormComponent: this.removeFormComponent,
          isSubmitted: this.isSubmitted,
          onValidated: this.onChildValidated,
        });
      }
    });
    return childrenWithProp;
  };

  render(): JSX.Element {
    const formClasses = classNames('mol_form', this.props.className);
    const buttonClasses = classNames('mol_actionconfirmationprompt', this.props.buttonClasses);
    return (
      <form
        method="post"
        action={this.props.action}
        onSubmit={e => {
          if (this.props.triggerPreventDefaultOnSubmit) {
            e.preventDefault();
            e.stopPropagation();
          }

          this.onSubmit(() => {
            if (this.props.onSubmit) {
              this.props.onSubmit(e);
            }
          });
        }}
        className={formClasses}>
        {this.renderValidationSummary()}
        {this.renderChildren()}
        <div className={buttonClasses}>
          {this.renderErrorMessage()}
          {this.renderButtons()}
          {this.renderSpinner()}
        </div>
      </form>
    );
  }
}
