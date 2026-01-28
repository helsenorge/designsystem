import React from 'react';

import classNames from 'classnames';

import type { PanelTitleProps } from './PanelTitle';
import type { HNDesignsystemPanel } from '../../resources/Resources';
import type { PaletteNames } from '../../theme/palette';

import { LanguageLocales } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import Button from '../Button';
import Icon, { IconSize } from '../Icon';
import { PanelLayout, PanelStacking, PanelStatus, PanelVariant } from './constants';
import PanelTitle from './PanelTitle';
import { getResources } from './resourceHelper';
import { useLanguage } from '../../hooks/useLanguage';
import { isComponent } from '../../utils/component';
import Highlighter from '../Highlighter';
import ChevronDown from '../Icons/ChevronDown';
import ChevronRight from '../Icons/ChevronRight';
import ChevronUp from '../Icons/ChevronUp';

import styles from './styles.module.scss';

export type PanelColors = Extract<PaletteNames, 'white' | 'neutral'>;

export interface PanelProps {
  /** Aria label on call to action button */
  buttonBottomAriaLabel?: string;
  /** Sets the text on the bottom call to action button */
  buttonBottomText?: string;
  /** Sets the action on the bottom call to action button */
  buttonBottomOnClick?: () => void;
  /** Expands or collapses the panel. Only applicable when ExpandedContent is used */
  expanded?: boolean;
  /** Whether the panel can be focused */
  focusable?: boolean;
  /** Sets the layout and order of the content boxes */
  layout?: PanelLayout;
  /** Sets the visual variant of panel */
  variant?: PanelVariant;
  /** Sets the color for panel if it has variant fill */
  color?: PanelColors;
  /** Sets classes on the outermost container of the panel */
  className?: string;
  /** Action called when toggling expansion of ExpandedContent */
  onExpand?: (isExpanded?: boolean) => void;
  /** Sets the stacking order of the content boxes */
  stacking?: PanelStacking;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Children elements to be rendered inside the panel */
  children?: React.ReactNode;
  /** Displays a status on the left side: default normal */
  status?: PanelStatus;
  /** Resources for component */
  resources?: Partial<HNDesignsystemPanel>;
  /** Highlights text in title and content. Used for search results */
  highlightText?: string;
  /** Ref passed to the panel container */
  ref?: React.Ref<HTMLDivElement | null>;
}

