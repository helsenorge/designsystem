import React from 'react';
import Icon from '../Icons';
import ArrowUpRight from '../Icons/ArrowUpRight';
import { getColor } from '../../theme/currys';
import { useHover } from '../../hooks/useHover';

import AnchorLinkStyles from './styles.module.scss';
import classNames from 'classnames';

export type AnchorLinkTargets = '_self' | '_blank' | '_parent';

interface AnchorLinkProps {
  children: React.ReactNode;
  href: string;
  id?: string;
  className?: string;
  target?: AnchorLinkTargets;
}

const AnchorLink = React.forwardRef(function AnchorLinkForwardedRef(props: AnchorLinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) {
  const { id, href, children, className, target = '_self' } = props;
  const external = target === '_blank';
  const { hoverRef, isHovered } = useHover<HTMLAnchorElement>(ref as React.RefObject<HTMLAnchorElement>, undefined, false);
  const anchorClasses = classNames(AnchorLinkStyles.anchorlink, className ?? '');

  return (
    <a id={id} href={href} className={anchorClasses} target={target} ref={hoverRef}>
      {children}
      {external && (
        <Icon
          className={AnchorLinkStyles.anchorlink__icon}
          svgIcon={ArrowUpRight}
          color={getColor('blueberry', 600)}
          hoverColor={getColor('blueberry', 700)}
          size={38}
          isHovered={isHovered}
        />
      )}
    </a>
  );
});

export default AnchorLink;
