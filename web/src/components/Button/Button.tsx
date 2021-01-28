import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  tiny?: boolean;
}

const Button = styled('button')<ButtonProps>`
  background-color: #fff0be;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #e8be36;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #e8be36;
  }
  ${props =>
    props.tiny &&
    css`
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
    `}
`;

export default Button;
