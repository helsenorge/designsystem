import React from 'react';
import styled from 'styled-components';

interface ComponentPropsProps {
  propData: any;
}

// TODO: Fix this insanly long prop drilling
export function ComponentProps(props: ComponentPropsProps) {
  const data = props.propData.propData.default.props;
  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableHeadColumn>Name</StyledTableHeadColumn>
            <StyledTableHeadColumn>Type</StyledTableHeadColumn>
            <StyledTableHeadColumn>Required</StyledTableHeadColumn>
            <StyledTableHeadColumn>Default value(s)</StyledTableHeadColumn>
            <StyledTableHeadColumn>Valid value(s)</StyledTableHeadColumn>
            <StyledTableHeadColumn>Description</StyledTableHeadColumn>
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {data &&
            data.map((prop: any, index: number) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableColumn>{prop.name}</StyledTableColumn>
                  <StyledTableColumn>{prop.type}</StyledTableColumn>
                  <StyledTableColumn>{prop.require}</StyledTableColumn>
                  <StyledTableColumn>{prop.default}</StyledTableColumn>
                  <StyledTableColumn>{prop.valid.join(', ')}</StyledTableColumn>
                  <StyledTableColumn>{prop.description}</StyledTableColumn>
                </StyledTableRow>
              );
            })}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}

const StyledTableContainer = styled('div')`
  overflow: auto;
`;

const StyledTable = styled('table')`
  border-collapse: collapse;
`;

const StyledTableHead = styled('thead')`
  border: 2px solid #e5e5e5;
`;

const StyledTableBody = styled('tbody')`
  border: 2px solid #e5e5e5;
`;

const StyledTableRow = styled('tr')``;

const StyledTableHeadColumn = styled('th')`
  font-weight: 400;
  background-color: #f9f9f9;
  padding: 0.25rem 1rem;
`;

const StyledTableColumn = styled('td')`
  padding: 0.25rem 1rem;
`;
