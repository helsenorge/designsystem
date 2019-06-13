import * as React from 'react';
import * as classNames from 'classnames';
import {InlineButton} from '../buttons/inline-button';
import ValidationError from '../validation-error';
import {Spinner} from '../spinner';
import MessageBox from '../message-box';
import FileElement from './file';
import {sizeIsValid, typeIsValid} from './validation';

/* tslint:disable */
// TODO: Fix inputProps @types
var OriginalDropzone: any = require('react-dropzone');
/* tslint:enable */

export interface TextMessage {
  Title: string;
  Body: string;
}

export interface UploadedFile {
  id?: string;
  name: string;
}

export interface DropzoneState {
  uploadedFile?: UploadedFile;
  rejectedFile?: File; // Ta vare på rejected for å vise feilmelding
  isValid: boolean;
  loading: boolean;
  errormessage?: TextMessage | null;
}

export type MimeTypes = 'image/jpeg' | 'image/png' | 'application/pdf';

export interface DropzoneProps {
  id: string;
  onDrop: (
    file: Array<File>,
    cb?: (success: boolean, errormessage: TextMessage | null, uploadedFile?: UploadedFile) => void,
  ) => void;
  onDelete?: (cb: (success: boolean, errormessage: TextMessage | null, url?: string) => void) => void;
  onRequestLink?: (fileId: string) => string;
  onOpenFile?: (fileId: string) => void;
  uploadButtonText?: string;
  disabled?: boolean;
  label?: string | JSX.Element;
  onValidated?: (valid: boolean | undefined) => void;
  wrapperClasses?: string;
  errorMessage?: string | ((file?: File) => string);
  validFileTypes?: MimeTypes | Array<MimeTypes>;
  maxFileSize?: number;
  supportedFileFormatsText?: string;
  isRequired?: boolean;
  oldVersion?: boolean;
  uploadedFile?: UploadedFile;
  requiredLabel?: string;
  optionalLabel?: string;
  showRequiredLabel?: boolean;
  showOptionalLabel?: boolean;
}

export default class Dropzone extends React.Component<DropzoneProps, DropzoneState> {
  ctrls: {
    dropzone?: any; // tslint:disable-line
  } = {};

  constructor(props: DropzoneProps) {
    super(props);
    let uploadedFile = this.getDefaultFiles(props);
    this.state = {
      uploadedFile: uploadedFile,
      rejectedFile: undefined,
      loading: false,
      isValid: true,
    };
  }

  getDefaultFiles(props: DropzoneProps): UploadedFile | undefined {
    if (props.uploadedFile) {
      return props.uploadedFile;
    }
    return undefined;
  }

