import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import styled, {css} from 'styled-components';
import dracula from 'prism-react-renderer/themes/dracula';
import {LivePreview, LiveProvider, LiveEditor} from 'react-live';
import {Icon} from '@helsenorge/designsystem-react';

import toggleIcon from '../../../images/code.svg';

const scope = {Icon};

interface StyledToggleButtonProps {
  active?: boolean;
}

const StyledToggleButton = styled('button')<StyledToggleButtonProps>`
  padding: 0.25rem;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: transparent;
  top: 0;
  right: 0;
  margin: 0.5rem;
  position: absolute;
  height: auto;
  &:hover {
    border: 1px solid #dedbd3;
  }
  ${props =>
    props.active &&
    css`
      border: 1px solid #9b978c;
      background-color: white;
    `}
`;

const StyledToggleIcon = styled('img')`
  width: 1rem;
  height: 1rem;
`;

interface CodeToggleButtonProps {
  editorToggle: Dispatch<SetStateAction<boolean>>;
}

function CodeToggleButton(props: CodeToggleButtonProps) {
  const {editorToggle} = props;
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => editorToggle(isToggled), [isToggled]);
  return (
    <StyledToggleButton active={isToggled} onClick={() => setIsToggled(!isToggled)}>
      <StyledToggleIcon src={toggleIcon} />
    </StyledToggleButton>
  );
}

interface ComponentPreviewProps {
  editorToggle: Dispatch<SetStateAction<boolean>>;
}

function ComponentPreview(props: ComponentPreviewProps) {
  const {editorToggle} = props;
  return (
    <StyledLivePreview>
      <LivePreview />
      <CodeToggleButton editorToggle={editorToggle} />
    </StyledLivePreview>
  );
}

const StyledLivePreview = styled('div')`
  padding: 1rem;
  position: relative;
  background-color: #f6f5f2;
  border: 1px solid #dedbd3;
`;

const StyledLiveEditor = styled(LiveEditor)``;

interface ComponentRenderProps {
  children: React.ReactNode;
  reactCode: string;
  htmlCode: string;
}

function ComponentRenderer(props: ComponentRenderProps) {
  const [isEditorToggled, setIsEditorToggled] = useState(false);
  return (
    // <LiveProvider disabled theme={dracula} scope={scope} code="<Icon>alarmclock</Icon>">
    //   <ComponentPreview editorToggle={setIsEditorToggled} />
    //   {/* {isEditorToggled ? <StyledLiveEditor value="<Icon>pencil</Icon>" /> : null} */}
    // </LiveProvider>
    <div></div>
  );
}

export default ComponentRenderer;