const ExpandButton = ({
  onClick,
  isExpanded,
  resources,
}: {
  onClick: () => void;
  isExpanded: boolean | undefined;
  resources: Partial<HNDesignsystemPanel>;
}): React.JSX.Element => {
  const buttonClassName = classNames(styles['expander__button'], isExpanded && styles['expander__button--expanded']);

  return (
    <Button
      variant="borderless"
      textClassName={styles['expander__button__text']}
      wrapperClassName={buttonClassName}
      aria-expanded={isExpanded}
      onClick={onClick}
    >
      <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} size={IconSize.XSmall} />
      <span>{isExpanded ? resources.expandButtonClose : resources.expandButtonOpen}</span>
    </Button>
  );
};
const PanelRoot: React.FC<PanelProps> = ({
  layout = PanelLayout.vertical,
  variant = PanelVariant.fill,
  color = 'neutral',
  stacking = PanelStacking.default,
  testId,
  children,
  expanded = false,
  focusable,
  status = PanelStatus.none,
  buttonBottomAriaLabel,
  buttonBottomOnClick,
  buttonBottomText,
  className,
  resources,
  onExpand,
  highlightText,
  ref,
}: PanelProps) => {
  const [preContainer, setPreContainer] = React.useState<React.ReactNode[]>([]);
  const [title, setTitle] = React.useState<React.ReactNode[]>([]);
  const [content, setContent] = React.useState<React.ReactNode[]>([]);
  const [expandableContent, setExpandableContent] = React.useState<React.ReactNode[]>([]);
  const [hasIcon, setHasIcon] = React.useState(false);
  const [isExpanded, setIsExpanded] = useExpand(expanded, onExpand);
  const localRef = React.useRef<HTMLDivElement>(null);
  const panelRef = ref ?? localRef;
  const expandedContentRef = React.useRef<HTMLDivElement>(null);
  const defaultScroll = 100;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemPanel = {
    ...defaultResources,
    ...resources,
  };

  React.useEffect(() => {
    let index = 0;
    let localHasIcon = false;
    const newPreContainer: React.ReactNode[] = [];
    const newTitle: React.ReactNode[] = [];
    const newContent: React.ReactNode[] = [];
    const newExpandableContent: React.ReactNode[] = [];

    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        const key = child.key ?? `panel-child-${index++}`;

        if (child.type === PreContainer) {
          newPreContainer.push(React.cloneElement(child, { key }));
        } else if (isComponent<PanelTitleProps>(child, PanelTitle)) {
          newTitle.push(
            React.cloneElement(child as React.ReactElement<PanelTitleProps>, {
              key,
              highlightText: child.props.highlightText || highlightText,
            })
          );
          if (child.props.icon) {
            localHasIcon = true;
          }
        } else if (child.type === A || child.type === B || child.type === C) {
          newContent.push(React.cloneElement(child, { key }));
        } else if (child.type === ExpandedContent) {
          newExpandableContent.push(React.cloneElement(child, { key }));
        }
      }
    });

    setPreContainer(newPreContainer);
    setTitle(newTitle);
    setContent(newContent);
    setExpandableContent(newExpandableContent);
    setHasIcon(localHasIcon);
  }, [children]);

  React.useEffect(() => {
    if (expanded) {
      // Hvis panel åpnes controlled skal ikke scroll skje
      return;
    }
    // Scroller oppover når expanded content åpnes uncontrolled
    if (isExpanded) {
      if ('current' in panelRef && panelRef.current && expandedContentRef.current) {
        const panelRect = panelRef.current.getBoundingClientRect();
        const expandedContentRect = expandedContentRef.current.getBoundingClientRect();

        const scrollAmount = Math.min(defaultScroll, panelRect.top - 20);

        // Scroller kun oppover, og kun dersom expandedContent havner utenfor skjermen når åpnet
        if (scrollAmount > 0 && expandedContentRect.bottom > window.innerHeight) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReducedMotion) {
            return;
          }
          window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [isExpanded]);

  const colorScheme = variant === PanelVariant.fill ? color : 'white';

  const outerClassnames = classNames(className, {
    [styles['panel__border--outline--outer']]: variant === PanelVariant.outline,
    [styles['panel__border--line']]: variant === PanelVariant.line,
    [styles['panel__border--fill--neutral']]: variant === PanelVariant.fill && colorScheme === 'neutral',
    [styles['panel__border--fill--new']]: variant === PanelVariant.fill && status === PanelStatus.new,
    [styles['panel__border--fill--status']]: variant === PanelVariant.fill && status !== PanelStatus.none,
  });
  const panelClassnames = classNames(styles['panel'], styles[`panel--${colorScheme}`], styles['panel--status'], {
    [styles['panel--line']]: variant === PanelVariant.line,
    [styles['panel--new']]: status === PanelStatus.new,
    [styles['panel--draft']]: status === PanelStatus.draft,
    [styles['panel--error']]: status === PanelStatus.error,
    [styles['panel--icon']]: hasIcon,
  });
  const contentContainerLayout = classNames(styles['panel__content'], styles[`panel__content--${layout}`], {
    [styles[`panel__content--b-first`]]: stacking === PanelStacking.bFirst,
  });
  const expanderBorderLayout = classNames({
    [styles['panel__expander__border--expanded']]: isExpanded && status === PanelStatus.none,
    [styles[`panel__expander__border--not-expanded--${colorScheme}`]]: !isExpanded && status === PanelStatus.none,
    [styles[`panel__expander__border--not-expanded--line`]]: !isExpanded && status === PanelStatus.none && variant === PanelVariant.line,
  });

  const handleExpandClick = (): void => {
    setIsExpanded(!isExpanded);
  };

  return expandableContent.length > 0 ? (
    <div className={outerClassnames}>
      <div className={classNames({ [styles['panel__border--outline--inner']]: variant === PanelVariant.outline })}>
        <div className={expanderBorderLayout}>
          <div className={panelClassnames} data-testid={testId} ref={panelRef} tabIndex={focusable ? -1 : undefined}>
            <Highlighter searchText={highlightText}>
              {preContainer}
              {title}
            </Highlighter>
            <div className={contentContainerLayout}>
              <Highlighter searchText={highlightText}>{content}</Highlighter>
            </div>
            <ExpandButton onClick={handleExpandClick} isExpanded={isExpanded} resources={mergedResources} />
            {isExpanded && (
              <div ref={expandedContentRef} data-testid={testId + '-details'}>
                <div className={styles['panel__expander__separator']} />
                <Highlighter searchText={highlightText}>{expandableContent}</Highlighter>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={outerClassnames}>
      <div className={classNames({ [styles['panel__border--outline--inner']]: variant === PanelVariant.outline })}>
        <div className={panelClassnames} data-testid={testId} ref={panelRef} tabIndex={focusable ? -1 : undefined}>
          <Highlighter searchText={highlightText}>
            {preContainer}
            {title}
          </Highlighter>
          <div className={contentContainerLayout}>
            <Highlighter searchText={highlightText}>{content}</Highlighter>
          </div>
          {buttonBottomText && buttonBottomOnClick && (
            <div className={styles['panel__button-bottom']}>
              <Button variant="borderless" type="button" size="medium" onClick={buttonBottomOnClick} aria-label={buttonBottomAriaLabel}>
                {buttonBottomText}
                <Icon svgIcon={ChevronRight} size={IconSize.XSmall} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export interface ContentProps {
  /** Children elements to be rendered inside the content box */
  children?: React.ReactNode;
}

export const PreContainer: React.FC<ContentProps> = ({ children }) => {
  return <div className={styles['panel__pre-container']}>{children}</div>;
};

export const A: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--a']);
  return <div className={styling}>{children}</div>;
};

export const B: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--b']);
  return <div className={styling}>{children}</div>;
};

export const C: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--c']);
  return <div className={styling}>{children}</div>;
};

export const ExpandedContent: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__expander__content']);
  return <div className={styling}>{children}</div>;
};

type PanelComponent = typeof PanelRoot & {
  PreContainer: React.FC<ContentProps>;
  Title: React.FC<PanelTitleProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
  ExpandedContent: React.FC<ContentProps>;
};
PanelRoot.displayName = 'Panel';
const Panel = PanelRoot as PanelComponent;
Panel.PreContainer = PreContainer;
Panel.Title = PanelTitle;
Panel.A = A;
Panel.B = B;
Panel.C = C;
Panel.ExpandedContent = ExpandedContent;

export default Panel;
