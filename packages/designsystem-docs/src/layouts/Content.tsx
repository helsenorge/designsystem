import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

function Content(props: ContentProps): JSX.Element {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

const StyledContent = styled(Content)`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: stretch;
`

export {StyledContent as Content}