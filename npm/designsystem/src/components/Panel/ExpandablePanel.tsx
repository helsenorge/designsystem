import React from 'react';

import classNames from 'classnames';

import { A, B, C, ContentProps, PanelProps, PreContainer } from './PanelBase';
import PanelBase from './PanelBase';
import { useHover } from '../../hooks/useHover';
import Button from '../Button';
import Icon, { IconSize } from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';

import styles from './styles.module.scss';

export interface ExpandablePanelProps extends PanelProps {
  /** Control the expanded state for an expandable panel */
  expanded?: boolean;
  /** Opt-out boolean for turning off the expander button when expandable content is used */
  showExpandButton?: boolean;
  /** Text on expander button when closed */
  expandButtonTextClosed?: string;
  /** Text on expander button when open */
  expandButtonTextOpen?: string;
}

const ExpandButton = ({
  onClick,
  isExpanded,
  expandButtonTextClosed,
  expandButtonTextOpen,
}: {
  onClick: () => void;
  isExpanded: boolean | undefined;
  expandButtonTextClosed: string;
  expandButtonTextOpen: string;
}): React.JSX.Element => {
  return (
    <div>
      <Button variant="borderless" textClassName={styles['expander__button__text']} aria-expanded={isExpanded} onClick={onClick}>
        <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} isHovered={true} size={IconSize.XSmall} />
        {/* @todo: lag prop for tekst på knappen */}
        <span>{isExpanded ? expandButtonTextOpen : expandButtonTextClosed}</span>
      </Button>
    </div>
  );
};

const ExpandablePanel: React.FC<ExpandablePanelProps> & {
  PreContainer: React.FC<ContentProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
  ExpandedContent: React.FC<ContentProps>;
} = (props: ExpandablePanelProps) => {
  const { showExpandButton = true, expandButtonTextClosed = 'Se detaljer', expandButtonTextOpen = 'Skjul detaljer' } = props;
  const { content, preContainer, outerLayout, contentContainerLayout, todoRenameVariable, colorScheme } = PanelBase(props);

  const panelRef = React.useRef<HTMLDivElement>(null);
  const [customExpanderButtonRef, setCustomExpanderButtonRef] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(props.expanded);
  const expandedContentRef = React.useRef<HTMLDivElement>(null);
  const { isHovered } = useHover(panelRef);
  const [expandableContent, setExpandableContent] = React.useState<React.ReactNode[]>([]);

  React.useEffect(() => {
    setIsExpanded(props.expanded);
  }, [props.expanded]);

  React.useEffect(() => {
    const newExpandableContent: React.ReactNode[] = [];
    let localButton = null;

    React.Children.forEach(props.children, child => {
      if (React.isValidElement(child)) {
        if (child.type === ExpandedContent) {
          newExpandableContent.push(child);
        } else if (child.type === A || child.type === B || child.type === C) {
          // Hvis vertikal bruker custom knapp for å ekspandere, lagre ref til denne
          !showExpandButton &&
            React.Children.forEach(child.props.children, grandChild => {
              if (React.isValidElement(grandChild)) {
                if (grandChild.type === Button || grandChild.type === 'button' || grandChild.type === 'a') {
                  localButton = React.createRef();
                  React.cloneElement(grandChild as React.ReactElement, { ref: localButton });
                }
              }
            });
        }
      }
    });

    setExpandableContent(newExpandableContent);
    setCustomExpanderButtonRef(localButton);
  }, [props.children]);

  // kode for å scrolle til toppen av panel når det ekspanderes
  // todo: gjør denne penere, evt flytt ut til egen hook
  React.useEffect(() => {
    if (isExpanded) {
      if (panelRef.current && expandedContentRef.current) {
        const panelRect = panelRef.current.getBoundingClientRect();
        const expandedContentRect = expandedContentRef.current.getBoundingClientRect();

        const scrollAmount = Math.min(100, panelRect.top - 20);

        if (expandedContentRect.bottom > window.innerHeight) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

          window.scrollBy({
            top: scrollAmount,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
          });
        }
      }
    }
  }, [isExpanded]);

  const expanderBorderLayout = classNames(styles[`panel__expander__border--${colorScheme}`], {
    [styles['panel__expander__border--expanded']]: isExpanded,
  });

  return (
    <div className={todoRenameVariable}>
      <div className={expanderBorderLayout}>
        <div className={outerLayout} data-testid={props.testId} ref={panelRef}>
          {preContainer}
          <div className={contentContainerLayout}>{content}</div>
          {showExpandButton && (
            <ExpandButton
              onClick={() => setIsExpanded(!isExpanded)}
              isExpanded={isExpanded}
              expandButtonTextClosed={expandButtonTextClosed}
              expandButtonTextOpen={expandButtonTextOpen}
            />
          )}
        </div>
        {isExpanded && (
          <div ref={expandedContentRef} className={classNames(styles['panel__expander'], styles[`panel__expander--${colorScheme}`])}>
            <div className={styles['panel__expander__separator']} />
            {expandableContent}
          </div>
        )}
      </div>
    </div>
  );
};

export const ExpandedContent: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__expander__content']);
  return <div className={styling}>{children}</div>;
};

ExpandablePanel.PreContainer = PreContainer;
ExpandablePanel.A = A;
ExpandablePanel.B = B;
ExpandablePanel.C = C;
ExpandablePanel.ExpandedContent = ExpandedContent;

export default ExpandablePanel;
