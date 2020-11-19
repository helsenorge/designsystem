import React, {useState, HTMLProps} from 'react';
import styled, {css} from 'styled-components';
import {LiveProvider, LiveEditor, LivePreview, LiveError} from 'react-live';
import theme from 'prism-react-renderer/themes/dracula';
import {Code} from 'react-feather';

interface LiveComponentProps {
  children: string;
  scope?: any;
  stack?: boolean;
  fullWidth?: boolean;
  backgroundColor?: string;
}

function LiveComponent(props: LiveComponentProps) {
  const {children, scope, stack = false, fullWidth = false, backgroundColor} = props;
  const [showEditor, setShowEditor] = useState(false);
  return (
    <LiveProvider theme={theme} scope={{styled, ...scope}} code={`<>${children}</>`}>
      <StyledLivePreviewContainer backgroundColor={backgroundColor}>
        <StyledLivePreview hasFullWidth={fullWidth} stack={stack} />
        <ToggleButton active={showEditor} onClick={() => setShowEditor(!showEditor)}>
          <Code size={16} />
        </ToggleButton>
      </StyledLivePreviewContainer>
      {showEditor ? (
        <>
          <StyledLiveEditor />
          <StyledLiveError />
        </>
      ) : null}
    </LiveProvider>
  );
}

const ToggleButton = styled('button')<{active: boolean}>`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background-color: ${props => (props.active ? '#e2e2e2' : '#f9f9f9')};
  border: 0;
  padding: 0.3rem;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 200ms;
  &:hover {
    background-color: #f1f1f1;
  }
`;

interface LivePreviewProps extends HTMLProps<HTMLDivElement> {
  stack: boolean;
  hasFullWidth: boolean;
}

const StyledLivePreview = styled(LivePreview)<LivePreviewProps>`
  width: ${props => (props.hasFullWidth ? '100%' : 'auto')};
  display: inline-flex;
  flex-direction: ${props => (props.stack ? 'column' : 'row')};
  flex-wrap: wrap;
  & > * {
    margin-right: 0.5rem;
    ${props =>
      props.stack &&
      css`
        margin-bottom: 0.5rem;
      `}
  }
`;

const StyledLiveError = styled(LiveError)`
  background-color: red;
  color: white;
  margin: 0;
`;

const StyledLiveEditor = styled(LiveEditor)`
  font-size: 1.25rem;
  font-family: 'Fira code', 'Fira Mono', monospace;
`;

interface LivePreviewContainerProps extends HTMLProps<HTMLDivElement> {
  backgroundColor?: string;
}

const StyledLivePreviewContainer = styled('div')<LivePreviewContainerProps>`
  position: relative;
  display: flex;
  overflow: auto;
  padding: 1.5rem;
  width: 100%;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#f9f9f9')};
  border: 2px solid #f1f1f1;
  transition: border 200ms;
  &:hover {
    border: 2px solid #e2e2e2;
  }
`;

export default LiveComponent;
