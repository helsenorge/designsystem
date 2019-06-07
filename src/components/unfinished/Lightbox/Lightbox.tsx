import * as React from './node_modules/react';
import TrapFocus from '../../../utils/trapfocus';
import * as classNames from './node_modules/classnames';
import aria, {Siblings} from '../../../utils/aria-hidden';
import RenderToBody from '../../render-to-body/render-to-body';
import keyCode from '../../../utils/key-code';
import handleIOSSafariUA from '../../../utils/ios-safari-ua';
import {log} from '../../../utils/logger';
import './lightbox.scss';
import {findDOMNode} from './node_modules/react-dom';

export interface LightboxProps {
  onClose?: (noprops?: any) => void; // tslint:disable-line
  noCloseButton?: boolean;
  noAbort?: boolean;
  isVisible?: boolean;
  energize?: boolean;
  hide?: boolean;
  noPadding?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  className?: string;
  multistep?: boolean;
  wrapperClassName?: string;
  actionCancelButton?: boolean;
  isProsessHjelpenAvailable?: boolean;
}

const lightboxes: number[] = [];
let lightboxCount = 0;
export class LightBox extends React.Component<LightboxProps, {}> {
  ctrls: {
    overlay?: HTMLDivElement;
    container?: HTMLDivElement;
    inner?: HTMLDivElement;
  } = {};

  private prevAriaHiddens: Siblings;
  private trapFocus?: TrapFocus;
  private lightboxId: number;
  constructor(props: LightboxProps) {
    super(props);
    this.mount = this.mount.bind(this);
    this.unMount = this.unMount.bind(this);
    this.keyListener = this.keyListener.bind(this);
    this.clickListener = this.clickListener.bind(this);
    this.close = this.close.bind(this);
    this.addPreventScrollToParentLightbox = this.addPreventScrollToParentLightbox.bind(this);
    this.lightboxId = lightboxCount++;
  }

  componentDidMount(): void {
    if (this.props.isVisible) {
      this.mount();
    }
  }

  componentDidUpdate(prevProps: LightboxProps): void {
    if (prevProps.isVisible && !this.props.isVisible) {
      this.unMount();
    } else if (!prevProps.isVisible && this.props.isVisible) {
      this.mount();
    }
  }

  componentWillUnmount(): void {
    this.unMount();
  }

  scrollTo(scrollPosition: number): void {
    if (this.ctrls.container) {
      this.ctrls.container.scrollTop = scrollPosition;
    }
  }

