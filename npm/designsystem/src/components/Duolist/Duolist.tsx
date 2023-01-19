import React from 'react';
import classNames from 'classnames';

import duolistStyles from './styles.module.scss';
import { AnalyticsId } from '../../constants';
import { TitleProps } from '../Title';
import Spacer from '../Spacer';

export type DuolistVariants = 'normal' | 'line';
export type BoldColumn = 'first' | 'second';
export type Border = 'no-border' | 'border';

interface DuolistProps {
  /** Determines which column is bold */
  boldColumn?: BoldColumn;
  /** Label of the Duolist */
  border?: Border;
  /** Label of the Duolist */
  label?: TitleProps;
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
  /** Sets content of the <dt> tag. */
  term: React.ReactNode;
}

export const DuolistGroup: React.FC<DuolistGroupProps> = props => {
  const { boldColumn = 'first', description, term } = props;

  const firstBold = boldColumn === 'first';

  const dtClassNames = classNames(duolistStyles['duolist__dt'], { [duolistStyles['duolist__dt--bold']]: firstBold });
  const ddClassNames = classNames(duolistStyles['duolist__dd'], { [duolistStyles['duolist__dd--bold']]: !firstBold });

  return (
    <>
      <dt className={dtClassNames}>{term}</dt>
      <dd className={ddClassNames}>{description}</dd>
    </>
  );
};

export const Duolist: React.FC<DuolistProps> = props => {
  const { boldColumn, border = 'no-border', descriptionWidth, label, variant = 'normal', children, className, testId } = props;

  const hasBorder = border === 'border';
  const hasLines = variant === 'line';
  const extraPaddingTop = hasBorder && (label || hasLines);

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
      <dl style={{ gridTemplateColumns: `auto ${duolistColumnStyle}` }} className={duolistClasses}>
        {React.Children.map(children, (child: React.ReactNode | React.ReactElement<DuolistGroupProps>) => {
          if (child === null || typeof child === 'undefined') return;
          const duolistGroup = child as React.ReactElement<DuolistGroupProps>;
          if (duolistGroup.type === DuolistGroup) {
            return React.cloneElement(child as React.ReactElement<DuolistGroupProps>, {
              boldColumn: duolistGroup.props.boldColumn ?? boldColumn,
            });
          }
        })}
      </dl>
    </div>
  );
};

export default Duolist;
