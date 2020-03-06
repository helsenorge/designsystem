import React from 'react';
import styled from 'styled-components';
import {palette} from '@styles/styled-constants';

const CheckboxContainer = styled('div')`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const Icon = styled('svg')`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled('input').attrs({type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled('div')<{checked: boolean}>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: ${props => (props.checked ? palette('blueberry500') : palette('blueberry100'))};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

function Checkbox({
  className,
  checked,
  label,
  onChange,
  ...props
}: {
  className?: string;
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <label style={{cursor: 'pointer'}}>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <span style={{marginLeft: '0.5rem'}}>{label}</span>
    </label>
  );
}

export default Checkbox;
