import React, { AriaAttributes } from 'react';

import classNames from 'classnames';

import { getResources } from './resourceHelper';
import { starIconHoverDesktop, starIconHoverMobile, starIconNormalDesktop, starIconNormalMobile } from './StarIcon';
import { AnalyticsId, HTMLButtonProps, LanguageLocales } from '../../constants';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { HNDesignsystemFavoriteButton } from '../../resources/Resources';
import { useLanguage } from '../../utils/language';
import { isMutableRefObject } from '../../utils/refs';

import styles from './styles.module.scss';

export interface FavoriteButtonProps extends HTMLButtonProps, AriaAttributes {
  /**  Determines if the FavoriteButton is checked */
  checked: boolean;
  /** Gives a unique id to the button */
  id?: string;
  /** Function that is called when clicked */
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Resources for component */
  resources?: Partial<HNDesignsystemFavoriteButton>;
  /** Specifies the focus order relative to the other buttons or controls on the page  */
  tabIndex?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const FavoriteButton = React.forwardRef(function FavoriteButtonForwardedRef(
  props: FavoriteButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { checked, id, onClick, resources, tabIndex, testId, ...other } = props;

  const buttonWrapperClasses = classNames(styles.favoritebutton);
  const { refObject, isFocused, isHovered, isActive } = usePseudoClasses<HTMLButtonElement>(isMutableRefObject(ref) ? ref : null);
  const breakpoint = useBreakpoint();
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemFavoriteButton = {
    ...defaultResources,
    ...resources,
    ariaLabel: other['aria-label'] || resources?.ariaLabel || defaultResources.ariaLabel,
  };

  const isMobile = breakpoint <= Breakpoint.sm;

  const starIcon = ((): React.JSX.Element => {
    if (isMobile) {
      if (isHovered) {
        return starIconHoverMobile(isFocused, checked, isActive);
      } else {
        return starIconNormalMobile(isFocused, checked, isActive);
      }
    } else {
      if (isHovered) {
        return starIconHoverDesktop(isFocused, checked, isActive);
      } else {
        return starIconNormalDesktop(isFocused, checked, isActive);
      }
    }
  })();

  return (
    <button
      id={id}
      onClick={onClick}
      data-testid={testId}
      data-analyticsid={AnalyticsId.FavoriteButton}
      className={buttonWrapperClasses}
      ref={refObject}
      tabIndex={tabIndex}
      role="switch"
      aria-checked={checked}
      type="button"
      aria-label={mergedResources.ariaLabel}
      {...other}
    >
      <svg focusable={false} overflow="visible" role="presentation" viewBox={isMobile ? '0 0 41 41' : '0 0 61 61'} {...other}>
        {starIcon}
      </svg>
    </button>
  );
});

FavoriteButton.displayName = 'FavoriteButton';

export default FavoriteButton;
