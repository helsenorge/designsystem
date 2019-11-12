import React, {useRef} from 'react';
import styled from 'styled-components';

interface EditorButtonProps {
  className?: string;
  onClick: () => void;
  hoverIcon?: string;
  icon?: string;
  isActive?: boolean;
  isPanelOpen?: boolean;
}

function StyledEditorButton({
  className,
  onClick,
  icon,
  hoverIcon,
  isActive = false,
  isPanelOpen = false,
}: EditorButtonProps) {
  const iconRef = useRef(null);
  return (
    <button
      onMouseEnter={() => (iconRef.current.src = `${hoverIcon}`)}
      onMouseLeave={() => (iconRef.current.src = `${icon}`)}
      onClick={onClick}
      className={className}>
      <img ref={iconRef} src={isPanelOpen ? `${hoverIcon}` : `${icon}`} />
    </button>
  );
}

const EditorButton = styled(StyledEditorButton)<EditorButtonProps>`
  outline: none;
  background: 0;
  border: 0;
  padding: 0.2rem 0.4rem;
  background-color: ${props => (props.isActive ? '#e6e8eb' : 0)};
  cursor: pointer;
  & > img {
    width: 1rem;
  }
`;

const ComponentEditorOptionPanel = styled('div')<{isEditorOpen: boolean}>`
  display: flex;
  justify-content: flex-end;
  height: 2rem;
  width: 100%;
  border-right: ${props => (props.isEditorOpen ? '1px solid #dedbd3' : '1px solid transparent')};
  border-left: ${props => (props.isEditorOpen ? '1px solid #dedbd3' : '1px solid transparent')};
  background-color: ${props => (props.isEditorOpen ? '#f0f2f5' : 0)};
`;

export {ComponentEditorOptionPanel, EditorButton};
