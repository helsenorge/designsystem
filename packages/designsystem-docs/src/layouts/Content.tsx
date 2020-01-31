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
  /* position: relative; */
  height: auto;
  min-height: 800px;
  display: flex;
  flex: 1;
  box-sizing: content-box;
  border: 32px solid #d6f5f3;
`;

export {StyledContent as Content};
