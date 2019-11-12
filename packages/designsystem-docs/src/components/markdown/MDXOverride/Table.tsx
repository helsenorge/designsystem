import styled from 'styled-components';

const Table = styled('table')`
    border: 2px solid #ccc;
    border-collapse: collapse;
    max-width: 100%;
    overflow-x: scroll;
`

const TableRow = styled('tr')`
    
`

const TableCell = styled('td')`
    padding: .2rem .5rem;
    border: 1px solid #ccc;
`

const TableHeader = styled('th')`
    padding: .4rem .5rem;
`

export { Table, TableRow, TableCell, TableHeader };