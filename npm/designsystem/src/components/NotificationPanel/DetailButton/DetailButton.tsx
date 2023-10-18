import React, { useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../../constants';
import { useUuid } from '../../../hooks/useUuid';
import { AriaLabelAttributes, getAriaLabelAttributes } from '../../../utils/accessibility';
import Button, { ButtonProps } from '../../Button';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';

import styles from './styles.module.scss';

type Props = {
  content: React.ReactNode;
  buttonClosedText: string;
  buttonText: string;
  expanderOpenFromStart: boolean;
};
export const DetailButton: React.FC<Props> = ({ content, buttonText, buttonClosedText, expanderOpenFromStart }: Props): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanderOpenFromStart);
  const activeButtonText = isExpanded ? buttonText : buttonClosedText;

  const buttonTextId = useUuid();

  const ariaLabelAttributes = getAriaLabelAttributes({
    label: activeButtonText,
    id: buttonTextId,
    prefer: 'label',
  });

  const commonProps: Partial<ButtonProps> & AriaLabelAttributes = {
    onClick: () => setIsExpanded(!isExpanded),
    variant: 'borderless',
    className: classNames(styles['notification-panel__detail'], styles['notification-panel__detail-button']),
    'aria-expanded': isExpanded,
    ...ariaLabelAttributes,
  };

  return (
    <div className={styles['notification-panel__detail-section']}>
      <div className={styles['notification-panel__detail-section__button--wrapper']}>
        <Button testId="expand" data-analyticsid={AnalyticsId.Expander} {...commonProps}>
          {activeButtonText}
          <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} />
        </Button>
      </div>
      {isExpanded && <div className={classNames(styles['notification-panel__detail-section__content'])}>{content}</div>}
    </div>
  );
};