  close(evt?: React.MouseEvent<{}>): void {
    if (evt) {
      evt.stopPropagation();
      evt.nativeEvent.stopImmediatePropagation();
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  addPreventScrollToParentLightbox(): void {
    if (this.ctrls.container) {
      const thisLightbox = findDOMNode(this.ctrls.container);
      if (thisLightbox) {
        let parent = thisLightbox.parentElement;
        while (parent) {
          if (parent.classList.contains('toolkit-lightbox')) {
            parent.classList.add('preventscroll');
            break;
          }
          parent = parent.parentElement;
        }
      }
    }
  }

  mount(): void {
    if (document.body.classList.contains('preventscroll')) {
      this.addPreventScrollToParentLightbox();
    } else {
      // Do not scroll content outside
      document.body.classList.add('preventscroll');
    }
    if (this.ctrls.inner) {
      // Store aria-hiddens and hide all other content
      this.prevAriaHiddens = aria.setAriaHidden(this.ctrls.inner);
      // Add focus trap
      this.trapFocus = new TrapFocus(this.ctrls.inner);
    }
    // Add listener for click outside
    document.addEventListener('click', this.clickListener);
    // Add listener for esc key
    document.addEventListener('keydown', this.keyListener);
    handleIOSSafariUA();
    lightboxes.push(this.lightboxId);
  }

  unMount(): void {
    if (this.prevAriaHiddens !== undefined) {
      aria.resetAriaHidden(this.prevAriaHiddens);
    }

    setTimeout(function() {
      if (
        document.body.classList.contains('preventscroll') &&
        document.querySelectorAll('.toolkit-lightbox').length === 0
      ) {
        document.body.classList.remove('preventscroll');
      }
    }, 50);

    if (this.trapFocus !== undefined && this.trapFocus !== null) {
      this.trapFocus.deactivate();
      this.trapFocus = undefined;
    }
    document.removeEventListener('click', this.clickListener);
    document.removeEventListener('keydown', this.keyListener);

    const lightbox = document.querySelector('.toolkit-lightbox');
    if (lightbox) {
      lightbox.classList.remove('preventscroll');
    }

    const removed = lightboxes.pop();
    if (removed !== this.lightboxId) {
      log('Lightbox stack is corrupted');
    }
  }

  clickListener(evt: MouseEvent): void {
    // closes lightbox if clicked on container only, so the prosesshjelp cam be used
    if (evt.target && this.ctrls.container === evt.target && !this.props.noAbort) {
      evt.stopPropagation();
      this.close();
    }
  }

  keyListener(e: KeyboardEvent): void {
    if (e.keyCode === keyCode.ESC && !this.props.noAbort) {
      e.stopPropagation();
      if (lightboxes[lightboxes.length - 1] === this.lightboxId) {
        this.close();
      }
    }
  }

  render() {
    const closeText = 'Lukk'; // TODO: Replace with resource values
    /* tslint:disable */
    const lightboxOverlayClasses: string = classNames({
      'toolkit-lightbox__overlay': true,
      'toolkit-lightbox__overlay--lowerzindex': this.props.isProsessHjelpenAvailable,
    });

    const lightboxContainerClasses: string = classNames(
      {
        'toolkit-lightbox__container': true,
        'toolkit-lightbox__container--lowerzindex': this.props.isProsessHjelpenAvailable,
        'toolkit-lightbox__container--small': this.props.small,
        'toolkit-lightbox__container--medium': this.props.medium,
        'toolkit-lightbox__container--large': this.props.large,
        'toolkit-lightbox__container--nopadding': this.props.noPadding,
        'toolkit-lightbox__container--multistep': this.props.multistep,
      },
      this.props.wrapperClassName,
    );

    const lightboxContentClasses: string = classNames(
      {
        'toolkit-lightbox__content': true,
      },
      this.props.className,
    );

    /* tslint:enable */
    let actionButtons: JSX.Element | null = null;
    let closeButton: JSX.Element | null = null;
    if (!this.props.noCloseButton) {
      actionButtons = (
        <div className="toolkit-lightbox__actionconfirmationprompt mol_actionconfirmationprompt">
          <button
            className={
              this.props.actionCancelButton
                ? 'toolkit-lightbox__actionbutton atom_actionbutton'
                : 'toolkit-lightbox__cancelbutton cancelbutton'
            }
            onClick={this.close}
            type="button">
            {closeText}
          </button>
        </div>
      );
    }

    if (!this.props.noAbort) {
      closeButton = (
        <button
          className="toolkit-lightbox__closebutton toolkit-lightbox__closebutton--labelinvisible atom_inline-btn labelinvisible close"
          onClick={this.close}
          type="button">
          <span>{closeText}</span>
        </button>
      );
    }

    let hideStyle: React.CSSProperties | undefined;
    if (this.props.hide) {
      hideStyle = {display: 'none'};
    }

    const content = this.props.isVisible ? (
      <div className="toolkit-lightbox">
        <div className={lightboxOverlayClasses} ref={(overlay: HTMLDivElement) => (this.ctrls.overlay = overlay)} />
        <div style={hideStyle} role="dialog" aria-hidden={!this.props.isVisible}>
          <div
            className={lightboxContainerClasses}
            ref={(container: HTMLDivElement) => (this.ctrls.container = container)}>
            <div className={lightboxContentClasses} ref={(inner: HTMLDivElement) => (this.ctrls.inner = inner)}>
              {!this.props.noAbort && !this.props.noPadding ? (
                <div className="toolkit-lightbox__closebuttonplaceholder" />
              ) : null}
              {this.props.children}
              {actionButtons}
              {closeButton}
            </div>
          </div>
        </div>
      </div>
    ) : null;

    return this.props.energize ? <RenderToBody>{content}</RenderToBody> : content;
  }
}
