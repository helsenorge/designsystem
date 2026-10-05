import React from 'react';

import classNames from 'classnames';

import type { TitleProps } from '../Title';

import { AnalyticsId } from '../../constants';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import Spacer from '../Spacer';

import duolistStyles from './styles.module.scss';

export type DuolistVariants = 'normal' | 'line';
export type Border = 'no-border' | 'border';
export type HideLines = 'top' | 'bottom' | 'both';

export interface ResponsiveHideLines {
  /** Hides lines on desktop (when the list is not collapsed) */
  desktop?: HideLines;
  /** Hides lines on mobile (when the list is collapsed, see useCollapsedFromAndBelowBreakpoint) */
  mobile?: HideLines;
}
export type BoldColumn = 'first' | 'second' | 'none';
export type Formats = 'formatted' | 'non-formatted';

export interface DuolistProps {
  /** Determines which column is bold */
  boldColumn?: BoldColumn;
  /**@deprecated Border around the Duolist */
  border?: Border;
  /** Label of the Duolist */
  label?: React.ReactElement<TitleProps>;
  /** Formatted or non-formatted visual variants */
  format?: Formats;
  /** Character separator for non-formatted format */
  separator?: string;
  /** Turns the built-in padding of the list on/off. Default: true */
  padding?: boolean;
  /** Sets the visual variant of the Duolist. */
  variant?: DuolistVariants;
  /** Hides the top line, bottom line or both. Only applies to the 'line' variant.
   * Accepts a single value for all screen sizes, or an object to configure desktop and mobile (collapsed) separately. */
  hideLines?: HideLines | ResponsiveHideLines;
  /** Sets the content of the Duolist. */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Width of the description column in percentage */
  descriptionWidth?: number;
  /** Use collapsed mode on columns from chosen breakpoint and below. */
  useCollapsedFromAndBelowBreakpoint?: keyof typeof Breakpoint;
}

export interface DuolistGroupProps {
  /** Determines which column is bold */
  boldColumn?: BoldColumn;
  /** Sets content of the <dd> tag. */
  description: React.ReactNode;
  /** Formatted or non-formatted visual variants */
  format?: Formats;
  /** Character separator for non-formatted format */
  separator?: string;
  /** Sets content of the <dt> tag. */
  term: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const DuolistGroup: React.FC<DuolistGroupProps> = props => {
  const { format = 'formatted', boldColumn = format === 'non-formatted' ? 'none' : 'first', description, separator = ': ', term } = props;

  const firstBold = boldColumn === 'first';
  const secondBold = boldColumn === 'second';
  const nonFormatted = format === 'non-formatted';

  const dtClassNames = classNames(duolistStyles['duolist__dt'], {
    [duolistStyles['duolist__dt--bold']]: firstBold,
    [duolistStyles['duolist__dt--non-formatted']]: nonFormatted,
  });
  const ddClassNames = classNames(duolistStyles['duolist__dd'], {
    [duolistStyles['duolist__dd--bold']]: secondBold,
    [duolistStyles['duolist__dd--non-formatted']]: nonFormatted,
  });

  const renderContent = () => {
    return (
      <>
        <dt
          data-separator={nonFormatted ? separator : undefined}
          className={dtClassNames}
          data-testid={props.testId && `${props.testId}-term`}
        >
          {term}
        </dt>
        <dd className={ddClassNames} data-testid={props.testId && `${props.testId}-description`}>
          {description}
        </dd>
      </>
    );
  };

  return nonFormatted ? <div>{renderContent()}</div> : <>{renderContent()}</>;
};

export const Duolist: React.FC<DuolistProps> = props => {
  const {
    boldColumn,
    border = 'no-border',
    descriptionWidth,
    label,
    format = 'formatted',
    separator,
    padding = true,
    variant = 'normal',
    hideLines,
    children,
    className,
    testId,
    useCollapsedFromAndBelowBreakpoint,
  } = props;

  const hasBorder = border === 'border';
  const hasLines = variant === 'line';
  const extraPaddingTop = hasBorder && (label || hasLines);
  const nonFormatted = format === 'non-formatted';
  const breakpoint = useBreakpoint();
  const useCollapsedMode = useCollapsedFromAndBelowBreakpoint && breakpoint <= Breakpoint[useCollapsedFromAndBelowBreakpoint];
  const activeHideLines = typeof hideLines === 'object' ? (useCollapsedMode ? hideLines.mobile : hideLines.desktop) : hideLines;

  const duolistWrapperClasses = classNames(
    {
      [duolistStyles['duolist-wrapper--border']]: hasBorder,
      [duolistStyles['duolist-wrapper--extra-padding-top']]: extraPaddingTop,
    },
    className
  );

  const duolistClasses = classNames(duolistStyles.duolist, {
    [duolistStyles['duolist--line']]: hasLines,
    [duolistStyles['duolist--hide-top-line']]: hasLines && (activeHideLines === 'top' || activeHideLines === 'both'),
    [duolistStyles['duolist--hide-bottom-line']]: hasLines && (activeHideLines === 'bottom' || activeHideLines === 'both'),
    [duolistStyles['duolist--no-padding']]: !padding,
    [duolistStyles['duolist--non-formatted']]: nonFormatted,
    [duolistStyles['duolist--collapsed']]: useCollapsedMode,
    [duolistStyles['duolist--not-collapsed']]: !useCollapsedMode,
  });

  const duolistColumnStyle = descriptionWidth ? descriptionWidth + '%' : 'minmax(60%, 1fr)';

  return (
    <div className={duolistWrapperClasses} data-testid={testId} data-analyticsid={AnalyticsId.Duolist}>
      {label && (
        <>
          {label}
          <Spacer />
        </>
      )}
      <dl
        style={!nonFormatted ? { gridTemplateColumns: useCollapsedMode ? `1fr` : `auto ${duolistColumnStyle}` } : undefined}
        className={duolistClasses}
      >
        {React.Children.map(children, (child: React.ReactNode | React.ReactElement<DuolistGroupProps>) => {
          if (child === null || typeof child === 'undefined') return;
          const duolistGroup = child as React.ReactElement<DuolistGroupProps>;
          if (duolistGroup.type === DuolistGroup) {
            return React.cloneElement(child as React.ReactElement<DuolistGroupProps>, {
              ...duolistGroup.props,
              boldColumn: duolistGroup.props.boldColumn ?? boldColumn,
              format: duolistGroup.props.format ?? format,
              separator: duolistGroup.props.separator ?? separator,
            });
          }
        })}
      </dl>
    </div>
  );
};

export default Duolist;
