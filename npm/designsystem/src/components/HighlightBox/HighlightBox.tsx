import React from 'react';
import classNames from 'classnames';
import { PaletteNames } from '../../theme/palette';

import styles from './styles.module.scss';
import { AnalyticsId } from '../../constants';

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
  /** Changes the underlying element. Default: div */
  htmlMarkup?: HighlightBoxTags;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HighlightBox: React.FC<HighlightBoxProps> = props => {
  const { children, color = 'white', size = HighlightBoxSize.medium, testId, htmlMarkup = 'div' } = props;

  const containerClassName = classNames(styles.highlightbox, styles[`highlightbox--${color}`], styles[`highlightbox--${size}`]);

  const CustomTag = htmlMarkup;

  if (props.size === HighlightBoxSize.fluid) {
    return (
      <CustomTag className={containerClassName} data-testid={testId}>
        {children}
      </CustomTag>
    );
  }

  return (
    <div className={containerClassName}>
      <div className={styles.highlightbox__row}>
        <CustomTag className={styles.highlightbox__col} data-testid={testId} data-analyticsid={AnalyticsId.HighlightBox}>
          {children}
        </CustomTag>
      </div>
    </div>
  );
};

export default HighlightBox;
