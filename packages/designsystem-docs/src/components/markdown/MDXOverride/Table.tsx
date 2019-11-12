import styled from 'styled-components';

const Table = styled('table')`
  border: 2px solid #ccc;
  border-collapse: collapse;
  max-width: 100%;
  overflow-x: scroll;
`;

const TableRow = styled('tr')``;

const TableCell = styled('td')`
  padding: 0.2rem 0.5rem;
  border: 1px solid #ccc;
`;

const TableHeader = styled('th')`
  padding: 0.4rem 0.5rem;
`;

export {Table, TableRow, TableCell, TableHeader};
