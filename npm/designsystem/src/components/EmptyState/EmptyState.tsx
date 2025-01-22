import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import Title, { TitleTags } from '../Title';
import EmptyBoxBeeMedium from './EmptyBoxBeeMedium';
import EmptyBoxBeeSmall from './EmptyBoxBeeSmall';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { IllustrationColor } from '../Illustration';
import EmptyBoxBeeCompact from './EmptyBoxBeeCompact';

import styles from './styles.module.scss';

export type EmptyStateType = 'dashed' | 'blank';
export type EmptyStateSize = 'normal' | 'compact';

export enum EmptyStateOnColor {
  onwhite = 'onwhite',
  onblueberry = 'onblueberry',
  oncherry = 'oncherry',
}

export interface EmptyStateIllustrationProps {
  color: IllustrationColor;
  svgProperties?: React.SVGProps<SVGSVGElement>;
}

export interface EmptyStateProps {
  /** Additional text rendered under the title.  */
  additionalText?: React.ReactNode;
  /** Color of the illustration */
  onColor?: EmptyStateOnColor;
  /** Normal or compact size */
  size?: EmptyStateSize;
  /** The main message in the component  */
  title: React.ReactNode;
  /** Markup props for title. Default: h2 */
  titleHtmlMarkup?: TitleTags;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Styling of the border */
  type?: EmptyStateType;
}

const EmptyState: React.FC<EmptyStateProps> = props => {
  const { onColor = 'neutral', titleHtmlMarkup, testId, type = 'dashed', size = 'normal', title, additionalText } = props;
  const classes = classNames(styles.emptystate, {
    [styles['emptystate--dashed']]: type === 'dashed',
    [styles['emptystate--blank']]: type === 'blank',
    [styles['emptystate--compact']]: size === 'compact',
  });
  const breakpoint = useBreakpoint();
  let color: IllustrationColor;
  switch (onColor) {
    case 'onblueberry':
      color = 'blueberry';
      break;
    case 'oncherry':
      color = 'cherry';
      break;
    case 'onwhite':
    default:
      color = 'neutral';
      break;
  }

  let illustrationComponent;
  if (size === 'compact') {
    illustrationComponent = (
      <EmptyBoxBeeCompact svgProperties={{ 'aria-hidden': 'true', role: 'presentation', focusable: 'false' }} color={'neutral'} />
    );
  } else if (breakpoint <= Breakpoint.sm) {
    illustrationComponent = (
      <EmptyBoxBeeSmall color={color} svgProperties={{ 'aria-hidden': 'true', role: 'presentation', focusable: 'false' }} />
    );
  } else {
    illustrationComponent = (
      <EmptyBoxBeeMedium color={color} svgProperties={{ 'aria-hidden': 'true', role: 'presentation', focusable: 'false' }} />
    );
  }

  return (
    <div className={classes} data-testid={testId} data-analyticsid={AnalyticsId.EmptyState}>
      <div className={styles['emptystate__illustration']}>{illustrationComponent}</div>
      <div className={styles['emptystate__text']}>
        {size == 'normal' ? (
          <Title appearance={breakpoint < Breakpoint.md ? 'title4' : 'title3'} htmlMarkup={titleHtmlMarkup || 'h2'}>
            {title}
          </Title>
        ) : (
          <span>{title}</span>
        )}
        {size == 'normal' && additionalText && <span className={styles['emptystate__additional-text']}>{additionalText}</span>}
      </div>
    </div>
  );
};

export default EmptyState;
