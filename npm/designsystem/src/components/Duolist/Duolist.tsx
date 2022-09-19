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
}

interface DuolistGroupProps {
  /** Determines which column is bold */
  boldColumn?: BoldColumn;
  /** Sets text of the <dd> tag. */
  description: string;
  /** Sets text of the <dt> tag. */
  term: string;
}

export const DuolistGroup = React.forwardRef<HTMLElement, DuolistGroupProps>(props => {
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
});

export const Duolist = React.forwardRef<HTMLDivElement, DuolistProps>(props => {
  const { boldColumn, border = 'no-border', label, variant = 'normal', children, className, testId } = props;

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

  return (
    <div className={duolistWrapperClasses} data-testid={testId} data-analyticsid={AnalyticsId.Duolist}>
      {label && (
        <>
          {label}
          <Spacer />
        </>
      )}
      <dl className={duolistClasses}>
        {React.Children.map(children, (child: React.ReactNode | React.ReactElement<DuolistGroupProps>) => {
          if ((child as React.ReactElement<DuolistGroupProps>).type === DuolistGroup) {
            return React.cloneElement(child as React.ReactElement<DuolistGroupProps>, { boldColumn });
          }
        })}
      </dl>
    </div>
  );
});

export default Duolist;
