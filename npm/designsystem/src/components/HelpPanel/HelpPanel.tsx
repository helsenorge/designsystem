import classNames from 'classnames';

import { useIsMobileBreakpoint } from '@helsenorge/designsystem-react/hooks/useIsMobileBreakpoint';

import Icon, { IconSize } from '../Icon';
import HandWaving from '../Icons/HandWaving';
import Title from '../Title';

import styles from './styles.module.scss';

export type HelpPanelVariants = 'normal' | 'subdued';

export interface HelpPanelProps {
  /** The content of the component */
  children: React.ReactNode;
  /** Sets the visual variant */
  variant?: HelpPanelVariants;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets title if needed */
  title?: string;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ className, variant = 'normal', testId, children, title }) => {
  const isMobile = useIsMobileBreakpoint();

  const containerClassName = classNames(
    styles['help-panel'],
    {
      [styles['help-panel--subdued']]: variant === 'subdued',
    },
    className
  );

  const renderContent = (): React.ReactNode => {
    const titleElement = title && (
      <Title testId="titleId" htmlMarkup={'h2'} appearance={'title6'}>
        {title}
      </Title>
    );

    const iconSize = isMobile ? IconSize.XSmall : IconSize.Small;

    return (
      <>
        <div className={styles['help-panel__icon']}>{<Icon svgIcon={HandWaving} size={iconSize} />}</div>
        <div className={styles['help-panel__content']}>
          <div className={styles['help-panel__title-wrapper']}>{titleElement}</div>
          {children}
        </div>
      </>
    );
  };

  return (
    <div className={containerClassName} data-testid={testId}>
      {renderContent()}
    </div>
  );
};

export default HelpPanel;
