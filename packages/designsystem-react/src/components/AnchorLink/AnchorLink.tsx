import React from 'react';
import Icon from '../Icons';
import ArrowUpRight from '../Icons/ArrowUpRight';
import StyledAnchorLink from './AnchorLink.styled';
import {getColor} from '../../theme/currys';
import {useHover} from '../../hooks/useHover';

export type AnchorLinkTargets = '_self' | '_blank' | '_parent';

interface AnchorLinkProps {
  children: React.ReactNode;
  href: string;
  id?: string;
  className?: string;
  target?: AnchorLinkTargets;
}

const AnchorLink = React.forwardRef((props: AnchorLinkProps, ref: any) => {
  const {id, href, children, className, target = '_self'} = props;
  const external = target === '_blank';
  const {hoverRef, isHovered} = useHover<HTMLAnchorElement>(ref);
  return (
    <StyledAnchorLink id={id} href={href} className={className} target={target} external={external} ref={hoverRef}>
      {children}
      {external && (
        <Icon
          svgIcon={ArrowUpRight}
          color={getColor('blueberry', 600)}
          hoverColor={getColor('blueberry', 700)}
          size={38}
          isHovered={isHovered}
        />
      )}
    </StyledAnchorLink>
  );
});

export default AnchorLink;
