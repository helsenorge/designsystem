import React from 'react';

import classNames from 'classnames';

import { useBreakpoint, Breakpoint } from '../..';
import { AnalyticsId } from '../../constants';
import { breakpoints } from '../../theme/grid';
import { PaletteNames } from '../../theme/palette';
import Icon, { SvgIcon, IconSize } from '../Icons';

import styles from './styles.module.scss';

export type HighlightBoxColors = Extract<PaletteNames, 'white' | 'blueberry' | 'cherry' | 'neutral' | 'kiwi' | 'plum'>;

export enum HighlightBoxSize {
  medium = 'medium',
  large = 'large',
  fluid = 'fluid',
}

export type HighlightBoxTags = Exclude<
  keyof HTMLElementTagNameMap,
  'dir' | 'font' | 'frame' | 'frameset' | 'marquee' | 'applet' | 'basefont'
>;

interface HighlightBoxProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Changes the background color. Default: white */
  color?: HighlightBoxColors;
  /** Changes the size. Default: medium */
  size?: keyof typeof HighlightBoxSize;
  /** Adds an icon to the highlightbox. */
  svgIcon?: SvgIcon;
  /** Changes the underlying element. Default: div */
  htmlMarkup?: HighlightBoxTags;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Element that is set after the icon-element in the DOM, often a title-element */
  afterIconElement?: React.ReactNode;
}

interface WrapperProps {
  className: string;
  size?: keyof typeof HighlightBoxSize;
}

const Wrapper: React.FC<WrapperProps> = ({ className, size, children }) => (
  <div className={className} data-testid={'highlightbox-wrapper'}>
    <div className={styles.highlightbox__row}>
      <div className={classNames(styles.highlightbox__col, size === HighlightBoxSize.medium && styles['highlightbox__col--offset'])}>
        {children}
      </div>
    </div>
  </div>
);

const ContentWrapper: React.FC = ({ children }) => (
  <div className={styles['highlightbox__content-wrapper']}>
    <div className={classNames(styles.highlightbox__row)}>{children}</div>
  </div>
);

const HighlightBox: React.FC<HighlightBoxProps> = props => {
  const {
    children,
    color = 'white',
    size = HighlightBoxSize.medium,
    testId,
    svgIcon,
    htmlMarkup = 'div',
    className,
    afterIconElement,
  } = props;
  const breakpoint = useBreakpoint();

  const containerClassName = classNames(
    styles['highlightbox'],
    styles[`highlightbox--${color}`],
    styles[`highlightbox--${size}`],
    svgIcon && styles['highlightbox--has-icon'],
    { container: size === 'medium' || size === 'large' },
    className
  );

  const renderContent = () => {
    if (svgIcon) {
      const iconSize = size === HighlightBoxSize.large && breakpoint && breakpoint >= Breakpoint.md ? IconSize.Medium : IconSize.Small;

      const mobile = breakpoint < breakpoints.md;

      return (
        <>
          <div className={styles.highlightbox__icon}>
            <Icon svgIcon={svgIcon} size={iconSize} />
            <div className={styles['highlightbox__after-icon-content']}>
              <div hidden={!mobile} aria-hidden="true">
                {afterIconElement}
              </div>
            </div>
          </div>
          <div className={styles.highlightbox__content}>
            <div hidden={mobile}>{afterIconElement}</div>
            {children}
          </div>
        </>
      );
    }

    return children;
  };

  const CustomTag = htmlMarkup;

  if (size === HighlightBoxSize.medium) {
    return (
      <Wrapper className={containerClassName} size={size}>
        <CustomTag className={styles['highlightbox__content-wrapper']} data-testid={testId} data-analyticsid={AnalyticsId.HighlightBox}>
          {renderContent()}
        </CustomTag>
      </Wrapper>
    );
  }

  if (size === HighlightBoxSize.large && svgIcon) {
    return (
      <Wrapper className={containerClassName} size={size}>
        <ContentWrapper>
          <CustomTag
            className={classNames(styles.highlightbox__col, styles['highlightbox__col--large-with-icon'])}
            data-testid={testId}
            data-analyticsid={AnalyticsId.HighlightBox}
          >
            {renderContent()}
          </CustomTag>
        </ContentWrapper>
      </Wrapper>
    );
  }

  if (size === HighlightBoxSize.large) {
    return (
      <Wrapper className={containerClassName} size={size}>
        <ContentWrapper>
          <CustomTag
            className={classNames(styles.highlightbox__col, styles['highlightbox__col--offset'])}
            data-testid={testId}
            data-analyticsid={AnalyticsId.HighlightBox}
          >
            {renderContent()}
          </CustomTag>
        </ContentWrapper>
      </Wrapper>
    );
  }

  if (size === HighlightBoxSize.fluid) {
    return (
      <CustomTag className={containerClassName} data-testid={testId}>
        {renderContent()}
      </CustomTag>
    );
  }

  return null;
};

export default HighlightBox;
