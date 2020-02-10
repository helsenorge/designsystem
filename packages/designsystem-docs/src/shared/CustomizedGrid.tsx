import styled from 'styled-components';
import * as Flexbox from 'react-flexbox-grid';

interface GridProps {
  padding?: number;
}

export const Grid = styled(Flexbox.Grid)<GridProps>`
  padding: 0 ${props => (props.padding ? `${props.padding}rem !important` : '0rem !important')};
`;

interface RowProps {
  gap?: number;
}

export const Row = styled(Flexbox.Row)<RowProps>``;

interface ColProps {
  padding?: number;
}

export const Col = styled(Flexbox.Col)<ColProps>`
  padding: 0 ${props => (props.padding ? `${props.padding}rem !important` : '0 !important')};
`;
