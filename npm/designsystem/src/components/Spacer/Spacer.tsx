import classNames from 'classnames';

import type { SpacerSizes } from './../../theme/spacers';

import { AnalyticsId } from '../../constants';

import spacerStyles from './styles.module.scss';

export interface SpacerProps {
  /** Sets the size of the spacer. */
  size?: SpacerSizes;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref passed to the component */
  ref?: React.Ref<HTMLElement | null>;
}

const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {
  const { size = 's', className, testId, ref } = props;
  const spacerClasses = classNames(
    spacerStyles.spacer,
    {
      [spacerStyles['spacer--4xs']]: size === '4xs',
      [spacerStyles['spacer--3xs']]: size === '3xs',
      [spacerStyles['spacer--2xs']]: size === '2xs',
      [spacerStyles['spacer--xs']]: size === 'xs',
      [spacerStyles['spacer--s']]: size === 's',
      [spacerStyles['spacer--m']]: size === 'm',
      [spacerStyles['spacer--l']]: size === 'l',
      [spacerStyles['spacer--xl']]: size === 'xl',
      [spacerStyles['spacer--2xl']]: size === '2xl',
      [spacerStyles['spacer--3xl']]: size === '3xl',
      [spacerStyles['spacer--4xl']]: size === '4xl',
      [spacerStyles['spacer--5xl']]: size === '5xl',
      [spacerStyles['spacer--6xl']]: size === '6xl',
    },
    className
  );

  return <span className={spacerClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.Spacer}></span>;
};

export default Spacer;
