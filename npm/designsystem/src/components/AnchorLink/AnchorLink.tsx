import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { getColor } from '../../theme/currys';
import Icon, { IconSize } from '../Icon';
import ArrowUpRight from '../Icons/ArrowUpRight';

import AnchorLinkStyles from './styles.module.scss';

export type AnchorLinkTargets = '_self' | '_blank' | '_parent';

export type AnchorLinkTags = 'a' | 'button';

interface AnchorLinkProps {
  /** Sets the content of the <a> tag */
  children: React.ReactNode;
  /** URL to link to */
  href?: string;
  /** Gives a unique id to the anchor-link :) */
  id?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the target type of the <a> tag. _blank adds an arrow icon at the end of the link */
  target?: AnchorLinkTargets;
  /** HTML markup for anchor link. Default: a */
  htmlMarkup?: AnchorLinkTags;
  /** Function that is called when clicked */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent> | React.FormEvent<{}> | React.KeyboardEvent<HTMLUListElement> | null) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const AnchorLink = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, AnchorLinkProps>((props, ref) => {
  const { id, href, children, className, target = '_self', htmlMarkup = 'a', onClick, testId } = props;
  const external = target === '_blank';
  const { hoverRef, isHovered } = useHover<HTMLButtonElement | HTMLAnchorElement>(
    ref as React.RefObject<HTMLButtonElement | HTMLAnchorElement>
  );
  const anchorClasses = classNames(AnchorLinkStyles.anchorlink, className);

  const commonProps = {
    id,
    ['data-testid']: testId,
    ['data-analyticsid']: AnalyticsId.AnchorLink,
    onClick,
  };

  const renderContent = () => (
    <>
      {children}
      {external && (
        <Icon
          className={AnchorLinkStyles.anchorlink__icon}
          svgIcon={ArrowUpRight}
          color={getColor('blueberry', 600)}
          hoverColor={getColor('blueberry', 700)}
          size={IconSize.XSmall}
          isHovered={isHovered}
        />
      )}
    </>
  );

  return (
    <>
      {htmlMarkup === 'a' && (
        <a
          href={href}
          target={target}
          className={anchorClasses}
          rel={external ? 'noopener noreferrer' : undefined}
          ref={hoverRef as React.RefObject<HTMLAnchorElement>}
          {...commonProps}
        >
          {renderContent()}
        </a>
      )}
      {htmlMarkup === 'button' && (
        <button
          type="button"
          className={AnchorLinkStyles['anchorlink-wrapper']}
          ref={hoverRef as React.RefObject<HTMLButtonElement>}
          {...commonProps}
        >
          <span className={anchorClasses}>{renderContent()}</span>
        </button>
      )}
    </>
  );
});

export default AnchorLink;