  onDrop = (files: Array<File>, event: Event): void => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    if (this.props.oldVersion) {
      this.props.onDrop(files);
    } else {
      if (this.validateFile(files[0])) {
        this.setState({loading: true});
        this.props.onDrop(files, (success, errormessage, uploadedFile) => {
          if (success) {
            this.setState({loading: false, uploadedFile: uploadedFile, rejectedFile: undefined}, this.validate);
          } else {
            this.setState({loading: false, rejectedFile: undefined, errormessage: errormessage});
          }
        });
      } else {
        this.setState({rejectedFile: files[0]}, this.validate);
      }
    }
  };

  onDelete = () => {
    if (this.props.onDelete) {
      this.setState({loading: true});
      this.props.onDelete(success => {
        if (success) {
          this.setState({loading: false, uploadedFile: undefined});
        } else {
          this.setState({loading: false});
        }
      });
    }
  };

  // Blir kalt på submit i form
  validateField = () => {
    const valid = this.isValidIfRequired();
    return new Promise<void>((resolve: () => void) => {
      this.setState({isValid: valid}, () => {
        if (this.props.onValidated) {
          this.props.onValidated(valid);
        }
        resolve();
      });
    });
  };

  isValidIfRequired = () => {
    if (this.props.isRequired && !this.state.uploadedFile) {
      return false;
    }
    return true;
  };

  // Blir kalt ved opplasting
  validate() {
    const valid = this.validateFile(this.state.rejectedFile);
    return new Promise<void>((resolve: () => void) => {
      this.setState({isValid: valid}, () => {
        if (this.props.onValidated) {
          this.props.onValidated(valid);
        }
        resolve();
      });
    });
  }

  validateFile(file?: File) {
    if (!file) {
      return true;
    } else {
      let valid = true;
      if (this.props.maxFileSize) {
        valid = valid && sizeIsValid(file, this.props.maxFileSize);
      }
      if (this.props.validFileTypes) {
        valid = valid && typeIsValid(file, this.props.validFileTypes);
      }
      return valid;
    }
  }

  renderValidationErrorMessage() {
    let error = '';
    if (this.props.errorMessage) {
      error =
        typeof this.props.errorMessage === 'string'
          ? this.props.errorMessage
          : this.props.errorMessage(this.state.rejectedFile);
      return <ValidationError isValid={this.state.isValid} error={error} />;
    }
  }

  renderErrorMessage() {
    if (this.state.errormessage) {
      return (
        <div className="lastOppElement__errormessage">
          <MessageBox type="error" title={this.state.errormessage.Title} description={this.state.errormessage.Body} />
        </div>
      );
    }
  }

  isValid() {
    return this.state.isValid;
  }

  onOpenClick = () => {
    this.ctrls.dropzone.open();
  };

  renderLabel = () => {
    if (this.props.label !== undefined) {
      return (
        <label htmlFor={this.props.id}>
          {this.props.label}{' '}
          {this.props.isRequired && this.props.requiredLabel && this.props.showRequiredLabel ? (
            <em> {this.props.requiredLabel}</em>
          ) : (
            ''
          )}
          {!this.props.isRequired && this.props.optionalLabel && this.props.showOptionalLabel ? (
            <em> {this.props.optionalLabel}</em>
          ) : (
            ''
          )}
        </label>
      );
    }
    return null;
  };

  renderSupportedFormats = () => {
    if (this.props.supportedFileFormatsText) {
      return <div className="lastOppElement__acceptedFormats">{this.props.supportedFileFormatsText}</div>;
    }
    return null;
  };

  renderUploadButton = () => {
    if (!this.state.uploadedFile && !this.state.loading && !this.state.rejectedFile) {
      return (
        <InlineButton
          id={this.props.id}
          type="lastOpp"
          disabled={this.props.disabled}
          onClick={this.onOpenClick}
          className="lastOppElement__uploadButton">
          {this.props.uploadButtonText}
        </InlineButton>
      );
    }
  };

  renderDropzone = () => {
    return (
      <OriginalDropzone
        className={'visuallyhidden'}
        ref={(control: HTMLElement) => (this.ctrls.dropzone = control)}
        onDrop={this.onDrop}
        multiple={false}
      />
    );
  };

  renderSpinner() {
    if (this.state.loading) {
      return <Spinner inline mini className="lastOppElement__spinner" />;
    }
  }

  deleteRejected = () => {
    this.setState({rejectedFile: undefined}, this.validate);
  };

  renderFiles() {
    let rejectedFile;
    let uploadedFile;
    if (this.state.rejectedFile) {
      rejectedFile = (
        <FileElement
          key={this.state.rejectedFile.name}
          fileName={this.state.rejectedFile.name}
          loading={this.state.loading}
          shouldRenderDeleteButton
          deleteFile={this.deleteRejected}
          onOpenFile={this.props.onOpenFile}
          onRequestLink={this.props.onRequestLink}
        />
      );
    }
    if (this.state.uploadedFile) {
      uploadedFile = (
        <FileElement
          key={this.state.uploadedFile.name}
          fileId={this.state.uploadedFile.id}
          fileName={this.state.uploadedFile.name}
          loading={this.state.loading}
          shouldRenderDeleteButton={this.props.onDelete ? true : false}
          deleteFile={this.onDelete}
          onOpenFile={this.props.onOpenFile}
          onRequestLink={this.props.onRequestLink}
        />
      );
    }
    if (this.state.rejectedFile || this.state.uploadedFile) {
      return (
        <ul className="lastOppElement__files">
          {rejectedFile}
          {uploadedFile}
        </ul>
      );
    }
  }

  render(): JSX.Element {
    let wrapperClasses: string = classNames('lastOppElement', 'mol_validation', this.props.wrapperClasses, {
      'mol_validation--active': !this.state.isValid,
    });

    return (
      <div className={wrapperClasses} id={`${this.props.id}-wrapper`}>
        {this.renderValidationErrorMessage()}
        {this.renderLabel()}
        {this.renderSupportedFormats()}
        {this.renderSpinner()}
        {this.renderFiles()}
        {this.renderUploadButton()}
        {this.renderErrorMessage()}
        {this.renderDropzone()}
        {this.props.children}
      </div>
    );
  }
}
