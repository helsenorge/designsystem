import * as React from 'react';
import {InlineButton} from '../buttons/inline-button';

interface FileProps {
  // file?: File;
  loading: boolean;
  shouldRenderDeleteButton: boolean;
  deleteFile?: (fileId: string) => void;
  onRequestLink?: (fileId: string) => string;
  onOpenFile?: (fileId: string) => void;
  fileId?: string;
  fileName: string;
}

interface FileState {
  showPdfLightbox?: boolean;
  isDownloading?: boolean;
}

export default class FileElement extends React.Component<FileProps, FileState> {
  constructor(props: FileProps) {
    super(props);
    this.state = {
      showPdfLightbox: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
  }

  handleClick(event: React.FormEvent<{}>): void {
    let {fileId, onOpenFile} = this.props;
    if (onOpenFile && fileId) {
      onOpenFile(fileId);
    }
    if (event) {
      event.preventDefault();
    }
  }

  deleteFile() {
    if (this.props.deleteFile) {
      return this.props.deleteFile(this.props.fileId ? this.props.fileId : '');
    }
  }

  renderDeleteButton() {
    let {shouldRenderDeleteButton, loading} = this.props;
    if (shouldRenderDeleteButton && !loading) {
      return (
        <InlineButton type="delete" className="lastOppElement__deleteButton" onClick={this.deleteFile}>
          {'Slett'}
        </InlineButton>
      );
    }
  }

  renderFile() {
    let {loading, fileId, fileName, onRequestLink} = this.props;

    if (!loading) {
      if (fileId && onRequestLink) {
        const attachmentLink: string = onRequestLink(fileId);

        return (
          <a href={attachmentLink} onClick={this.handleClick}>
            {fileName}
          </a>
        );
      }
      return fileName;
    }
  }

  render(): JSX.Element | null {
    return (
      <li className="lastOppElement__file">
        {this.renderFile()}
        {this.renderDeleteButton()}
      </li>
    );
  }
}
