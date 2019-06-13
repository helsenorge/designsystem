import * as React from './node_modules/react';
import * as classNames from './node_modules/classnames';
import keyCode from '../../../utils/key-code';
import {getColumns} from '../../../utils/getcolumns';
import {trackArticleTab} from '../../../utils/adobe-analytics';

import * as deprecated from './node_modules/jquery';

export interface TabState {
  isMobile: boolean;
  tabs: Array<TabElement>;
  selectedTabIndex: number;
  scrollCounter: number;
  hasOverflow: boolean;
}
export interface TabProps {
  dropdown?: boolean;
  onTabSelected?: (index: number) => void;
  children?: React.ReactNode[];
  tabClassnames?: string[];
  tabWrapperClassnames?: string;
  initialTabIndex?: number;
}

export interface TabsObject {
  tabs: Array<TabElement>;
  selectedTabIndex: number;
}

export interface ReactChild extends React.ReactElement<Object> {
  type: TabType;
  props: ReactChildProps;
}

export interface ReactChildProps {
  labelledBy?: string;
  id?: string;
  selected?: boolean;
  key?: string;
}

export interface TabType extends React.ComponentClass<Object> {
  isTab: boolean;
}

export interface TabElement {
  props: TabElementProps;
}

export interface TabElementProps {
  title: string;
}

export interface KeyboardEventWithTarget extends React.KeyboardEvent<{}> {
  target: Element;
}

export default class Tabs extends React.Component<TabProps, TabState> {
  static defaultProps: TabProps = {
    initialTabIndex: 0,
  };
  refs: {
    [key: string]: Element;
  };

  constructor(props: TabProps) {
    super(props);
    const tabs: TabsObject = this._checkChildren(props, props.initialTabIndex || 0);
    const mobile: boolean = getColumns() < 3;
    this.state = {
      tabs: tabs.tabs,
      selectedTabIndex: tabs.selectedTabIndex,
      isMobile: mobile,
      scrollCounter: 0,
      hasOverflow: false,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.setSelectedIndex = this.setSelectedIndex.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener('resize', this.handleResize);
    const hasOverflow = this.hasOverflow();
    this.setState({
      hasOverflow,
    });
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize);
  }
  componentDidUpdate(_prevProps: TabProps, prevState: TabState) {
    // Update focus to the correct element
    const tabs = this._checkChildren(this.props, this.state.selectedTabIndex);
    if (
      document.activeElement &&
      document.activeElement.id.startsWith('tab-') &&
      document.activeElement.id !== `tab-${tabs.selectedTabIndex}`
    ) {
      (this.refs[`tab-${tabs.selectedTabIndex}`] as HTMLElement).focus();
    }
    if (prevState.selectedTabIndex !== this.state.selectedTabIndex) {
      // Update AdobeAnalytics
      trackArticleTab(tabs.tabs[this.state.selectedTabIndex].props.title);
    }
  }

  handleResize(): void {
    let isMobile = this.state.isMobile;
    let hasOverflow = this.state.hasOverflow;
    let hasChanges = false;
    if (this.hasOverflow() !== hasOverflow) {
      hasOverflow = !hasOverflow;
      hasChanges = true;
    }
    if (isMobile !== getColumns() < 3) {
      hasChanges = true;
      isMobile = !isMobile;
    }
    if (hasChanges) {
      this.setState({isMobile, hasOverflow});
    }
  }
  _checkChildren(props: TabProps, index: number): TabsObject {
    const tabs: Array<TabElement> = [];
    let selectedTabIndex = index;
    let externallyManaged = false;
    React.Children.forEach(props.children, child => {
      if ((child as ReactChild).type.prototype.isTab) {
        if ((child as ReactChild).props.selected) {
          externallyManaged = true;
        }
      }
    });
    React.Children.forEach(props.children, (child, i) => {
      if ((child as ReactChild).type.prototype.isTab) {
        let selected = false;
        if ((child as ReactChild).props.selected) {
          selectedTabIndex = i;
          selected = true;
        }
        selected = externallyManaged ? selected : index === i;
        const props: ReactChildProps = {labelledBy: `tab-${i}`, id: `tabPanel-${i}`, key: `tabPanel-${i}`, selected};
        const tab: JSX.Element = React.cloneElement(child as React.ReactElement<Object>, props);
        tabs.push(tab);
      }
    });

    return {tabs, selectedTabIndex};
  }

  _createHeaders(tabs: Array<TabElement>, selectedTabIndex: number): Array<JSX.Element> {
    const tabHeaders: Array<JSX.Element> = tabs.map((el, i) => {
      const isSelected: boolean = i === selectedTabIndex;
      let classes = '';
      if (this.props.tabClassnames) {
        classes = classNames('tab', {selected: isSelected}, this.props.tabClassnames[i]);
      } else {
        classes = classNames('tab', {selected: isSelected});
      }

      const boundClick: React.MouseEventHandler<{}> = this.handleClick.bind(this, i);
      // Should only be tabbable if selected (W3)
      const tabIndex: number = isSelected ? 0 : -1;
      const tabHeaderKey = `tabheader${i}`;
      return (
        <li className={classes} key={tabHeaderKey}>
          <a
            href=""
            tabIndex={tabIndex}
            aria-selected={isSelected}
            aria-controls={`tabPanel-${i}`}
            id={`tab-${i}`}
            onClick={boundClick}
            role="tab"
            ref={`tab-${i}`}
            className="tab-anchor">
            {el.props.title}
          </a>
        </li>
      );
    });
    return tabHeaders;
  }

