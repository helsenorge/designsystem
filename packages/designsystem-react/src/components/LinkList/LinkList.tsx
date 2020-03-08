import React from 'react';
import {StyledLinkList} from './LinkList.styled';

interface LinkList {
  children: React.ReactNode;
  icon: React.ReactElement;
  chevron?: boolean;
}

const LinkList = React.forwardRef((props: LinkList, ref: any) => {
  const {children, icon, chevron = true} = props;
  return <StyledLinkList></StyledLinkList>;
});

export default LinkList;
