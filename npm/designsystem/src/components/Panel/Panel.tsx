import React from 'react';

import classNames from 'classnames';

import { LanguageLocales } from '../../constants';
import { PaletteNames } from '../../theme/palette';
import Button from '../Button';
import Icon, { IconSize } from '../Icon';
import PanelTitle, { PanelTitleProps } from './PanelTitle';
import { getResources } from './resourceHelper';
import { HNDesignsystemPanel } from '../../resources/Resources';
import { useLanguage } from '../../utils/language';
import ChevronDown from '../Icons/ChevronDown';
import ChevronRight from '../Icons/ChevronRight';
import ChevronUp from '../Icons/ChevronUp';

import styles from './styles.module.scss';

export enum PanelLayout {
  vertical = 'vertical',
  horizontal = 'horizontal',
  combined = 'combined',
  bAsRightCol = 'bAsRightCol',
}

export type PanelColors = Extract<PaletteNames, 'white' | 'neutral'>;

export enum PanelVariant {
  fill = 'fill',
  line = 'line',
  outline = 'outline',
}

export enum PanelStacking {
  default = 'default',
  bFirst = 'bFirst',
}

export enum PanelStatus {
  none = 'none',
  new = 'new',
  error = 'error',
  draft = 'draft',
}

export interface PanelProps {
  /** Sets the text on the bottom call to action button */
  buttonBottomText?: string;
  /** Sets the action on the bottom call to action button */
  buttonBottomOnClick?: () => void;
  /** Sets the layout and order of the content boxes */
  layout?: PanelLayout;
  /** Sets the visual variant of panel */
  variant?: PanelVariant;
  /** Sets the color for panel if it has variant fill */
  color?: PanelColors;
  /** Sets classes on the outermost container of the panel */
  className?: string;
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
const PanelRoot = React.forwardRef(function PanelForwardedRef(
  {
    layout = PanelLayout.vertical,
    variant = PanelVariant.fill,
    color = 'neutral',
    stacking = PanelStacking.default,
    testId,
    children,
    status = PanelStatus.none,
    buttonBottomOnClick,
    buttonBottomText,
    className,
    resources,
  }: PanelProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [preContainer, setPreContainer] = React.useState<React.ReactNode[]>([]);
  const [title, setTitle] = React.useState<React.ReactNode[]>([]);
  const [content, setContent] = React.useState<React.ReactNode[]>([]);
  const [expandableContent, setExpandableContent] = React.useState<React.ReactNode[]>([]);
  const [hasIcon, setHasIcon] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
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
    let localHasIcon = false;
    const newPreContainer: React.ReactNode[] = [];
    const newTitle: React.ReactNode[] = [];
    const newContent: React.ReactNode[] = [];
    const newExpandableContent: React.ReactNode[] = [];

    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === PreContainer) {
          newPreContainer.push(child);
        } else if (child.type === PanelTitle) {
          newTitle.push(child);
          if (child.props.icon) {
            localHasIcon = true;
          }
        } else if (child.type === A || child.type === B || child.type === C) {
          newContent.push(child);
        } else if (child.type === ExpandedContent) {
          newExpandableContent.push(child);
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
    // Scroller oppover når expanded content åpnes
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

  return expandableContent.length > 0 ? (
    <div className={outerClassnames}>
      <div className={classNames({ [styles['panel__border--outline--inner']]: variant === PanelVariant.outline })}>
        <div className={expanderBorderLayout}>
          <div className={panelClassnames} data-testid={testId} ref={panelRef}>
            {preContainer}
            {title}
            <div className={contentContainerLayout}>{content}</div>
            <ExpandButton onClick={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} resources={mergedResources} />
            {isExpanded && (
              <div ref={expandedContentRef} data-testid={testId + '-details'}>
                <div className={styles['panel__expander__separator']} />
                {expandableContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={outerClassnames}>
      <div className={classNames({ [styles['panel__border--outline--inner']]: variant === PanelVariant.outline })}>
        <div className={panelClassnames} data-testid={testId} ref={panelRef}>
          {preContainer}
          {title}
          <div className={contentContainerLayout}>{content}</div>
          {buttonBottomText && buttonBottomOnClick && (
            <div className={styles['panel__button-bottom']}>
              <Button variant="borderless" type="button" size="medium" onClick={buttonBottomOnClick}>
                {buttonBottomText}
                <Icon svgIcon={ChevronRight} size={IconSize.XSmall} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

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
