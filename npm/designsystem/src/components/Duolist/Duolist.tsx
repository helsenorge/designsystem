import React from 'react';
import classNames from 'classnames';

import duolistStyles from './styles.module.scss';
import { AnalyticsId } from '../../constants';
import { TitleProps } from '../Title';
import Spacer from '../Spacer';

export type DuolistVariants = 'normal' | 'line';
export type BoldColumn = 'first' | 'second' | 'none';
export type Border = 'no-border' | 'border';
export type Formats = 'formatted' | 'non-formatted';

interface DuolistProps {
  /** Determines which column is bold */
  boldColumn?: BoldColumn;
  /** Label of the Duolist */
  border?: Border;
  /** Label of the Duolist */
  label?: TitleProps;
  /** Formatted or non-formatted visual variants */
  format?: Formats;
  /** Character separator for non-formatted format */
  separator?: string;
  /** Sets the visual variant of the Duolist. */
  variant?: DuolistVariants;
  /** Sets the content of the Duolist. */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Width of the description column in percentage */
  descriptionWidth?: number;
}

interface DuolistGroupProps {
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
        <dt data-separator={nonFormatted ? separator : undefined} className={dtClassNames}>
          {term}
        </dt>
        <dd className={ddClassNames}>{description}</dd>
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
    variant = 'normal',
    children,
    className,
    testId,
  } = props;

  const hasBorder = border === 'border';
  const hasLines = variant === 'line';
  const extraPaddingTop = hasBorder && (label || hasLines);
  const nonFormatted = format === 'non-formatted';

  const duolistWrapperClasses = classNames(
    duolistStyles['duolist-wrapper'],
    {
      [duolistStyles['duolist-wrapper--border']]: hasBorder,
      [duolistStyles['duolist-wrapper--extra-padding-top']]: extraPaddingTop,
    },
    className
  );

  const duolistClasses = classNames(duolistStyles.duolist, {
    [duolistStyles['duolist--line']]: hasLines,
    [duolistStyles['duolist--non-formatted']]: nonFormatted,
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
      <dl style={!nonFormatted ? { gridTemplateColumns: `auto ${duolistColumnStyle}` } : undefined} className={duolistClasses}>
        {React.Children.map(children, (child: React.ReactNode | React.ReactElement<DuolistGroupProps>) => {
          if (child === null || typeof child === 'undefined') return;
          const duolistGroup = child as React.ReactElement<DuolistGroupProps>;
          if (duolistGroup.type === DuolistGroup) {
            return React.cloneElement(child as React.ReactElement<DuolistGroupProps>, {
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
