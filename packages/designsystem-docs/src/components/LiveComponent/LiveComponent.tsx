import React, {useState} from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import {LiveProvider, LiveEditor, LivePreview} from 'react-live';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import SideBar from '../../layouts/NewSideBar';
import {Code} from 'react-feather';

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
  children: React.ReactElement;
  code?: string;
  scope?: any;
}

function LiveComponent(props: LiveComponentProps) {
  const {children, code, scope} = props;
  // const code = ReactDOMServer.renderToString(children);
  return (
    // <LiveProvider scope={scope} code={code}>
    //   <LivePreview />
    //   <LiveEditor />
    // </LiveProvider>
    <LiveShit>{children}</LiveShit>
  );
}

const LiveShit = styled('div')`
  padding: 2rem;
  background-color: #f1f1f1;
`;

export default LiveComponent;
