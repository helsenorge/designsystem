import classNames from 'classnames';

import type { PaletteNames } from '../../theme/palette';
import type { SvgIcon } from '../Icon';
import type { IconName } from '../Icons/IconNames';
import type { TitleTags } from '../Title';

import { useBreakpoint, Breakpoint } from '../..';
import { AnalyticsId } from '../../constants';
import Icon, { IconSize } from '../Icon';
import LazyIcon from '../LazyIcon';
import Title from '../Title';

import styles from './styles.module.scss';

export type HighlightPanelColors = Extract<PaletteNames, 'white' | 'neutral' | 'blueberry' | 'cherry'>;

export type HighlightPanelTags = Exclude<
  keyof HTMLElementTagNameMap,
  'dir' | 'font' | 'frame' | 'frameset' | 'marquee' | 'applet' | 'basefont' | 'search'
>;

export type HighlightPanelVariants = 'normal' | 'compact';

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
  /** Uses the compact styling if set to compact */
  variant?: HighlightPanelVariants;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Element that is set after the icon-element in the DOM, often a title-element */
  title?: string;
  /** Markup props for title */
  titleHtmlMarkup?: TitleTags;
}

const HighlightPanel: React.FC<HighlightPanelProps> = props => {
  const {
    children,
    color = 'white',
    testId,
    svgIcon,
    htmlMarkup = 'div',
    className,
    variant = 'normal',
    title,
    titleHtmlMarkup = 'h2',
  } = props;
  const breakpoint = useBreakpoint();

  const containerClassName = classNames(
    styles.highlightpanel,
    styles[`highlightpanel--${color}`],
    svgIcon && styles['highlightpanel--has-icon'],
    className,
    { [styles['highlightpanel--compact']]: variant === 'compact' }
  );

  const renderContent = (): React.ReactNode => {
    const titleElement = title && (
      <Title testId="titleId" htmlMarkup={titleHtmlMarkup} appearance={variant === 'compact' ? 'title6' : 'title4'}>
        {title}
      </Title>
    );

    if (svgIcon) {
      const iconSize = IconSize.Small;

      if (variant === 'compact') {
        return (
          <>
            <div className={classNames(styles.highlightpanel__icon, styles['highlightpanel__icon--compact'])}>
              {typeof svgIcon === 'string' ? <LazyIcon iconName={svgIcon} size={iconSize} /> : <Icon svgIcon={svgIcon} size={iconSize} />}
            </div>
            <div className={(styles.highlightpanel__content, styles['highlightpanel__content--compact'])}>
              {title && <div className={styles['highlightpanel__title-wrapper']}>{titleElement}</div>}
              <div className={styles['highlightpanel__content__children--compact']}>{children}</div>
            </div>
          </>
        );
      }

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
