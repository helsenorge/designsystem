import React from 'react';
import Icon from '../Icons';
import StyledAnchorLink from './AnchorLink.styled';

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
  return (
    <StyledAnchorLink id={id} href={href} className={className} target={target} external={external} ref={ref}>
      {children}
      {external && <Icon type="arrowUpRight" color={'blueberry'} size={38} />}
    </StyledAnchorLink>
  );
});

export default AnchorLink;
