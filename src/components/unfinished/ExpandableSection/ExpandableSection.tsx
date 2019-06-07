import * as React from 'react';
import * as classNames from 'classnames';
import {Collapse} from 'react-collapse';
import * as tabbable from 'tabbable';
import {Spinner} from './../spinner';

import './expandable-section.scss';

let count = 0;

export class ExpandableSection extends React.Component<ExpandableSectionProps, ExpandableSectionState> {
  guid: string;
  refs: {
    [key: string]: Element;
    button: HTMLButtonElement;
    collapsecontainer: HTMLDivElement;
    header: HTMLHeadingElement;
  };

  constructor(props: ExpandableSectionProps) {
    super(props);
    this.state = {
      showContent: !!this.props.openFromStart,
      buttonFocused: false,
      tabindexRemovedOnElements: new Array(),
      animationInProgress: false,
    };
    this.focus = this.focus.bind(this);
    this.toggleShowExpanded = this.toggleShowExpanded.bind(this);
    this.buttonFocused = this.buttonFocused.bind(this);
    this.buttonBlur = this.buttonBlur.bind(this);
    this.onAnimationDone = this.onAnimationDone.bind(this);
    this.guid = `expander-section-${count++}`;
  }

  componentDidMount(): void {
    if (this.props.openFromStart) {
      this.forceUpdate();
    } // This needed to ensure the expander is expanded whe nested inside a redux container.
  }

  componentWillReceiveProps(nextProps: ExpandableSectionProps): void {
    if (this.props.openFromStart !== nextProps.openFromStart) {
      this.setState({
        showContent: nextProps.openFromStart,
      });
    }
  }

  focus(): void {
    if (this.refs.button) {
      this.refs.button.focus();
    }
  }

  onAnimationDone(): void {
    if (!this.props.hasNestedCollapse || (this.props.hasNestedCollapse && this.state.animationInProgress)) {
      this.setState(({animationInProgress}) => {
        if (animationInProgress) {
          return {
            animationInProgress: false,
            tabindexRemovedOnElements: new Array(),
          };
        }
        return null;
      });
    }
  }

  toggleShowExpanded(e: React.MouseEvent<{}>): void {
    const {animationInProgress, tabindexRemovedOnElements}: ExpandableSectionState = this.state;
    const isOpen: boolean = this.state.showContent ? this.state.showContent : false;
    if (this.props.beforeOpenClose) {
      if (this.props.beforeOpenClose(e, !isOpen) === false) {
        return;
      }
    }
    // Set tabindex of all children to -1 to prevent user from tabbing into content while closing
    let tabbableElements: Array<TabbableElement> = new Array();
    if (this.state.showContent) {
      tabbableElements = tabbable(this.refs.collapsecontainer);
      tabbableElements.forEach(el => {
        el.setAttribute('tabindex', '-1');
      });
    } else if (animationInProgress && tabindexRemovedOnElements && tabindexRemovedOnElements.length > 0) {
      // dersom man har åpner boksen igjen før lukkingen er ferdig har elementene fortsatt tabindex -1
      tabindexRemovedOnElements.forEach(el => {
        el.removeAttribute('tabindex');
      });
    }

    // Set focus to open-close button
    this.focus();

    this.setState({
      showContent: !this.state.showContent,
      animationInProgress: true,
      tabindexRemovedOnElements: tabbableElements,
    });

    if (this.props.onExpand) {
      this.props.onExpand();
    }
  }

  buttonFocused(): void {
    this.setState({buttonFocused: true});
  }

  buttonBlur(): void {
    this.setState({buttonFocused: false});
  }

  createMarkup(htmlString: string): HtmlObject {
    return {__html: htmlString};
  }

  getHeaderElement = () => {
    if (this.props.headerJSX) {
      return React.createElement('span', {}, this.props.headerJSX);
    } else if (this.props.headerHTML) {
      return React.createElement('span', {dangerouslySetInnerHTML: this.createMarkup(this.props.headerHTML)});
    } else if (this.props.headerOpen && this.state.showContent) {
      return React.createElement('span', {}, this.props.headerOpen);
    } else if (this.props.headerClosed && !this.state.showContent) {
      return React.createElement('span', {}, this.props.headerClosed);
    } else {
      return React.createElement('span', {}, this.props.header);
    }
  };

