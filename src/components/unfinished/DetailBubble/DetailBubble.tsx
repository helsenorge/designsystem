import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import Events from '../../../utils/events';
import Dom from '../../../utils/dom';

let count = 0;

export interface DetailBubbleState {
  bubbleOpen?: boolean;
}
export interface DetailBubbleProps {
  children?: JSX.Element;
  customClasses?: string;
  left?: boolean;
  right?: boolean;
}

export class DetailBubble extends React.Component<DetailBubbleProps, DetailBubbleState> {
  private manuallyBindClickAway: boolean;
  private guid: string;

  constructor(props: DetailBubbleProps) {
    super(props);
    this.handlebubbleClick = this.handlebubbleClick.bind(this);
    this.componentClickAway = this.componentClickAway.bind(this);
    this.checkClickAway = this.checkClickAway.bind(this);
    this.bindClickAway = this.bindClickAway.bind(this);
    this.unbindClickAway = this.unbindClickAway.bind(this);
    this.hideOnBubbleContentClick = this.hideOnBubbleContentClick.bind(this);
    this.state = {bubbleOpen: false};
  }

  componentWillMount(): void {
    this.guid = `bubble-${count++}`;
  }

  componentDidMount(): void {
    if (!this.manuallyBindClickAway) {
      this.bindClickAway();
    }
  }

  componentDidUpdate(): void {
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof Element) {
      const openDetailsElement = node.querySelector('.js-action-open-document');
      if (openDetailsElement) {
        openDetailsElement.removeEventListener('click', this.openDocumentEventListener.bind(this));
        openDetailsElement.addEventListener('click', this.openDocumentEventListener.bind(this));
      }
    }
    const bubbleNode = ReactDOM.findDOMNode(this);
    if (bubbleNode instanceof Element) {
      const bubbleContent = bubbleNode.querySelector('.atom_detail-bubble__content');
      if (bubbleContent) {
        bubbleContent.removeEventListener('click', this.hideOnBubbleContentClick.bind(this));
        bubbleContent.addEventListener('click', this.hideOnBubbleContentClick.bind(this));
      }
    }
  }

  componentWillUnmount(): void {
    this.unbindClickAway();
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof Element) {
      const openDetailsElement = node.querySelector('.js-action-open-document');
      if (openDetailsElement) {
        openDetailsElement.removeEventListener('click', this.openDocumentEventListener.bind(this));
      }
    }
    const bubbleNode = ReactDOM.findDOMNode(this);
    if (bubbleNode instanceof Element) {
      const bubbleContent = bubbleNode.querySelector('.atom_detail-bubble__content');
      if (bubbleContent) {
        bubbleContent.removeEventListener('click', this.hideOnBubbleContentClick.bind(this));
      }
    }
  }

  hideOnBubbleContentClick(): void {
    setTimeout(() => {
      this.componentClickAway();
    }, 0);
  }

  openDocumentEventListener(event: React.MouseEvent<{}>): void {
    const url = (event.target as Element).getAttribute('href');
    if (url) {
      const newTab = window.open(url);
      if (newTab) {
        newTab.focus();
      }
    }
    this.handlebubbleClick(event);
  }

  bindClickAway(): void {
    Events.on(document, 'mouseup', this.checkClickAway);
    Events.on(document, 'touchend', this.checkClickAway);
  }

  checkClickAway(event: MouseEvent): void {
    const el = ReactDOM.findDOMNode(this);

    if (
      event.target !== el &&
      el instanceof Element &&
      !Dom.isDescendant(el, event.target as Element) &&
      document.documentElement.contains(event.target as Node)
    ) {
      if (this.componentClickAway) {
        this.componentClickAway();
      }
    }
  }

  unbindClickAway(): void {
    Events.off(document, 'mouseup', this.checkClickAway);
    Events.off(document, 'touchend', this.checkClickAway);
  }

  componentClickAway(): void {
    this.setState({
      bubbleOpen: false,
    });
  }

  handlebubbleClick(event: React.MouseEvent<{}>): void {
    this.setState({
      bubbleOpen: !this.state.bubbleOpen,
    });
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    const openText = 'Åpne meny med flere alternativer'; // TODO: Replace with resource values

    let bubbleClasses: string = classNames('atom_detail-bubble', {
      'atom_detail-bubble--open': this.state.bubbleOpen,
      'atom_detail-bubble--left': this.props.left,
      'atom_detail-bubble--right': this.props.right,
    });

    if (this.props.customClasses) {
      bubbleClasses += ' ' + this.props.customClasses;
    }

    let content: React.ReactNode = null;
    if (this.state.bubbleOpen) {
      content = this.props.children;
    }

    return (
      <div className={bubbleClasses}>
        <button
          type="button"
          className="atom_inline-btn labelinvisible function atom_detail-bubble__button"
          aria-haspopup={true}
          aria-expanded={this.state.bubbleOpen}
          aria-controls={this.guid}
          onClick={this.handlebubbleClick}>
          <span>{openText}</span>
        </button>
        <div id={this.guid} className="atom_detail-bubble__wrapper">
          <div className="atom_detail-bubble__content">{content}</div>
        </div>
      </div>
    );
  }
}
