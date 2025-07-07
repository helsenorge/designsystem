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

export type HighlightPanelTags = Exclude<
  keyof HTMLElementTagNameMap,
  'dir' | 'font' | 'frame' | 'frameset' | 'marquee' | 'applet' | 'basefont' | 'search'
>;

export interface HighlightPanelProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Changes the background color. Default: white */
  color?: HighlightPanelColors;
  /** Adds an icon to the highlightpanel. */
  svgIcon?: SvgIcon | IconName;
  /** Changes the underlying element. Default: div */
  htmlMarkup?: HighlightPanelTags;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Element that is set after the icon-element in the DOM, often a title-element */
  title?: string;
  /** Markup props for title */
  titleHtmlMarkup?: TitleTags;
}

const HighlightPanel: React.FC<HighlightPanelProps> = props => {
  const { children, color = 'white', testId, svgIcon, htmlMarkup = 'div', className, title, titleHtmlMarkup = 'h2' } = props;
  const breakpoint = useBreakpoint();

  const containerClassName = classNames(
    styles.highlightpanel,
    styles[`highlightpanel--${color}`],
    svgIcon && styles['highlightpanel--has-icon'],
    className
  );

  const renderContent = (): React.ReactNode => {
    const titleElement = title && (
      <Title testId="titleId" htmlMarkup={titleHtmlMarkup} appearance="title4">
        {title}
      </Title>
    );

    if (svgIcon) {
      const iconSize = IconSize.Small;

      return (
        <>
          <div className={styles.highlightpanel__icon}>
            {typeof svgIcon === 'string' ? <LazyIcon iconName={svgIcon} size={iconSize} /> : <Icon svgIcon={svgIcon} size={iconSize} />}
            {title && breakpoint < Breakpoint.md && <div className={styles['highlightpanel__title-wrapper']}>{titleElement}</div>}
          </div>
          <div className={styles.highlightpanel__content}>
            {title && breakpoint >= Breakpoint.md && <div className={styles['highlightpanel__title-wrapper']}>{titleElement}</div>}
            {children}
          </div>
        </>
      );
    }

    return (
      <>
        {title && (
          <div className={styles.highlightpanel__content}>
            <div>{titleElement}</div>
          </div>
        )}
        {children}
      </>
    );
  };

  const CustomTag = htmlMarkup;

  return (
    <CustomTag className={containerClassName} data-testid={testId} data-analyticsid={AnalyticsId.HighlightPanel}>
      {renderContent()}
    </CustomTag>
  );
};

export default HighlightPanel;