  isTabNode(node: Element): boolean {
    return node.nodeName === 'A' && node.getAttribute('role') === 'tab';
  }

  setSelectedIndex(index: number): void {
    this.setState({selectedTabIndex: index});
  }

  handleClick(index: string, evt?: Event): void {
    const newIndex = parseInt(index, 10);
    this.setSelectedIndex(newIndex);
    if (this.props.onTabSelected) {
      this.props.onTabSelected(newIndex);
    }
    // Prevent refresh
    if (evt) {
      evt.preventDefault();
    }
    if (this.state.hasOverflow) {
      this.animate(newIndex);
    }
  }

  scrollLeft() {
    let index = this.state.scrollCounter;
    let tab = index - 1 > 0 ? index - 1 : 0;
    this.animate(tab);
  }

  scrollRight() {
    let index = this.state.scrollCounter;
    let tabs = document.getElementsByClassName('tab-anchor');
    let tab = index + 1 < tabs.length - 1 ? index + 1 : tabs.length - 1;
    this.animate(tab);
  }

  animate(index: number) {
    let tabs = document.getElementsByClassName('tab-anchor');
    this.setState({
      scrollCounter: index,
    });
    let nextTab = tabs[index] as HTMLAnchorElement;
    let targetOffsetLeft = nextTab.offsetLeft;
    let targetWidth = nextTab.clientWidth;
    let windowWidth = window.innerWidth;
    let newScroll = targetOffsetLeft + 8 - windowWidth / 2 + targetWidth / 2;
    deprecated('.tabs__list')
      .stop()
      .animate(
        {
          scrollLeft: newScroll,
        },
        500,
      );
  }

  handleKeyDown(event: React.KeyboardEvent<{}>): void {
    if (this.isTabNode((event as KeyboardEventWithTarget).target)) {
      let selectedTabIndex: number = this.state.selectedTabIndex;
      let preventDefault = false;
      let arrowKeyPressed = false;
      if (event.keyCode === keyCode.UP || event.keyCode === keyCode.LEFT) {
        if (selectedTabIndex === 0) {
          selectedTabIndex = this.state.tabs.length - 1;
        } else {
          selectedTabIndex = selectedTabIndex - 1;
        }
        preventDefault = true;
        arrowKeyPressed = true;
      } else if (event.keyCode === keyCode.DOWN || event.keyCode === keyCode.RIGHT) {
        if (selectedTabIndex === this.state.tabs.length - 1) {
          selectedTabIndex = 0;
        } else {
          selectedTabIndex = selectedTabIndex + 1;
        }
        preventDefault = true;
        arrowKeyPressed = true;
      }
      if (this.props.onTabSelected && arrowKeyPressed) {
        this.props.onTabSelected(selectedTabIndex);
      }
      this.setSelectedIndex(selectedTabIndex);

      // Prevent scrollbar from moving
      if (preventDefault) {
        event.preventDefault();
      }
    }
  }

  hasOverflow() {
    const tabsList = document.getElementsByClassName('tabs__list')[0];
    if (tabsList) {
      const scrollWidth = tabsList.scrollWidth;
      const windowWidth = window.innerWidth;
      return scrollWidth > windowWidth;
    }
    return false;
  }

  render(): JSX.Element {
    let tabs: JSX.Element;
    const tabsObject: TabsObject = this._checkChildren(this.props, this.state.selectedTabIndex);
    const allTabs = tabsObject.tabs;
    const selectedTabIndex = tabsObject.selectedTabIndex;
    const tabClass = this.props.tabWrapperClassnames ? this.props.tabWrapperClassnames : '';
    const showLeftScroll = this.state.scrollCounter > 0 && this.state.hasOverflow;
    const showRightScroll = this.state.scrollCounter < allTabs.length - 1 && this.state.hasOverflow;
    const tabsClassnames = classNames('mol_tabs', tabClass);
    const tabHeaders: Array<JSX.Element> = this._createHeaders(allTabs, selectedTabIndex);
    tabs = (
      <div>
        <div className={tabsClassnames}>
          {showLeftScroll ? (
            <button
              className="tabs__scrollbutton tabs__scrollbutton--left"
              onClick={this.scrollLeft}
              aria-hidden="true"
              aria-label="Scroll venstre"
            />
          ) : null}
          <ul className="tabs__list" role="tablist" onKeyDown={this.handleKeyDown}>
            {tabHeaders}
          </ul>
          {showRightScroll ? (
            <button
              className="tabs__scrollbutton tabs__scrollbutton--right"
              onClick={this.scrollRight}
              aria-hidden="true"
              aria-label="Scroll høyre"
            />
          ) : null}
        </div>
      </div>
    );

    return (
      <div>
        {tabs}
        {allTabs}
      </div>
    );
  }
}
