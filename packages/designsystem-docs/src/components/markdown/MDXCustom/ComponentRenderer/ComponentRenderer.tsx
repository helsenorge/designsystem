import React, {useEffect, useState, Props, useRef} from 'react';
import ReactDOMServer from 'react-dom/server';
import dracula from 'prism-react-renderer/themes/dracula';
import styled from 'styled-components';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import {EditorButton, ComponentEditorOptionPanel} from './ComponentRenderer/ComponentEditorOptionsPanel';

import html from '../../images/html5-brands.svg';
import htmlHover from '../../images/html5-brands-hover.svg';
import stencil from '../../images/stencil-brands.svg';
import stencilHover from '../../images/stencil-brands-hover.svg';
import react from '../../images/react-brands.svg';
import reactHover from '../../images/react-brands-hover.svg';

interface DefaultProps {
  children?: React.ReactElement;
  className?: string;
}

/**
 * EDITOR
 */

function StyledComponentEditor({className, children}: DefaultProps) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  return (
    <div className={className}>
      <ComponentEditorOptionPanel isEditorOpen={isEditorOpen}>
        <EditorButton onClick={() => setIsEditorOpen(!isEditorOpen)} icon={react} hoverIcon={reactHover} />
      </ComponentEditorOptionPanel>
      {isEditorOpen ? <ComponentLiveEditor /> : null}
    </div>
  );
}

const ComponentLiveEditor = styled(LiveEditor)`
  border: 1px solid #dedbd3;
  border-top: 0;
`;

const ComponentEditor = styled(StyledComponentEditor)`
  width: 100%;
`;

/**
 * RENDERER
 */

interface ComponentRendererProps extends DefaultProps {
  disableEditor?: boolean;
}

function StyledComponentRenderer({className, children, disableEditor = false}: ComponentRendererProps) {
  const code = ReactDOMServer.renderToStaticMarkup(children);
  return (
    <LiveProvider code={code} theme={dracula}>
      <ComponentPreview />
      {/* {isEditorOpen ? <ComponentEditor /> : null} */}
      <ComponentEditor />
      <LiveError />
    </LiveProvider>
  );
}

const ComponentPreview = styled(LivePreview)`
  padding: 1rem;
  background-color: #f6f5f2;
  border: 1px solid #dedbd3;
`;

const ComponentRenderer = styled(StyledComponentRenderer)``;

export default ComponentRenderer;