  render(): JSX.Element {
    const expanderClasses: string = classNames(
      {
        'mol_expandable-component': true,
        'mol_expandable-section': !this.props.inlineButton,
        open: this.state.showContent,
      },
      this.props.expanderClassName,
    );

    const expanderArrowClasses: string = classNames(
      'arrow',
      {open: this.state.showContent},
      {small: this.props.smallArrow},
      {right: this.props.rightArrow},
    );

    const componentClasses: string = classNames(
      {header: !this.props.inlineButton},
      {right: this.props.rightArrow},
      {focused: this.state.buttonFocused},
      this.props.buttonClassName,
    );

    const buttonClasses: string = classNames(
      {text: !this.props.inlineButton},
      {'atom_inline-navigationbutton': this.props.inlineButton},
      {'arrow-after': this.props.inlineButton && this.props.rightArrow},
      {'arrow-before': this.props.inlineButton && !this.props.rightArrow},
      {'arrow-down': this.props.inlineButton && !this.state.showContent},
      {'arrow-up': this.props.inlineButton && this.state.showContent},
      this.props.buttonElementClassName,
    );

    const containerClasses: string = classNames(
      'container',
      {'mol_expandable-section__container--inline': this.props.inlineButton && !this.props.noNestedLine},
      this.props.className,
    );

    const spinner: JSX.Element | null = this.props.showSpinner ? <Spinner local transparent mini /> : null;

    const Component: string = this.props.component ? this.props.component : 'span';
    const headerElement: React.DOMElement<{}, Element> = this.getHeaderElement();

    const descriptionHtml: React.DOMElement<{}, Element> | null = this.props.description
      ? React.createElement('span', {dangerouslySetInnerHTML: this.createMarkup(this.props.description)})
      : null;

    const buttonProps: ButtonInputProps = {};
    if (this.props.buttonId) {
      buttonProps.id = this.props.buttonId;
    }

    const htmlNode: JSX.Element = (
      <button
        type="button"
        className={buttonClasses}
        onClick={this.toggleShowExpanded}
        onFocus={this.buttonFocused}
        onBlur={this.buttonBlur}
        aria-expanded={this.state.showContent}
        aria-controls={this.guid}
        ref="button"
        {...buttonProps}>
        <span className={expanderArrowClasses} />
        {headerElement}
        {spinner}
      </button>
    );

    return (
      <div className={expanderClasses}>
        <Component className={componentClasses} ref="header">
          {htmlNode}
        </Component>
        {this.props.buttonPostfix}
        <div id={this.guid}>
          <Collapse
            isOpened={this.state.showContent ? this.state.showContent : false}
            onRest={this.onAnimationDone}
            hasNestedCollapse={this.props.hasNestedCollapse}>
            <div className={containerClasses} ref="collapsecontainer">
              {this.props.children}
              {descriptionHtml}
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

interface ButtonInputProps {
  id?: string;
}

export interface ExpandableSectionState {
  showContent?: boolean;
  buttonFocused?: boolean;
  animationInProgress?: boolean;
  tabindexRemovedOnElements?: Array<TabbableElement>;
}
export interface ExpandableSectionProps {
  children?: Object;
  /*
    Tekst som vises i expander knappen
  */
  header?: string;
  headerHTML?: string;
  headerJSX?: JSX.Element;
  headerOpen?: string;
  headerClosed?: string;
  showSpinner?: boolean;
  buttonPostfix?: Object;
  onExpand?: Function;
  openFromStart?: boolean;
  /** Html element som knappen skal wrappes i */
  component?: string;
  className?: string;
  buttonClassName?: string;
  buttonElementClassName?: string;
  expanderClassName?: string;
  rightArrow?: boolean;
  smallArrow?: boolean;
  beforeOpenClose?: (e: React.FormEvent<{}>, isOpen: boolean) => boolean;
  description?: string;
  /** Expander med liten knapp */
  inlineButton?: boolean;
  /** Ingen linje på venstre side på inlineButton expander */
  noNestedLine?: boolean;
  buttonId?: string;
  hasNestedCollapse?: boolean;
}

export interface HtmlObject {
  __html: string;
}

export interface TabbableElement {
  setAttribute: (tabIndex: string, num: string) => void;
  removeAttribute: (attribute: string) => void;
}
