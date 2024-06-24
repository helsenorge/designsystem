import React from 'react';

import classNames from 'classnames';

import { useBreakpoint, Breakpoint } from '../..';
import { AnalyticsId } from '../../constants';
import { PaletteNames } from '../../theme/palette';
import Icon, { SvgIcon, IconSize } from '../Icon';
import { IconName } from '../Icons/IconNames';
import LazyIcon from '../LazyIcon';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

export type HighlightPanelColors = Extract<PaletteNames, 'white' | 'neutral' | 'blueberry' | 'cherry'>;

export enum HighlightPanelSize {
  medium = 'medium',
  large = 'large',
  fluid = 'fluid',
}

export type HighlightPanelTags = Exclude<
  keyof HTMLElementTagNameMap,
  'dir' | 'font' | 'frame' | 'frameset' | 'marquee' | 'applet' | 'basefont' | 'search'
>;

export interface HighlightPanelProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Changes the background color. Default: white */
  color?: HighlightPanelColors;
  /** Changes the size. Default: medium */
  size?: keyof typeof HighlightPanelSize;
  /** Adds an icon to the highlightpanel. */
  svgIcon?: SvgIcon | IconName;
  /** Changes the underlying element. Default: div */
  htmlMarkup?: HighlightPanelTags;
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds custom classes to the content-wrapper */
  contentWrapperClassName?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Element that is set after the icon-element in the DOM, often a title-element */
  title?: string;
  /** Markup props for title */
  titleHtmlMarkup?: TitleTags;
}

interface WrapperProps {
  children?: React.ReactNode;
  className: string;
  size?: keyof typeof HighlightPanelSize;
}

const Wrapper: React.FC<WrapperProps> = ({ className, size, children }) => (
  <div className={className} data-testid={'highlightpanel-wrapper'}>
    <div className={styles.highlightpanel__row}>
      <div className={classNames(styles.highlightpanel__col, size === HighlightPanelSize.medium && styles['highlightpanel__col--offset'])}>
        {children}
      </div>
    </div>
  </div>
);

interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = props => {
  const { children, className } = props;
  const contentWrapperClasses = classNames(styles['highlightpanel__content-wrapper'], className);

  return (
    <div className={contentWrapperClasses}>
      <div className={classNames(styles.highlightpanel__row)}>{children}</div>
    </div>
  );
};

const HighlightPanel: React.FC<HighlightPanelProps> = props => {
  const {
    children,
    color = 'white',
    size = HighlightPanelSize.medium,
    testId,
    svgIcon,
    htmlMarkup = 'div',
    className,
    contentWrapperClassName,
    title,
    titleHtmlMarkup = 'h2',
  } = props;
  const breakpoint = useBreakpoint();

  const containerClassName = classNames(
    styles[`highlightpanel--${color}`],
    styles[`highlightpanel--${size}`],
    svgIcon && styles['highlightpanel--has-icon'],
    { container: size === 'medium' || size === 'large' },
    className
  );

  const renderContent = () => {
    if (svgIcon) {
      const iconSize = size === HighlightPanelSize.large && breakpoint && breakpoint >= Breakpoint.md ? IconSize.Medium : IconSize.Small;

      const titleElement = (
        <Title testId="titleId" htmlMarkup={titleHtmlMarkup} appearance="title4">
          {title}
        </Title>
      );

      return (
        <>
          <div className={styles.highlightpanel__icon}>
            {typeof svgIcon === 'string' ? <LazyIcon iconName={svgIcon} size={iconSize} /> : <Icon svgIcon={svgIcon} size={iconSize} />}
            {title && <div className={styles['mobile']}>{titleElement}</div>}
          </div>
          <div className={styles.highlightpanel__content}>
            {title && (
              <div className={styles['desktop']} aria-hidden="true">
                {titleElement}
              </div>
            )}
            {children}
          </div>
        </>
      );
    }

    return children;
  };

  const CustomTag = htmlMarkup;

  const contentWrapperClasses = classNames(styles['highlightpanel__content-wrapper'], contentWrapperClassName);

  if (size === HighlightPanelSize.medium) {
    return (
      <Wrapper className={containerClassName} size={size}>
        <CustomTag className={contentWrapperClasses} data-testid={testId} data-analyticsid={AnalyticsId.HighlightPanel}>
          {renderContent()}
        </CustomTag>
      </Wrapper>
    );
  }

  if (size === HighlightPanelSize.large && svgIcon) {
    return (
      <Wrapper className={containerClassName} size={size}>
        <ContentWrapper className={contentWrapperClasses}>
          <CustomTag
            className={classNames(styles.highlightpanel__col, styles['highlightpanel__col--large-with-icon'])}
            data-testid={testId}
            data-analyticsid={AnalyticsId.HighlightPanel}
          >
            {renderContent()}
          </CustomTag>
        </ContentWrapper>
      </Wrapper>
    );
  }

  if (size === HighlightPanelSize.large) {
    return (
      <Wrapper className={containerClassName} size={size}>
        <ContentWrapper className={contentWrapperClasses}>
          <CustomTag
            className={classNames(styles.highlightpanel__col, styles['highlightpanel__col--offset'])}
            data-testid={testId}
            data-analyticsid={AnalyticsId.HighlightPanel}
          >
            {renderContent()}
          </CustomTag>
        </ContentWrapper>
      </Wrapper>
    );
  }

  if (size === HighlightPanelSize.fluid) {
    return (
      <CustomTag className={containerClassName} data-testid={testId}>
        {renderContent()}
      </CustomTag>
    );
  }

  return null;
};

export default HighlightPanel;
