import React from 'react';
import Icon, { IconSize } from '../Icons';
import ArrowUpRight from '../Icons/ArrowUpRight';
import { getColor } from '../../theme/currys';
import { useHover } from '../../hooks/useHover';

import AnchorLinkStyles from './styles.module.scss';
import classNames from 'classnames';

export type AnchorLinkTargets = '_self' | '_blank' | '_parent';

interface AnchorLinkProps {
  /** Sets the content of the <a> tag */
  children: React.ReactNode;
  /** URL to link to */
  href: string;
  /** Gives a unique id to the anchor-link :) */
  id?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the target type of the <a> tag. _blank adds an arrow icon at the end of the link */
  target?: AnchorLinkTargets;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const AnchorLink = React.forwardRef(function AnchorLinkForwardedRef(props: AnchorLinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) {
  const { id, href, children, className, target = '_self', testId } = props;
  const external = target === '_blank';
  const { hoverRef, isHovered } = useHover<HTMLAnchorElement>(ref as React.RefObject<HTMLAnchorElement>, undefined, false);
  const anchorClasses = classNames(AnchorLinkStyles.anchorlink, className ?? '');

  return (
    <a id={id} href={href} className={anchorClasses} target={target} ref={hoverRef} data-testid={testId}>
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
    </a>
  );
});

export default AnchorLink;
