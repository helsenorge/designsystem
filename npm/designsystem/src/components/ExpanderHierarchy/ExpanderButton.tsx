import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { useHover } from '../../hooks/useHover';
import { ExpanderHierarchyCommonProps } from '../ExpanderHierarchy';
import Icon, { IconSize } from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';

import styles from './expander.module.scss';

interface ExpanderButtonProps extends ExpanderHierarchyCommonProps {
  expanded: boolean;
  onExpand?: (isExpanded: boolean) => void;
  children: string;
  testId?: string;
}

const ExpanderButton: React.FC<ExpanderButtonProps> = ({ htmlMarkup = 'h2', level = 1, print, expanded, onExpand, children, testId }) => {
  const { hoverRef, isHovered } = useHover<HTMLButtonElement>();
  const [isExpanded, setIsExpanded] = useExpand(expanded, onExpand);

  const handleClick = (): void => {
    setIsExpanded(!isExpanded);
  };

  const CustomTag = htmlMarkup;

  const buttonClasses = classNames(
    styles.expander__button,
    level > 1 && styles[`expander__button--2-and-lower`],
    print && styles['expander__button--print']
  );

  const titleClasses = classNames(
    styles.expander__title,
    (level === 1 || level === 2 || level === 3) && styles[`expander__title--${level}`],
    level > 3 && styles[`expander__title--4-and-lower`],
    isExpanded && styles['expander__title--expanded'],
    print && styles['expander__title--print']
  );

  const iconClasses = classNames(
    styles.expander__icon,
    level > 1 && styles[`expander__icon--2-and-lower`],
    level > 2 && styles[`expander__icon--3-and-lower`]
  );

  return (
    <CustomTag className={titleClasses}>
      <button
        type="button"
        onClick={handleClick}
        className={buttonClasses}
        aria-expanded={isExpanded}
        ref={hoverRef}
        data-testid={testId}
        data-analyticsid={AnalyticsId.ExpanderHierarchyExpander}
      >
        {children}
        <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} isHovered={isHovered} className={iconClasses} size={IconSize.XSmall} />
      </button>
    </CustomTag>
  );
};

export default ExpanderButton;
