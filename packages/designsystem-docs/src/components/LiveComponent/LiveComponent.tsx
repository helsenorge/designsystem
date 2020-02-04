import React, {useState} from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import {LiveProvider, LiveEditor, LivePreview, LiveError} from 'react-live';
import theme from 'prism-react-renderer/themes/dracula';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import SideBar from '../../layouts/NewSideBar';
import {Code} from 'react-feather';
import {Badge} from '@helsenorge/designsystem-react';
import {palette} from '@styles/styled-constants';

// const StyledLiveComponent = styled('div')`
//   width: 500px;
//   /* height: auto; */
//   /* min-height: 400px; */
//   border: 1px solid #ccc;
//   /* padding: 1rem; */
//   background: #f0f0f0;
//   margin-top: 1rem;
// `;
// const ToolBar = styled('div')`
//   width: 100%;
//   height: 2rem;
//   display: flex;
//   align-items: center;
//   padding-left: 1rem;
//   /* float: right; */
//   background: white;
//   /* margin-bottom: 1rem; */
//   /* border-bottom: 1px solid #ccc; */
// `;
// const ToolBarIcon = styled(Code)`
//   margin-left: auto;
//   margin-right: 1rem;
// `;
// const ComponentBox = styled('div')`
//   padding: 1rem;
//   height: auto;
// `;

// const CodeBox = styled('div')`
//   width: 100%;
//   height: auto;
//   background: #4a4a4a;
//   margin-bottom: 1rem;
//   font-size: 1.125rem;
// `;

// function displayCodeBox(show: boolean) {
//   return show ? (
//     <CodeBox>
//       <LiveEditor />
//     </CodeBox>
//   ) : null;
// }

// function LiveComponent() {
//   const [showCodeBox, setShowCodeBox] = useState(false);
//   const scope = {DropDownMenu};
//   const code = `<DropDownMenu>Hello World!</DropDownMenu>`;

//   return (
//     <StyledLiveComponent>
//       <ToolBar>
//         DropDownMenu
//         <ToolBarIcon size={16} color={'#aaa'} onClick={() => setShowCodeBox(!showCodeBox)} />
//       </ToolBar>
//       <ComponentBox>
//         <LiveProvider code={code} scope={scope}>
//           {displayCodeBox(showCodeBox)}
//           <LivePreview />
//         </LiveProvider>
//       </ComponentBox>
//     </StyledLiveComponent>
//   );
// }

interface LiveComponentProps {
  children: string;
  scope?: any;
}

function LiveComponent(props: LiveComponentProps) {
  const {children, scope} = props;
  const [showEditor, setShowEditor] = useState(false);
  return (
    <LiveProvider theme={theme} scope={{styled, ...scope}} code={`<>${children}</>`}>
      <StyledLivePreviewContainer>
        <StyledLivePreview />
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

const StyledLivePreview = styled(LivePreview)`
  display: inline-flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 0.5rem;
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

const StyledLivePreviewContainer = styled('div')`
  position: relative;
  display: flex;
  padding: 1.5rem;
  width: 100%;
  background-color: #f9f9f9;
  border: 2px solid #f1f1f1;
  transition: border 200ms;
  & * {
    box-sizing: initial;
  }
  &:hover {
    border: 2px solid #e2e2e2;
  }
`;

export default LiveComponent;
