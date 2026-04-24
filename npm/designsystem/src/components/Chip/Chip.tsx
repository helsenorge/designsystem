import classNames from 'classnames';

import type { HNDesignsystemChip } from '../../resources/Resources';

import { getResources } from './resourceHelper';
import { AnalyticsId, LanguageLocales } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';
import Icon, { IconSize } from '../Icon';
import X from '../Icons/X';

import styles from './styles.module.scss';

export interface ChipProps {
  /** @deprecated Called when action is set and the chip is clicked on. action must also be set. */
  onClick?: () => void;
  /** Sets the text of the chip */
  children: string;
  /** Wether or not to have a close button */
  withCloseButton?: boolean;
  /** onClick handler for text-part of the chip */
  onChipClick?: () => void;
  /** Button props for main chip button */
  chipButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** onClick handler for close button */
  onCloseClick?: () => void;
  /** Button props for the close button */
  closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
  /** Resources for the component */
  resources?: Partial<HNDesignsystemChip>;
}

const Chip: React.FC<ChipProps> = props => {
  const {
    onClick,
    children,
    onChipClick,
    onCloseClick,
    chipButtonProps,
    closeButtonProps,
    testId,
    withCloseButton = true,
    resources,
  } = props;
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const mergedResources: HNDesignsystemChip = {
    ...defaultResources,
    ...resources,
    removeAriaLabel: closeButtonProps?.['aria-label'] || resources?.removeAriaLabel || `${defaultResources.removeAriaLabel} ${children}`,
  };

  return (
    <div className={styles['chip']}>
      <button
        {...chipButtonProps}
        className={classNames(styles['chip__chip'])}
        onClick={onClick ? onClick : onChipClick}
        type="button"
        data-testid={testId}
        data-analyticsid={AnalyticsId.Tag}
      >
        <span
          className={classNames(styles['chip__chip__inner'], {
            [styles['chip__chip__inner--without-close']]: !withCloseButton,
          })}
        >
          {children}
        </span>
      </button>
      {withCloseButton && (
        <button
          {...closeButtonProps}
          aria-label={mergedResources.removeAriaLabel}
          className={classNames(styles['chip__close'])}
          onClick={onClick ? onClick : onCloseClick}
          type="button"
          data-testid={`${testId}-close`}
          data-analyticsid={AnalyticsId.Tag}
        >
          <span className={styles['chip__close__inner']}>
            <Icon svgIcon={X} size={IconSize.XXSmall} />
          </span>
        </button>
      )}
    </div>
  );
};

export default Chip;
