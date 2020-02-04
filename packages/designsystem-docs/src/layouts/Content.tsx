import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

function Content(props: ContentProps): JSX.Element {
  return <div className={props.className}>{props.children}</div>;
}

const StyledContent = styled(Content)`
  height: auto;
  display: flex;
  flex: 1;
`;

export {StyledContent as Content};
